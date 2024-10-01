import { Router } from "express"
import controllerEmpresas from "../controller/controller.empresas.js";
import controllerUsuarios from "../controller/controller.usuarios.js";
import token from "../token/token.js";


const router = Router();

//Empresas
router.get('/empresas/:ID_EMPRESA',token.ValidaToken,controllerEmpresas.ListEmp);
router.get('/empresas',token.ValidaToken,controllerEmpresas.ListEmpS);
router.post('/empresas',token.ValidaToken,controllerEmpresas.AddEmp)
router.delete('/empresas/:ID_EMPRESA',token.ValidaToken,controllerEmpresas.DelEmp)

//Users
router.post('/usuario',controllerUsuarios.GetUsuario);




//token

export default router;