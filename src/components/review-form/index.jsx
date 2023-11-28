import { useReducer } from "react"

const initialState = {
    name: null,
    text: null,
    rating: null
}

export const ReviewForm = () => {
    const [form, dispatch] = useReducer(reducer, initialState)

    return (
        <form>
            <div>
                <label>Name</label>
                <input />
            </div>
            <div>
                <label>Text</label>
                <input />
            </div>
        </form>
    )
}