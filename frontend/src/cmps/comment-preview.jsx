export function CommentPreview({ comment }) {

    const commentStyle = () => {
        const style = {
            backgroundImage: `url(${comment.imgUrl})`
        }
        return style
    }

    return (
        <section className="comment-preview">
            <div style={commentStyle()} className="comment-img"></div>
            <div className="comment-content">
                <h3 className="comment-email">{comment.email}</h3>
                <p className="comment-txt">{comment.txt}</p>
            </div>
        </section>
    )
}