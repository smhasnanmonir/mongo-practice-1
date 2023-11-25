import express from 'express'
import { StudentsController } from './student.controller'

const router = express.Router()

router.post('/create-student', StudentsController?.createStudent)
router.get('/', StudentsController.getAllStudents)
router.get('/:studentId', StudentsController.getSingleStudents)

export const StudentRoutes = router
