const express=require('express')
const router=express.Router()
const student_controller=require('../student_controller/student_controller')

router.get('/',student_controller.index)
router.post('/show',student_controller.show)
router.post('/store',student_controller.store)
router.post('/update',student_controller.update)
router.post('/delete',student_controller.destroy)
router.get('/dsbda_filter',student_controller.dsbda_filter)

module.exports=router