module.exports = {
    env: 'development',
    db: 'mongodb://localhost:27017/TRACKING-FCAM',
    port: '',
    ACCESS_TOKEN_SECRET: "access-token-secret-0a6b944d-d2fb-46fc-a85e-0295c986cd9f",
    ACCESS_TOKEN_LIFE: '1h',
    API_CUS: "http://mapapi.fpt.vn/api/private",
    urlGetEmployee: "http://parcamapi.fpt.vn/api/RPMaintaince/GetInforMobinetUser",
    
  
    //IP: 118.69.135.206
    // urlGetEmployee: "http://parapi.fpt.vn/api/RadAPI/GetPartnerHR",
    // update api getEmployee
    //urlGetEmployee: "http://parapiora.fpt.vn/api/v1/PartnerHR/PartnerHR_GetEmployeeForINFMap",
  
    //IP: 172.20.17.32
    urlSyncDBArea: "http://parapiora.fpt.vn/api/ISDeployment/GetPartnerHR_GetMobiName",
    urlGetListCodeContractDeploy: "http://parapiora.fpt.vn/api/ISDeployment/Get_SupportINF_CheckCusTypeBySub",
    
    //IP: 172.20.17.32
    urlGetLocationByContract: "http://mapapi.fpt.vn/api/private/getContractLatLng",
  
    //IP: 172.20.17.50 STAGING, 172.20.17.32 PRODUCTION 
    urlGetListCodeDeployIndayIQC: "http://parapiora.fpt.vn/api/SupportINF/SupportINF_GetListFinishDate_IQC",
  
    //report insde stg 172.20.17.50 stagparapiora.fpt.vn
    //reportByInside: "http://stagparapiora.fpt.vn/api/iqc/get-list-contract-deployment-finished-by-emp-area",//STG
    reportByInside: "http://parapiora.fpt.vn/api/iqc/get-list-contract-deployment-finished-by-emp-area",//PRO
  
    //check version iqc api
    versionCheck: "http://mapmobile-ws.fpt.net/FMapService.svc/IQC_CheckVersion",
  
    //VIETCN 14/08/2019 add typePCTD
    typePCTD: 2
}