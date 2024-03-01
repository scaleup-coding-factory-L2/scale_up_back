import { createUser , getUsers} from '../controllers/UserController'
import { Router } from 'express'

const router = Router()

router.post('/', createUser)
router.get('/', getUsers )


export default router
