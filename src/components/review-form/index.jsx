import { useCallback, useReducer } from "react"
import { Counter } from "../counter"
import { TextInput } from "../form-controllers/text-input"

import styles from './styles.module.css'

const FORM_CONST = {
    min: 1,
    max: 5,
    step: 0.5
}

const initialState = {
    name: null,
    text: null,
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
        default:
            return state
    }
}


export const ReviewForm = () => {
    const [form, dispatch] = useReducer(reducer, initialState)

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
                label="Name"
                id="name"
                onChange={textInputChange}
            />
            <TextInput
                label="Text"
                id="text"
                onChange={textInputChange}
            />
            <Counter
                value={form.rating}
                increment={incrementRating}
                decrement={decrementRating}
            />
            <button className={styles.submitButton} type="submit">Add Review</button>
        </form>
    )
}