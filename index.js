// Create a Server
import express from 'express';
import userRouter from "./Routes/usersRouter.js";

const app = express()

// Middleware
app.use(express.json())

app.use("/users", userRouter)

// Set Request Handlers based on API endpoints
app.get("/", (req, res)=>{
    res.send(`<h1 style="color: red;"> Hello World </h1>`)
})

const PORT = 4500;
// Set the server to listen on port 4500
app.listen(PORT, ()=>{
    console.log(`Server is listening on http://localhost:${PORT}`)
})