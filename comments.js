// Create web serverconst express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/comments', { useNewUrlParser: true, useUnifiedTopology: true });

// Comment Schema
const commentSchema = new mongoose.Schema({
    name: String,
    email: String,
    comment: String,
});

// Comment Model
const Comment = mongoose.model('Comment', commentSchema);

// Routes
app.get('/comments', async (req, res) => {
    const comments = await Comment.find();
    res.json(comments);
});