const express = require("express");
const app = express();
const PORT = process.env.PORT || 2005
const path = require("path");

const notes = []; // Temp Place Where Our Notes will be stored
app.use(express.json()) //middlewares

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

app.get("/notes",(req,res)=> {
    res.sendFile(path.join(__dirname, "frontend-html", "index.html"))
})
app.listen(PORT, ()=> {
    console.log(`Server Listen @ ${PORT}`)
})