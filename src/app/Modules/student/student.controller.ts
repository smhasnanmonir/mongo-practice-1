import { Request, Response } from 'express'
import { StudentServices } from './student.service'
import StudentJodSchema from './student.validation'

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: StudentData } = req.body
    //validate
    const zodParsedData = StudentJodSchema.parse(StudentData)
    const result = await StudentServices.createStudentIntoDB(zodParsedData)

    res.status(200).json({
      success: true,
      message: 'Student is created.',
      data: result,
    })
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something Went wrong',
      data: err,
    })
  }
}

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB()
    res.status(200).json({
      success: true,
      message: 'Student is fetched.',
      data: result,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something Went wrong',
      data: err,
    })
  }
}

const getSingleStudents = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params
    const result = await StudentServices.getSingleStudent(studentId)
    res.status(200).json({
      success: true,
      message: 'Single student is fetched.',
      data: result,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something Went wrong',
      data: err,
    })
  }
}

export const StudentsController = {
  createStudent,
  getAllStudents,
  getSingleStudents,
}
