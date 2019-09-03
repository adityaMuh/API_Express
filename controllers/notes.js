const noteModel = require('../models/notes');

module.exports = {
    getById: (req, res, next) => {
        noteModel.findById(req.params.noteId, (err, noteInfo)=>{ 
        if (err){
            next (err);
        } else {
            res.json({
                status: "success",
                message: "ok",
                data: {
                    note: noteInfo
                }
            });
        }
        });
    },
    getAll: (req, res, next) => {
        let  noteList = [];
        noteModel.find({}, (err,notes) => {
            if (err) {
                next (err);
            } else {
                for (let note of notes){
                    noteList.push({
                        id: note._id,
                        name: note.name,
                    });
                }
                res.json({
                    status: "success",
                    message: "ok",
                    data: {
                        notes: noteList
                    }
                });

            }
        });
    },
    updateById: (req, res, next) => {
        noteModel.findByIdAndUpdate(req.params.noteId, {
            name: req.body.name,
            content: req.body.content,
        }, (err, noteInfo ) => {
            if (err) {
                next(err);
            } else {
                res.json({
                    status: "success",
                    message: "ok",
                    data: null
                });
            }
        });
    },

    deleteById: (req, res, next) => {
        noteModel.findByIdAndRemove(req.params.noteId, (err, noteInfo) => {
             if (err){
                 next(err);
             } else{
                 res.json({
                    status: "success",
                    message: "ok",
                     data: null
              });
            }
        });
     },
     create: (req, res, next) => {
        noteModel.create({
            name: req.body.name,
            content: req.body.content,
            userId: req.body.userId,

        }, (err, result) => {
            if (err) {
                next(err);
            } else {
                res.json({
                    status: "success",
                    message: "ok",
                    data: null
                });
            }
        });
    }
}