import serviceUsuarios from "../service/service.usuarios.js";

async function GetUsuario(req,res) {
    const body = req.body
    // console.log(body)
    const response = await serviceUsuarios.GetUsuario(body);
    return res.status(200).json(response)
}










export default {GetUsuario};