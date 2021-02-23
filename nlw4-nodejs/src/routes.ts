import {Router} from 'express'
import { UserController } from './controllers/userController'

const router = Router()

const userController = new UserController()


router.get('/', (request, response) => {
    return response.json({message: "Hello world"})
})

router.post('/users', userController.create)

export {router}