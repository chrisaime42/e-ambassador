
const tokenVerify = require('../../utils/tokenVerify')
const verifyRoles = require('../../utils/verifyRoles')
const roles = require('../../utils/roles')
const { login, createUser, createNewAccountAmbassadors, validatedAmbassadorsAccountById, validatedAmbassadorsAccountByEmail, getStatusCustomers, getCustomersByStatus, getTotalCustomersInscrits, getTotalCustomersSigner, getTotalCustomersRelancer, getTotalCustumersRevoquer, getUserByEmail, getTotalAmbassadorsInscrits, getAllUsers, getAllCustomers, getAllAmbassador, getAmbassadorById, getCustomersById, getUsersById, updateUsersById, getUsersByRole, createUsersByAdmin, getTotalCustomers } = require('./user.controllers')
const { checkFieldsSignup, checkFieldsIsvalidated, checkFieldsupdateUsers } = require('../../middleware/verifyFields')

const router = require('express').Router()


// Creer un utilisateur
router.post('/create', createUser)

// Creer un utilisateur par l'admin
router.post('/admin/create',checkFieldsSignup, tokenVerify, verifyRoles(roles.administrateur),createUsersByAdmin)

// Creer un nouveau compte ambassadeur
router.post('/admin/ambassadors-account',checkFieldsSignup, tokenVerify, verifyRoles(roles.administrateur, roles.manager), createNewAccountAmbassadors)

// Valider compte ambassadeurs par Id
router.post('/admin/ambassadors-account/validated=:id', tokenVerify,checkFieldsIsvalidated, verifyRoles(roles.administrateur, roles.manager), validatedAmbassadorsAccountById)

// Valider compte ambassadeurs par email
router.post('/admin/ambassadors-account/email-validated=1', tokenVerify, verifyRoles(roles.administrateur, roles.manager), validatedAmbassadorsAccountByEmail)

 //Status de clients
router.get("/status/customers", tokenVerify,verifyRoles(roles.administrateur, roles.manager, roles.ambassadeur),getStatusCustomers)

 //Obtenir tous les clients par status
 router.post("/all-customers/status", tokenVerify,verifyRoles(roles.administrateur, roles.manager, roles.ambassadeur),getCustomersByStatus)
 
 //DASHBOARD 
  //Nombre d'ambassadeurs inscrits
 router.get('/total-ambassadors/inscrits',tokenVerify,verifyRoles(roles.administrateur, roles.manager), getTotalAmbassadorsInscrits)

 //DASHBOARD MINI
 //Nombre de clients inscrits
 router.get('/total-clients',tokenVerify,verifyRoles(roles.administrateur, roles.manager), getTotalCustomers)
 //Nombre de clients inscrits
  router.get('/total-clients/inscrits',tokenVerify,verifyRoles(roles.administrateur, roles.manager), getTotalCustomersInscrits)

  //Nombre de clients signés
  router.get('/total-clients/signer',tokenVerify,verifyRoles(roles.administrateur, roles.manager), getTotalCustomersSigner)

   //Nombre de clients Relancer
   router.get('/total-clients/relancer',tokenVerify,verifyRoles(roles.administrateur, roles.manager), getTotalCustomersRelancer)

   //Nombre de clients Revoquer
   router.get('/total-clients/revoquer',tokenVerify,verifyRoles(roles.administrateur, roles.manager), getTotalCustumersRevoquer)

//Obtenir un utilisateur par son mail
router.post('/email-user',tokenVerify,verifyRoles(roles.administrateur, roles.manager), getUserByEmail)

//Obtenir tous les utilisateurs
router.get('/all-user',tokenVerify,verifyRoles(roles.administrateur, roles.manager), getAllUsers)

//Obtenir les utlisateurs par role
router.post('/role',tokenVerify, verifyRoles(roles.administrateur, roles.manager),  getUsersByRole)

//Obtenir tous les utilisateurs clients
router.get('/all-customers', tokenVerify, verifyRoles(roles.administrateur, roles.manager),  getAllCustomers)

 //Obtenir tous les utilisateurs ambassadeurs
router.get('/all-ambassadors', tokenVerify, verifyRoles(roles.administrateur, roles.manager),  getAllAmbassador)

 //Obtenir un utilisateur ambassadeur par id
router.get('/ambassadors/:id', tokenVerify, verifyRoles(roles.administrateur, roles.manager),  getAmbassadorById)

//Obtenir un customers par Id
router.get('/customers/:id', tokenVerify, verifyRoles(roles.administrateur, roles.manager),  getCustomersById)

//Obtenir un users par Id
router.get('/:id', tokenVerify, verifyRoles(roles.administrateur, roles.manager),  getUsersById)


//Modifier les donnés d'un utilisateurs
router.patch('/:id', tokenVerify,checkFieldsupdateUsers, verifyRoles(roles.administrateur,roles.manager), updateUsersById)

//Se Connecter
router.post('/auth/login', login)

module.exports = router;