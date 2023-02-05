import { useEffect, useState } from "react"
import { CommentForm } from "../cmps/comment-form"
import { CommentList } from "../cmps/comment-list"
import { commentService } from "../services/comment.service"

export function CommentIndex() {
    const [comments, setComments] = useState([])

    useEffect(() => {
        loadComments()
    }, [])

    const loadComments = async () => {
        try {
            const comments = await commentService.query()
            setComments(comments)
        } catch (err) {
            console.error(err, 'cannot get commets')
        }
    }


    return (
        <section className="comment-index">
            <CommentForm setComments={setComments} />
            <CommentList />
        </section>
    )
}