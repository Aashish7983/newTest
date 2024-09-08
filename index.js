const express = require("express");
const app = express();
const fs = require("fs");


app.use(express.json())


const postFile = "./post.json";

function readPost(){
    const data = fs.readFileSync(postFile, "utf-8");
    return JSON.parse(data);
    // res.status(200).json(readPost);
}


app.post("/post", (req, res) =>{
    const {title, content} = req.body;

    if(!title || !content){
        return res.status(404).json({message: "title and content not found"});
    }

    const post = readPost();

    const newPost = {id: post.length+1, title, content};
    post.push(newPost);
    writePosts(post);
    res.status(201).json(newPost);

    
    fs.writeFile(postFile, JSON.stringify(req.body, null, 2),'utf-8');
    res.status(200).json({title, content});
});


app.get("/post", (req, res)=>{
    res.send(readPost());
});



app.listen(5000, ()=>{
    console.log(`Server is Running on 5000 port`);
})