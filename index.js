// Create a Server
import express from 'express';
import cors from 'cors';
import userRouter from "./Routes/usersRouter.js";
import authorRouter from "./Routes/authorRouter.js";
import authRouter from "./Routes/authRouter.js";

const app = express()

// Middleware
app.use(express.json())

let corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors())

app.use("/api/v1/quotes", userRouter)
app.use("/api/v1/authors", authorRouter)
app.use("/api/v1/users", authRouter)

// Set Request Handlers based on API endpoints
app.get("/api/v1/", (req, res)=>{
    res.send(`<h1 style="color: red;"> Hello World </h1>`)
})

const PORT = 4500;
// Set the server to listen on port 4500
app.listen(PORT, ()=>{
    console.log(`Server is listening on http://localhost:${PORT}`)
})