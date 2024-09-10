import app from "./server.js";

const PORT = 4500;
// Set the server to listen on port 4500
app.listen(PORT, ()=>{
    console.log(`Server is listening on http://localhost:${PORT}`)
})