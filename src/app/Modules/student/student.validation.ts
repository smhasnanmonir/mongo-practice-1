import { z } from 'zod'

const UserNameJodSchema = z.object({
  firstName: z
    .string()
    .min(1)
    .max(20)
    .refine((value) => value[0] === value[0].toUpperCase(), {
      message: 'First name should start with a capital letter',
    }),
  middleName: z.string(),
  lastName: z.string(),
})

const GuardianJodSchema = z.object({
  fathersName: z.string(),
  fathersContactNo: z.string(),
  fathersOccupation: z.string(),
  mothersName: z.string(),
  mothersContactName: z.string(),
  mothersOccupation: z.string(),
})

const LocalGuardianJodSchema = z.object({
  name: z.string(),
  occupation: z.string(),
  contactNo: z.string(),
  address: z.string(),
})

const StudentJodSchema = z.object({
  id: z.string(),
  name: UserNameJodSchema,
  gender: z.enum(['male', 'female']),
  dateOfBirth: z.string(),
  email: z.string().email(),
  contactNo: z.string(),
  emergencyContactNumber: z.string(),
  bloodGroup: z.enum(['A', 'B', 'AB', 'O']),
  presentAddress: z.string(),
  permanentAddress: z.string(),
  guardian: GuardianJodSchema,
  localGuardian: LocalGuardianJodSchema,
  profileImg: z.string().optional(),
  isActive: z.enum(['active', 'inactive']),
})

export default StudentJodSchema
