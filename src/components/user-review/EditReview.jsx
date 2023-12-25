import React, { useCallback, useReducer } from 'react'
import { Counter } from '../counter'
import { TextInput } from '../form-controllers/text-input'
import { FORM_CONST } from '../../consts/FORM_CONST'
import { useUpdateReviewMutation } from '../../redux/entities/reviews/reviewApiSlice'

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

const EditReview = ({ selectedUser, review, cancelEditMode, restaurantId }) => {
    const [form, dispatch] = useReducer(reducer, {...review})
    const [updateReview, { isLoading }] = useUpdateReviewMutation()
    const incrementAmount = useCallback((e) => {
        e.preventDefault()
        if (form.rating < FORM_CONST.max) dispatch({ type: 'increment_rating', payload: form.rating + FORM_CONST.step })
    }, [form.rating])
    const decrementAmount = useCallback((e) => {
        e.preventDefault()
        if (form.rating > FORM_CONST.min) dispatch({ type: 'decrement_rating', payload: form.rating - FORM_CONST.step })
    }, [form.rating])
    const onInputChange = (e, key) => dispatch({ type: 'text_input', payload: { key, value: e.target.value } })

    const onFormSubmit = (e) => {
        e.preventDefault()
        updateReview({
            restaurantId: restaurantId,
            updatedReview: form,
            callback: () => {
                cancelEditMode()
                dispatch({ type: 'cleanup_form' })
            }
        })
    }

    return (
        <form>
            <div>
                <strong>{selectedUser.name}</strong>: <Counter value={form.rating} increment={incrementAmount} decrement={decrementAmount} />
            </div>
            <TextInput id="text" label="text" value={form.text} onChange={(e) => onInputChange(e, 'text')} />
            <button disabled={isLoading} onClick={onFormSubmit}>Save Updates</button>
            <button disabled={isLoading} onClick={cancelEditMode}>Cancel</button>
        </form>
    )
}

export const MemoizedEditReview = EditReview