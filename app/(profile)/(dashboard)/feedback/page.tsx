import { FeedbackComment } from "./_components/feed-back-comment"
import { FeedbackRating } from "./_components/feed-back-rating"
import { FeedbackStatus } from "./_components/feed-back-status"
import { WaterMark } from "./_components/water-mark"

const FeedbackPage = () => {
    return (
        <div className="space-y-8 relative">
            <h2 className="text-blue-500 font-bold md:text-xl text-md">
                FeedBack
            </h2>
            <FeedbackStatus />
            <FeedbackComment />
            <FeedbackRating />
            <WaterMark />
        </div>
    )
}

export default FeedbackPage