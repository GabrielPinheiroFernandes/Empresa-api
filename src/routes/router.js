import { Router } from "express"
import controllerEmpresas from "../controller/controller.empresas.js";


const router = Router();

//Empresas
router.get('/empresas/:ID_EMPRESA',controllerEmpresas.ListEmp);
router.get('/empresas',controllerEmpresas.ListEmpS);
router.post('/empresas',controllerEmpresas.AddEmp)
router.delete('/empresas/:ID_EMPRESA',controllerEmpresas.DelEmp)





export default router;