import { useFormRegister } from "../customHooks/useFormRegister"
import { commentService } from "../services/comment.service"

export function CommentForm() {

    const [register, comment] = useFormRegister(commentService.getEmptyComment())

    const sendComment = async (ev, comment) => {
        ev.preventDefault()
        try {
            const newComment = await commentService.save(comment)

        } catch (err) {
            console.log('Cannot save comment:', err)
        }
    }

    return (
        <form className="comment-form" onSubmit={(ev) => sendComment(ev, comment)}>
            <input placeholder="Email" {...register('email')} />
            <textarea placeholder="Message" {...register('txt')}></textarea>
            <button>Submit</button>
        </form>
    )
}