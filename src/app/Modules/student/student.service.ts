import { TStudent } from './student.interface'
import { Student } from './student.model'

const getAllStudentsFromDB = async () => {
  const result = await Student.find()
  return result
}

const createStudentIntoDB = async (studentData: TStudent) => {
  //   const result = await StudentModel.create(student)
  //   return result
  const student = new Student(studentData)

  if (await student.isUserExists(studentData?.id)) {
    throw new Error('User alread exists!')
  }

  const result = await student.save()
  return result
}

const getSingleStudent = async (id: string) => {
  const result = await Student.findOne({ id })
  return result
}

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudent,
}
