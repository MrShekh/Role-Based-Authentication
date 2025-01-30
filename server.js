import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import 'dotenv/config';
import express from 'express';
import connectDB from './config/db.js';
import Home from './routes/auth_routes.js';
import Login from './routes/login_routes.js';
import Register from './routes/register_routes.js';
import Profile from './routes/role_routes.js';
const app = express ()


const port = 3000;
app.use(bodyParser.json())
app.use(cookieParser());

// mongodb connection
connectDB()
//routes
app.use('/api',Register)
app.use('/api',Login)
app.use('/api',Home)
app.use('/api',Profile)

app.get('/', (req, res) => {
    res.send('Hello World!');
    })




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    }
)