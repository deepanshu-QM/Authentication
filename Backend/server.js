const express = require("express");
const app = express();
const PORT = process.env.PORT || 2005

const notes = []; // Temp Place Where Our Notes will be stored
app.use(express.json()) //middlewares

app.post("/notes",(req,res)=> {
    const note = req.body.note
    notes.push(note);
    res.send({
        message : "Task Done !"
    })
})




app.listen(PORT, ()=> {
    console.log(`Server Listen @ ${PORT}`)
})