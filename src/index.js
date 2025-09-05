const express = require('express');

const connect = require('./config/database');    // import the database 
//const Tweet = require('./models/tweet');          // import the tweet model

const TweetRepository = require('./repository/tweet-repository');
const app = express();

const Comment = require('./models/comments');   // imported
app.listen(3000, async () =>{
    console.log('Server is running on port 3000');

    await connect();
    console.log('MongoDB is connected');

    

    // const tweetrepo = new TweetRepository();
    // const tweet = await tweetrepo.createTweet({
    //     content: 'This  Tweet is by crud operation',
    //     user: 'user1'
    // });
    // console.log(tweet);


    // const tweetrepo = new TweetRepository();
    // const tweet = await tweetrepo.updateTweet('68b7f852534ce834d75a8c6d', {
    //     content: 'This  Tweet is by crud operation - updated',
    //     user: 'user9'
    // });
    // console.log(tweet);

    // const tweet = await tweetrepo.deleteTweet('68b7c80f1df0893068e7e8d4');

    // console.log(tweet);


// const tweet = await tweetrepo.createTweet({
//     content: 'neeewer tweet',
//     user: 'user10'
// });
// console.log(tweet);

// // Create a comment document
// const comment = await Comment.create({
//     user: 'user11',
//     content: 'New post for user 11!'
// });

//    //  console.log(tweet);
//     // Push the comment's ObjectId to the tweet's comments array
    // tweet.comments.push('68b7fa930c85e3709f62c4c3');
    // await tweet.save();
//    // console.log(tweet);


    //  const tweetrepo = new TweetRepository();
    // const tweet = await tweetrepo.getTweetById('68b7fa930c85e3709f62c4c3');
    // console.log(tweet);

    // const tweet2 = await tweetrepo.getWithComments('68b7fa930c85e3709f62c4c3');
    // console.log(tweet2);

    

    // Pagination in MongoDB
    // const tweetrepo = new TweetRepository();
    // const tweet = await tweetrepo.getAllTweets(0,4);
    // console.log(tweet);


//  Virtuals in MongoDB
    // console.log(tweet[0].id);

     const tweetrepo = new TweetRepository();
     const tweet = await tweetrepo.getAllTweets(0,4);
     console.log(tweet[2].contentWithUser);

//Triggers in MongoDB
    const tweetrepo = new TweetRepository();
    const tweet = await tweetrepo.createTweet({
        content: 'This is a new tweet with triggers'
    });
    console.log(tweet);
});