const Router = require('express')
const router = new Router()
const newsRouter = require('./newsRouter')
const eventRouter = require('./eventRouter')
const userRouter = require('./userRouter')

router.use('/news', newsRouter)
router.use('/event', eventRouter)
router.use('/user', userRouter)



module.exports = router