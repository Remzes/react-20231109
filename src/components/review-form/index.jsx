import { useCallback, useReducer } from "react"
import { Counter } from "../counter"
import { TextInput } from "../form-controllers/text-input"

import styles from './styles.module.css'
import { useCreateReviewMutation } from "../../redux/entities/reviews/reviewApiSlice"

const FORM_CONST = {
    min: 1,
    max: 5,
    step: 0.5
}

const initialState = {
    userId: 'dfb982e9-b432-4b7d-aec6-7f6ff2e6af54',
    text: '',
    rating: 1
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'text_input':
            return { ...state, [action.payload.key]: action.payload.value }
        case 'increment_rating':
            return { ...state, rating: state.rating + FORM_CONST.step }
        case 'decrement_rating':
            return { ...state, rating: state.rating - FORM_CONST.step }
        case 'cleanup_form':
            return { ...state, ...initialState }
        default:
            return state
    }
}

export const ReviewForm = ({ restaurantId }) => {
    const [form, dispatch] = useReducer(reducer, initialState)
    const [ createReview, { isLoading } ] = useCreateReviewMutation()

    const onClick = (e) => {
        e.preventDefault()
        createReview({ 
            newReview: { ...form, restaurantId },
            callback: () => dispatch({ type: 'cleanup_form' })
         })
    }

    const incrementRating = useCallback((e) => {
        e.preventDefault()
        if (form.rating < FORM_CONST.max) dispatch({ type: 'increment_rating' })
    }, [form.rating])
    const decrementRating = useCallback((e) => {
        e.preventDefault();
        if (form.rating > FORM_CONST.min) dispatch({ type: 'decrement_rating' })
    }, [form.rating])

    const textInputChange = ({ target: { id, value } }) => dispatch({ type: 'text_input', payload: { key: id, value } })

    return (
        <form className={styles.root}>
            <TextInput
                className={styles.input}
                label="Text"
                id="text"
                value={form.text}
                onChange={textInputChange}
            />
            <Counter
                value={form.rating}
                increment={incrementRating}
                decrement={decrementRating}
            />
            <button
                onClick={onClick}
                disabled={isLoading}
                className={styles.submitButton}
                type="submit"
            >
                Add Review
            </button>
        </form>
    )
}