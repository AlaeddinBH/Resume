const formation = require("../models/Formations");




exports.addFormation = async(req, res) => {
    const {title, date, institut, location} = req.body;
    
    try {
        const newFormation = new formation ({
            title,
            date,
            institut,
            location,
        });

        await newFormation.save();
        res.send({
            
            
                id: newFormation._id,
                title: newFormation.title,
                date: newFormation.date,
                institut: newFormation.institut,
                location: newFormation.location,
            
        })
       
        
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

exports.getFormation = async(req, res) => {
    try {
        const Formations = await formation.find();
        res.send(Formations);
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

exports.delFormation = async (req, res) => {
    try {
        await formation.findByIdAndDelete(req.params.id);
        res.send("Formation deleted");
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

exports.editFormation = async (req, res) => {
    try {
        const editedFormation = await formation.findByIdAndUpdate(req.params.id, {...req.body}, {new: true});
        res.send(editedFormation);
        
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}
