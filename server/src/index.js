import Express from 'express'
import Morgan from 'morgan'
import {setup} from './routes'
import Path from 'path'

const app = Express()
const PORT = process.env.PORT || 8080

// Add logging
app.use(Morgan('combined'))

// Add routes
app.use(Express.static(Path.join(__dirname, '../public')))
app.set('view engine', 'html')
setup(app)

app.listen(PORT)

console.log('Server started successfully!')
console.log('Go to localhost:8080 to view the application')
