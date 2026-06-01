import {Router} from 'express'

export const authRoutes = Router()

authRoutes.post('/signin', authcontroller.signIn)
authRoutes.post('/signup', authController.signUp)
authRoutes.post('/signup', authController.validate)
