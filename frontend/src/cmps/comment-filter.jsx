import { useEffect, useRef } from "react"
import { useEffectUpdate } from "../customHooks/useEffectUpdate"
import { useForm } from "../customHooks/useForm"
import { commentService } from "../services/comment.service"
import { utilService } from "../services/util.service"

export function CommentFilter({ loadComments }) {
    const [filter, setFilter, handleChange] = useForm(commentService.getEmptyFilter())
    const loadCommentsRef = useRef(utilService.debounce(loadComments))
    useEffectUpdate(() => {
        loadCommentsRef.current(filter)
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