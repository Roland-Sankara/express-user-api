import fs from 'node:fs'

const getallUsers = (req, res)=>{
    // get info from the file
    fs.readFile("./Models/users.json",'utf8', (err, data)=>{
        if(err){
            res.send("Failed to get the Data")
        }else{
            res.json(JSON.parse(data))
        }
    })
}

const createNewUser = (req, res)=>{
    // I need to get the request object with the data to be saved in the data.json file
    // write the data to the file

    fs.readFile("./Models/users.json", (err, data)=>{
        if(err){
            console.log("Failed to get the Data")
        }else{

            fs.writeFile("./Models/users.json", JSON.stringify([...JSON.parse(data), req.body], null, 2), (err)=>{
                if(err){
                    res.send("failed to save new user")
                }else{
                    res.send("Successfully save new user")
                }
            })
        }
    })
    // save the data in the data.json file
}

const functions = {
    createNewUser,
    getallUsers
}
export default functions;