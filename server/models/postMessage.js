import mongoose from 'mongoose';
const postSchema = mongoose.Schema({
    title: {type: String, require: true},
    message: {type: String, require: true},
    creator: {type: String, require: true},
    name:{type: String},
    tags: {type: [String], require: false},
    selectedFile: {type: String, require: false},
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },

});
var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;