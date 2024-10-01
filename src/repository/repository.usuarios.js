import mariadb from "../database/Mariadb/mariadb.js"


async function GetUsuario(email,senha) {
    const sql = `SELECT ID FROM usuario where login=? and senha=? `
    const usuario = await mariadb.executeQuery(sql,[email,senha])
    
    return usuario.length === 1 ? usuario[0] : {"Erro":"Usuario inexistente ou duplicado"}
}


export default {GetUsuario}