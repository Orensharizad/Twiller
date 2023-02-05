import { useFormRegister } from "../customHooks/useFormRegister"
import { commentService } from "../services/comment.service"

export function CommentForm({ setComments }) {

    const [register, comment, setComment] = useFormRegister(commentService.getEmptyComment())

    const sendComment = async (ev, comment) => {
        ev.preventDefault()
        try {
            const newComment = await commentService.save(comment)
            setComment(commentService.getEmptyComment())
            setComments(prevComments => [newComment, ...prevComments])
        } catch (err) {
            console.log('Cannot save comment:', err)
        }
    }

    return (
        <form className="comment-form" onSubmit={(ev) => sendComment(ev, comment)}>
            <input placeholder="Email" {...register('email')} required />
            <textarea placeholder="Message" {...register('txt')} required></textarea>
            <button>Submit</button>
        </form>
    )
}