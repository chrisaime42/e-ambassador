
const tokenVerify = require('../../utils/tokenVerify')
const verifyRoles = require('../../utils/verifyRoles')
const roles = require('../../utils/roles')
const { saveNewCustomersParticulier, getStatusCustomersSavedByAmbassadorId, getAllCustomersSavedByAmbassadorId, getDetailCustomersSavedByAmbassadorId, updateInfoCustomersSavedByAmbassadorId, getAmbassadorById, updateAmbassadorById, verifiedAccountAmbassadorById, createNewAccountAmbassador, deleteAmbassadorById, getTotalCustomersInscrits, getTotalCustomersSigner, getTotalCustomersRelancer, getTotalCustumersRevoquer, login } = require('./ambassador.controllers')
const { checkNewCustomersParticulierFields, checkFieldsFieldCustomersEnterprise, checkFieldsSignup, checkFieldsOtp } = require('../../middleware/verifyFields')


const router = require('express').Router()

//CUSTOMERS
   //Save new customers with Particulier status
   router.post('/new-customers/particulier', tokenVerify, checkNewCustomersParticulierFields,verifyRoles(roles.ambassadeur),saveNewCustomersParticulier)

   //Save new customers with Enterprise status
   router.post('/new-customers/entreprise', tokenVerify, checkFieldsFieldCustomersEnterprise,verifyRoles(roles.ambassadeur),saveNewCustomersParticulier)

   //Get status Customers save by ambassador
   router.get('/status-customers-saved/:id/ambassador',tokenVerify, verifyRoles(roles.ambassadeur),getStatusCustomersSavedByAmbassadorId)
   //Get all Customers saved by ambassador Id
    router.get('/all-customers-saved/:id/ambassador',tokenVerify, verifyRoles(roles.ambassadeur),getAllCustomersSavedByAmbassadorId)
    //Get Details Customers saved by ambassadorId
    router.get('/detail-customers-saved/:id/ambassador',tokenVerify, verifyRoles(roles.ambassadeur),getDetailCustomersSavedByAmbassadorId)
    //Update info customers by ambassador Id
    router.patch('/update-customers-saved/:id',tokenVerify, verifyRoles(roles.ambassadeur),updateInfoCustomersSavedByAmbassadorId)

//AMBASSADOR INFO
    //Get only ambassadors by Id
   router.get('/get-ambassador/:id',tokenVerify, verifyRoles(roles.ambassadeur),getAmbassadorById)

   //update ambassadors by Id
   router.patch('/update-single-ambassador/:id',tokenVerify, verifyRoles(roles.ambassadeur),updateAmbassadorById)

   //Verify Account ambassador
   router.patch('/verify/:id',tokenVerify,checkFieldsOtp, verifyRoles(roles.ambassadeur),verifiedAccountAmbassadorById)

   //Delete or Desactivated amabassador by Id
   router.patch('/desactived/:id',tokenVerify, verifyRoles(roles.ambassadeur),deleteAmbassadorById)


//STATISTIQUES
    //Get Total customers saved by ambassadorId
    router.get('/total-customers-save/:id/ambassador', tokenVerify, verifyRoles(roles.ambassadeur),getTotalCustomersInscrits)

    //Get Total customers Sign by ambassadorId
    router.get('/total-customers-signer/:id/ambassador', tokenVerify, verifyRoles(roles.ambassadeur),getTotalCustomersSigner)

    //Get Total customers Relaunch by ambassadorId
    router.get('/total-customers-relaunch/:id/ambassador', tokenVerify, verifyRoles(roles.ambassadeur),getTotalCustomersRelancer)

     //Get Total customers Revoice by ambassadorId
     router.get('/total-customers-revoice/:id/ambassador', tokenVerify, verifyRoles(roles.ambassadeur),getTotalCustumersRevoquer)

   //S'authentifier
   router.get('/auth/login', verifyRoles(roles.ambassadeur),login)
   
   //create new account ambassador
   router.post('/auth/register',tokenVerify,checkFieldsSignup, verifyRoles(roles.ambassadeur),createNewAccountAmbassador)

module.exports = router;