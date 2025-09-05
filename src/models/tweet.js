const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    content:{
        type: String,
        required: true
    },
    user: {
        type: String,
        
    },
    comments: [{
        
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    //default: []
}, {timestamps: true})

// Virtuals in MongoDB
tweetSchema.virtual('contentWithUser').get(function() {
    return `${this.content} - ${this.user}`;
});

// Triggers in MongoDB
tweetSchema.pre('save', function(next) {
    console.log('A tweet is about to be saved:',this);
    next();
});

const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;