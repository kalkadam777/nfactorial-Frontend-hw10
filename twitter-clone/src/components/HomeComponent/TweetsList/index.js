import { KZ_IMG_PATH, NFACTORIAL_IMG_PATH } from "../images"
import Tweet from "./Tweet"

export default function TweetsList(){
    const tweets = [
        {
            author:'Free KZ today',
            authorUsername:'@kz',
            img:KZ_IMG_PATH,
            content: 'Update: Alibek says he has not considered becoming finance minister again',
            retweets:1000,
            replies:200,
            likes:500

        },
        {
            author:'nfactorial',
            authorUsername:'@nfactorial',
            img:NFACTORIAL_IMG_PATH,
            content: 'Data analytics course starts today! ',
            retweets:1000000,
            replies:200000,
            likes:500

        },
        {
            author:'nfactorial',
            authorUsername:'@nfactorial',
            img:NFACTORIAL_IMG_PATH,
            content: 'Black friday today uuuuu!',
            retweets:200,
            replies:5000,
            likes:8000

        },
        {
            author:'nfactorial',
            authorUsername:'@nfactorial',
            img:NFACTORIAL_IMG_PATH,
            content: 'Web development course starts today!  Web development course starts today! Web development course starts today! Web development course starts today! Web development course starts today! Web development course starts today! Web development course starts today! Web development course starts today! Web development course starts today! Web development course starts today! Web development course starts today!',
            retweets:100,
            replies:20,
            likes:900

        },
        {
            author:'nfactorial',
            authorUsername:'@nfactorial',
            img:NFACTORIAL_IMG_PATH,
            content: 'Backend developer! ',
            retweets:100,
            replies:90,
            likes:70

        },
        {
            author:'nfactorial',
            authorUsername:'@nfactorial',
            img:NFACTORIAL_IMG_PATH,
            content: 'React today! ',
            retweets:100,
            replies:200,
            likes:50

        }
    ]
    return tweets.map((tweet,index)=> <Tweet {...tweet} key={index } />)
}