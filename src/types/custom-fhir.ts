import { Patient } from 'fhir/r4'

export type RoleDetails = {
  id: string
  active: boolean
  code: string
  createdAt: string
  description: string | null
  name: string
  roleId: string
  updatedAt: string
  userId: string
}

export type User = {
  firebaseUserId: string
  roles: RoleDetails[]
  id: string
  organizationId: string
  phoneVerified: boolean
  tags: string[]
  createdAt: string
  updatedAt: string
  disabled: boolean
  status: string
}

export interface CustomPatient extends Patient {
  user: User
}
