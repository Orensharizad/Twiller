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
        <div className="comment-form">

            <form >
                <input placeholder="Email" {...register('email')} required />
                <textarea placeholder="What's happening?" {...register('txt')} required></textarea>
            </form>
            <button onClick={(ev) => sendComment(ev, comment)} className="btn-tweet">Tweet</button>
        </div>
    )
}