const {Note} =require('../models/note');

const createnote = (req, res) => {

            const note = new Note({
                title: "xyuz",
                status: "done",
                    desc: "decs",
                    date: Date.now()

            });
            note.save().then(() => console.log("Note created"));
            res.send("hello i am createnote")
        }

const editnote = (req, res) => {
    res.send("hello i am editnote")
}
const deletenote = (req, res) => {
    res.send("hello i am deletenote")
}
module.exports = { createnote, editnote, deletenote }