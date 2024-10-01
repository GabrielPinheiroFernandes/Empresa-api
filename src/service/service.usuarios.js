import repositoryUsuarios from "../repository/repository.usuarios.js"
import token from "../token/token.js";

async function GetUsuario(body) {
    const { email, senha } = body;
    const usuario = await repositoryUsuarios.GetUsuario(email,senha);
    usuario.token = await token.CreateToken(usuario.ID);

    return usuario
}


export default {GetUsuario}