import { Schema, model } from 'mongoose'
import {
  TGuardian,
  TStudent,
  StudentMethod,
  StudentModel,
  TUserName,
  TlocalGuardian,
} from './student.interface'
const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    trim: true,
    required: [true, 'First Name is required'],
    maxLength: [20, 'Max length is exceeded'],
    validate: {
      validator: function (value: string) {
        const firstName = value.charAt(0).toUpperCase() + value.slice(1)
        return firstName === value
      },
      message: '{VALUE} is not capitalize format',
    },
  },

  middleName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
})

const guardianSchema = new Schema<TGuardian>({
  fathersName: { type: String, required: true },
  fathersContactNo: { type: String, required: true },
  fathersOccupation: { type: String, required: true },
  mothersName: { type: String, required: true },
  mothersContactName: { type: String, required: true },
  mothersOccupation: { type: String, required: true },
})

const localGuardianSchema = new Schema<TlocalGuardian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
})

export const studentSchema = new Schema<TStudent, StudentModel, StudentMethod>({
  id: { type: String, required: true, unique: true },
  name: {
    type: userNameSchema,
    required: true,
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
    required: true,
  },
  dateOfBirth: { type: String },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  contactNo: { type: String, required: true },
  emergencyContactNumber: { type: String, required: true },
  bloodGroup: {
    type: String,
    enum: ['A', 'B', 'AB', 'O'],
    required: true,
  },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: {
    type: guardianSchema,
    required: true,
  },
  localGuardian: {
    type: localGuardianSchema,
    required: true,
  },
  profileImg: { type: String },
  isActive: {
    type: String,
    enum: ['active', 'inactive'],
    required: true,
  },
})

studentSchema.methods.isUserExists = async function (id: string) {
  const existingUser = await Student.findOne({ id })
  return existingUser
}

export const Student = model<TStudent, StudentModel>('Student', studentSchema)
