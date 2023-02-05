import { useEffect, useState } from "react"
import { CommentForm } from "../cmps/comment-form"
import { CommentList } from "../cmps/comment-list"
import { commentService } from "../services/comment.service"

export function CommentIndex() {
    const [comments, setComments] = useState([])
    console.log('comments: ', comments);

    useEffect(() => {
        loadComments()
    }, [])

    const loadComments = async (filter) => {
        try {
            const comments = await commentService.query(filter)
            setComments(comments)
        } catch (err) {
            console.error(err, 'cannot get commets')
        }
    }


    return (
        <section className="comment-index">

            <CommentForm setComments={setComments} />
            <CommentList comments={comments} />
        </section>
    )
}