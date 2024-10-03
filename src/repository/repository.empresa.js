import mariadb from "./../database/Mariadb/mariadb.js"


async function ListEmpS() {
//    mariadb.DoteEnv();
   const sql = `SELECT ID,RAZAO_SOCIAL,NOME_FANTASIA,CNPJ FROM EMPRESA  order by id desc`

   const empresas = await mariadb.executeQuery(sql,[])
   
   return empresas.length > 0 ? empresas : []
}

async function ListEmp(id_empresa) { 
    //    console.log(id_empresa)

    const sql = `
    SELECT socio_pes.nome AS 'socioName',
    mat.razao_social AS 'matrizRazaoSocial',
    sindi_pes.nome AS 'sindicatoName',
    fp.DESCRICAO AS 'descricaoFpas',
    cont_pes.nome AS 'contadorName',
    emp.*
    FROM empresa emp
    LEFT JOIN responsavel_socio resp_soci ON emp.ID_RESPONSAVEL_SOCIO = resp_soci.ID
    LEFT JOIN pessoa socio_pes ON resp_soci.ID_PESSOA=socio_pes.ID
    LEFT JOIN matriz mat ON emp.ID_MATRIZ = mat.ID
    LEFT JOIN sindicato sind ON emp.ID_SINDICATO_PATRONAL = sind.ID
    LEFT JOIN pessoa sindi_pes ON sind.ID_PESSOA=sindi_pes.ID
    LEFT JOIN fpas fp ON emp.ID_FPAS = fp.ID
    LEFT JOIN contador cont ON emp.ID_CONTADOR = cont.ID
    LEFT JOIN pessoa cont_pes ON cont.ID_PESSOA=cont_pes.ID
    WHERE emp.ID = ?`
    
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