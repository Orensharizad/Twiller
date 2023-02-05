import { useEffect } from "react"
import { useForm } from "../customHooks/useForm"
import { commentService } from "../services/comment.service"

export function CommentFilter() {
    const [filter, setFilter, handleChange] = useForm(commentService.getEmptyFilter())
    useEffect(() => {

    }, [filter])
    return (
        <section className="comment-filter">
            <input
                name="email"
                value={filter.email}
                onChange={handleChange}
                placeholder="Search Twiller"
            />
        </section>
    )
}