import { FeedbackComment } from "./_components/feed-back-comment"
import { FeedbackRating } from "./_components/feed-back-rating"
import { FeedbackStatus } from "./_components/feed-back-status"

const FeedbackPage = () => {
    return (
        <div className="">
            <FeedbackStatus />
            <FeedbackComment />
            <FeedbackRating />
        </div>
    )
}

export default FeedbackPage