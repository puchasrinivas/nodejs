let express = require("express");
let app = express();

app.get("/hello", (req,res)=>{
    res.status(200).send("Hello Mr.Foo");
})
app.listen(3000, ()=>{
    console.log("Server is listening to 3000...");
})

