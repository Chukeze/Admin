export default async function handler(req, res) {
    const {username, password, employeeId} = req.body;

    if (validateCredentials(username,password,employeeId)){
        //auth logic
    }else{
        res.status(401).json({error: 'Invalid Credentials'})
    }
}