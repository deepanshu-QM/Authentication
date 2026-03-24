const express = require("express");
const app = express();
const PORT = process.env.PORT || 2005
const path = require("path");
const cors = require("cors");



const notes = []; // Temp Place Where Our Notes will be stored
app.use(express.json()) //middlewares
app.use(cors());
app.post("/notes",(req,res)=> {
    const note = req.body.note
    notes.push(note);
    res.json({
        message : "Task Done !"
    })
})

app.get("/notes" ,(req,res)=> {
    res.json({
        notes
    })
})

app.get("/",(req,res)=> {
    res.sendFile(path.join(__dirname, "frontend-html", "index.html"))
})
app.listen(PORT, ()=> {
    console.log(`Server Listen @ ${PORT}`)
})