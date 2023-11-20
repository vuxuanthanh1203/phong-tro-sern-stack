import authRouter from './auth'
import insertRouter from './insert'
import categoryRouter from './category'

const initRouter = (app) => {
    app.use('/api/v1/auth', authRouter)
    app.use('/api/v1/insert', insertRouter)
    app.use('/api/v1/category', categoryRouter)


    return app.use('/', (req, res) => {
        res.send("Server on...");
    })
}

export default initRouter