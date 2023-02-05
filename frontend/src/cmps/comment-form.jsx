import { useFormRegister } from "../customHooks/useFormRegister"

export function CommentForm() {

    const [register] = useFormRegister()
    return (
        <section className="commnet-form">
            <input type="text" />
            <textarea ></textarea>
        </section>
    )
}