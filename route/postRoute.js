const {Router} = require("express");

const postRoute = Router();


postRoute.get("/", (req, res)=>{
    res.send("Post Send");
});

postRoute.post("/", (req, res) =>{
    const {title, content} = req.body;

    res.status(200).json({title, content});
})

module.exports = postRoute;