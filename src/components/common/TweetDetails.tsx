import { Tweet } from "./Tweet"
import { useParams } from 'react-router-dom'
import { useSelector } from "react-redux"
import { selectTweets } from "../../redux/ducks/tweets/selectors"

type TweetsDetailsProps = {}

export const TweetDetails = (props: TweetsDetailsProps) => {
    const { id } = useParams()
    const tweets = useSelector(selectTweets)
    const currentTweet = tweets.find(tweet => tweet.id === id)


    return currentTweet ? <Tweet {...currentTweet} /> : null

}