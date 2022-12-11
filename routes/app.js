let express = require("express");
let app = express();
let PORT = process.env.PORT || 3000

app.get("/", (req,res)=>{
    res.status(200).send("Hello Mr.Foo");
})
app.listen(PORT, ()=>{
    console.log("Server is listening to 3000...");
})

