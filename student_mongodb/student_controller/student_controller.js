const Student=require('../models/student')

const index=(req,res,next)=>{
    Student.find()
    .then(response=>{
        res.json({
            response
        })
    })
    .catch(error=>{
        res.json({
            message:'An error Occured!'
        })
    })

}

const show=(req,res,next)=>{
    let studentId=req.body.studentId
    Student.findById(studentId)
    .then(response=>{
        res.json({
            response
        })
    })
    .catch(error=>{
        res.json({
            message:'An error Occured!'
        })
    })
}

const store=(req,res,next)=>{
    let student=new Student({
        name:req.body.name,
        roll_no:req.body.roll_no,
        WAD:req.body.WAD,
        DSBDA:req.body.DSBDA,
        CNS:req.body.CNS,
        CC:req.body.CC,
        AI:req.body.AI

    })
    student.save()
    .then(response=>{
        res.json({
            message:'Student added successfully!'
        })
    })
    .catch(error=>{
        res.json({
            message:'An error Occured!'
        })
    })
}

const update=(req,res,next)=>{
    let studentId=req.body.studentId
    let updated_data={
        name:req.body.name,
        roll_no:req.body.roll_no,
        WAD:req.body.WAD,
        DSBDA:req.body.DSBDA,
        CNS:req.body.CNS,
        CC:req.body.CC,
        AI:req.body.AI

    }
    Student.findByIdAndUpdate(studentId,{$set:updated_data})
    .then(response=>{
        res.json({
            message:'Data updated successfully!'
        })
    })
    .catch(error=>{
        res.json({
            message:'An error Occured!'
        })
    })
}

const destroy=(req,res,next)=>{
    let studentId=req.body.studentId
    Student.findByIdAndRemove(studentId)
    .then(()=>{
        res.json({
            message:'Data deleted successfully!'
        })
    })
    .catch(error=>{
        res.json({
            message:'An error Occured!'
        })
    })
}

const dsbda_filter=(req,res,next)=>{
    Student.find({DSBDA:{$gt:25}})
    .then(response=>{
        res.json({
            response
        })
    })
    .catch(error=>{
        res.json({
            message:'An error Occured!'
        })
    })
}

module.exports={
    show,store,index,update,destroy,dsbda_filter
}