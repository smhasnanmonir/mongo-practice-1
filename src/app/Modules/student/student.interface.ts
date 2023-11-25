import { Model } from 'mongoose'

export type TGuardian = {
  fathersName: string
  fathersOccupation: string
  fathersContactNo: string
  mothersName: string
  mothersOccupation: string
  mothersContactName: string
}
export type TUserName = {
  firstName: string
  middleName: string
  lastName: string
}

export type TlocalGuardian = {
  name: string
  occupation: string
  contactNo: string
  address: string
}

export type TStudent = {
  id: string
  name: TUserName
  gender: 'male' | 'female'
  dateOfBirth: string
  email: string
  contactNo: string
  emergencyContactNumber: string
  bloodGroup?: 'A' | 'B' | 'AB' | 'O'
  presentAddress: string
  permanentAddress: string
  guardian: TGuardian
  localGuardian: TlocalGuardian
  profileImg?: string
  isActive: 'active' | 'inactive'
}

export type StudentMethod = {
  isUserExists(id: string): Promise<TStudent | null>
}

export type StudentModel = Model<TStudent, Record<string, never>, StudentMethod>
