const mongoose = require('mongoose');

const Tweet = require('../models/tweet');        // two dots

class TweetRepository{
    constructor(){
        this.model = Tweet;
    }
    async createTweet(data) {
        if(!data.comments){
            data.comments = [];
        }
        const tweet = await Tweet.create(data);
        return tweet;
    }

    // Pagination in mongodb
    async getAllTweets(offset,limit) {
        const tweets = await Tweet.find().skip(offset).limit(limit); // skip and limit methods
        return tweets;
    }

    async getTweetById(id) {
        const tweet = await Tweet.findById(id);
        return tweet;
    }

    async getWithComments(id) {
        const tweet = await Tweet.findById(id).populate({path: 'comments'});
        return tweet;
    }


    async updateTweet(id, data) {
        const tweet = await Tweet.findByIdAndUpdate(id, data, { new: true });
        return tweet;
    }

    async deleteTweet(id) {
        await Tweet.findByIdAndDelete(id);
    }
}

module.exports = TweetRepository;