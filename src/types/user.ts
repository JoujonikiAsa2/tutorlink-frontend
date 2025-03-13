export type TUser = {
  name: string
  email: string
  phone: string
  role: 'student' | 'tutor' | 'admin'
  iat: number
  exp:number
}