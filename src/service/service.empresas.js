import repositoryEmpresa from "../repository/repository.empresa.js"

async function ListEmpS(params) {
    const empresa = repositoryEmpresa.ListEmpS();

    return empresa
}

async function ListEmp(id_empresa) {
    const empresa = repositoryEmpresa.ListEmp(id_empresa);

    return empresa
}

async function AddEmp(data) {
    if (Array.isArray(data)) {
        return { "error": "Não é possível inserir mais de um registro por vez" };
    }

    // console.log(data)
    const {
        ID_RESPONSAVEL_SOCIO,
        ID_MATRIZ,
        ID_SINDICATO_PATRONAL,
        ID_FPAS,
        ID_CONTADOR,
        RAZAO_SOCIAL,
        NOME_FANTASIA,
        CNPJ,
        INSCRICAO_ESTADUAL,
        INSCRICAO_ESTADUAL_ST,
        INSCRICAO_MUNICIPAL,
        INSCRICAO_JUNTA_COMERCIAL,
        DATA_INSC_JUNTA_COMERCIAL,
        TIPO,
        DATA_CADASTRO,
        DATA_INICIO_ATIVIDADES,
        SUFRAMA,
        EMAIL,
        IMAGEM_LOGOTIPO,
        CRT,
        TIPO_REGIME,
        ALIQUOTA_PIS,
        CONTATO,
        ALIQUOTA_COFINS,
        CODIGO_IBGE_CIDADE,
        CODIGO_IBGE_UF,
        CODIGO_TERCEIROS,
        CODIGO_GPS,
        ALIQUOTA_SAT
      } = data;
      
    let empresa = repositoryEmpresa.AddEmp(ID_RESPONSAVEL_SOCIO,
        ID_MATRIZ,
        ID_SINDICATO_PATRONAL,
        ID_FPAS,
        ID_CONTADOR,
        RAZAO_SOCIAL,
        NOME_FANTASIA,
        CNPJ,
        INSCRICAO_ESTADUAL,
        INSCRICAO_ESTADUAL_ST,
        INSCRICAO_MUNICIPAL,
        INSCRICAO_JUNTA_COMERCIAL,
        DATA_INSC_JUNTA_COMERCIAL,
        TIPO,
        DATA_CADASTRO,
        DATA_INICIO_ATIVIDADES,
        SUFRAMA,
        EMAIL,
        IMAGEM_LOGOTIPO,
        CRT,
        TIPO_REGIME,
        ALIQUOTA_PIS,
        CONTATO,
        ALIQUOTA_COFINS,
        CODIGO_IBGE_CIDADE,
        CODIGO_IBGE_UF,
        CODIGO_TERCEIROS,
        CODIGO_GPS,
        ALIQUOTA_SAT);

    return empresa
}

async function DelEmp(ID_EMPRESA) {
    const empresa = repositoryEmpresa.DelEmp(ID_EMPRESA);

    return empresa
}

export default {ListEmpS,ListEmp,AddEmp,DelEmp}