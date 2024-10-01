import serviceEmpresas from "../service/service.empresas.js"

async function ListEmpS(req,res) {   

    const empresas = await serviceEmpresas.ListEmpS();

    return res.status(200).json(empresas)
    
}

async function ListEmp(req,res) {


    const ID_EMPRESA = req.params.ID_EMPRESA;
    
    const empresas = await serviceEmpresas.ListEmp(ID_EMPRESA);
    
    return res.status(200).json(empresas)
    
}

async function AddEmp(req,res) {

    // console.log(req.body)

    const empresas = await serviceEmpresas.AddEmp(req.body);
    
    return res.status(201).json(empresas)
    
}
async function DelEmp(req,res) {
    const ID_EMPRESA = req.params.ID_EMPRESA
    // console.log(ID_EMPRESA)

    const empresas = await serviceEmpresas.DelEmp(ID_EMPRESA);
    
    return res.status(200).json(empresas)//204 se não quiser retornar conteudo do servidor, no caso vou usar 200 ,     
}

export default{ListEmpS,ListEmp,AddEmp,DelEmp}