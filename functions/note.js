const { title } = require('process');
const { Note } = require('../models/note');

const createnote = (req, res) => {

        const { title, desc, status } = req.body
        const note =new Note( {
            title,status,desc
        })

        note.save().then(() => console.log("Note created"));
        res.send("hello i am createnote")
    };

const searchnote = (req, res)=>{
    const { title } = req.body
    const note = Note.find({ title });
    res.send({ search: true, note })
}

const editnote = (req, res) => {
    const {id,newnote}=req.body
    const notes = Note.find({ _id:id });
    if(notes.length>=0){
        let note=Note.findByIdAndUpdate(id,{$set:newnote});
        res.send ({"update":true,"note": note,"message":"note has been updated"})
    }
    else{
        res.send({update:false,"message":"cannot update"})
    }
}
const deletenote = (req, res) => {
    const {id}=req.body
    const note = Note.find({ _id:id });
    if(note.length>=0){
        const result=Note.findByIdAndDelete(id);
        res.send({delete:true,result})
    }
    else{
    res.send({delete:false,"message":"no record"})
    }
}
module.exports = { createnote, editnote, deletenote }