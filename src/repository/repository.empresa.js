import mariadb from "./../database/Mariadb/mariadb.js"


async function ListEmpS() {
//    mariadb.DoteEnv();
   const sql = `SELECT ID,RAZAO_SOCIAL,NOME_FANTASIA,CNPJ FROM EMPRESA `

   const empresas = await mariadb.executeQuery(sql,[])
   
   return empresas.length > 0 ? empresas : []
}

async function ListEmp(id_empresa) { 
    //    console.log(id_empresa)

       const sql = `SELECT * FROM EMPRESA where ID = ?`
    
       const empresa = await mariadb.executeQuery(sql,[id_empresa])
       
       return empresa.length > 0 ? empresa[0] : []
}

async function AddEmp(
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
) { 
    const sql = `INSERT INTO EMPRESA 
                (ID_RESPONSAVEL_SOCIO, ID_MATRIZ, ID_SINDICATO_PATRONAL, ID_FPAS, ID_CONTADOR, 
                RAZAO_SOCIAL, NOME_FANTASIA, CNPJ, INSCRICAO_ESTADUAL, INSCRICAO_ESTADUAL_ST, 
                INSCRICAO_MUNICIPAL, INSCRICAO_JUNTA_COMERCIAL, DATA_INSC_JUNTA_COMERCIAL, 
                TIPO, DATA_CADASTRO, DATA_INICIO_ATIVIDADES, SUFRAMA, EMAIL, 
                IMAGEM_LOGOTIPO, CRT, TIPO_REGIME, ALIQUOTA_PIS, CONTATO, 
                ALIQUOTA_COFINS, CODIGO_IBGE_CIDADE, CODIGO_IBGE_UF, CODIGO_TERCEIROS, 
                CODIGO_GPS, ALIQUOTA_SAT) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) RETURNING id`;

    const empresa = await mariadb.executeQuery(sql, [
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
    ]);
    // console.log(sql)

    return empresa.length > 0 ? empresa[0] : [];
}

async function DelEmp(ID_EMPRESA) { 
    //    console.log(ID_EMPRESA)

       const sql = `DELETE FROM EMPRESA WHERE ID = ? RETURNING id`
    
       const empresa = await mariadb.executeQuery(sql,[ID_EMPRESA])
       
    //    console.log(empresa,ID_EMPRESA)
       return empresa.length > 0 ? empresa[0] : [{"Erro":"ID da empresa inválido"}]
}

export default {ListEmpS,ListEmp,AddEmp,DelEmp}