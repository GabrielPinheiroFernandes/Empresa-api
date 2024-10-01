import jwt, { decode } from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config();
const SecretKey = process.env.API_SECRETKEY


async function CreateToken(id_usuario) {
    const token = jwt.sign({id_usuario},SecretKey,{
        expiresIn: 999999
    })
    
    return token
}

async function ValidaToken(req, res, next) {
    const authToken = req.headers.authorization

    if (!authToken){
        res.status(401).send({error:"Token Não Informado"})
    } 
    
    // console.log(authToken)
    const [aux, token]= authToken.split(" ");
    // console.log(token)

    jwt.verify(token,SecretKey,(err, decoded)=>{
        if (err)
            return res.status(401).send({error:"Token Inválido"})

        req.id_usuario = decoded.id_usuario

        next()
    })

    
    
    return 
}


export default {CreateToken,ValidaToken}