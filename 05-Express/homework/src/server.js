// const bodyParser = require("body-parser");
const express = require("express");

const STATUS_USER_ERROR = 422;
let id = 1;
// This array of posts persists in memory across requests. Feel free
// to change this to a let binding if you need to reassign it.
const posts = [];

const server = express();
// to enable parsing of json bodies for post requests
server.use(express.json());

// TODO: your code to handle requests
const PATH = '/posts'
server.post(PATH, (req, res) => {
    const { author, title, contents } = req.body;
    console.log(author, title, contents);
    if (!author || !title || !contents) {
        return res.status(STATUS_USER_ERROR).json(
            {
                error: "No se recibieron los parámetros necesarios para crear el Post"
            });
    }
    // res.send('done')
    const post = {
        author,
        title,
        contents,
        id: id++
    }
    posts.push(post)
    res.status(200).json(post)



})

server.post('/posts/author/:author', (req, res) => {
    const { title, contents } = req.body
    //NO ESTA BIEN. REVISAR LA CONSIGNA...
    if (!title || !contents) {
        return res.status(STATUS_USER_ERROR).json(
            {
                error: "No se recibieron los parámetros necesarios para crear el Post"
            }
        )
    }
    
    const author = req.params.author;
    posts.forEach(post => {
        if (post.author === author) {
            res.status(200).json(post)
        }
    });  
})

module.exports = { posts, server };
