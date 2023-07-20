
const { genSaltSync, hashSync, compareSync, compare } = require("bcrypt");
require("dotenv").config()
const { sign } = require("jsonwebtoken");
const textflow = require("textflow.js");
const { saveNewCustomersParticulier, saveNewCustomersEntreprise, getStatusCustomersSavedByAmbassadorId, getAllCustomersSavedByAmbassadorId, getDetailCustomersSavedByAmbassadorId, updateInfoCustomersSavedByAmbassadorId, getAmbassadorByEmail, getAmbassadorById, updateAmbassadorById, getTelephoneByAmbassadorId, sendOTPCode, verifiedAccountAmbassadorById, deleteAmbassadorById, getTotalCustomersInscrits, getTotalCustomersSigner, getTotalCustomersRelancer, getTotalCustumersRevoquer, createNewAccountAmbassador } = require("./ambassador.service");

textflow.useKey(process.env.API_KEY_TEXTFLOW_SMS)

module.exports = {

//CUSTOMERS
    //Save new customers with Particulier status
    saveNewCustomersParticulier: async (req, res) => {
        const body = req.body;
       // const salt = genSaltSync(10);
        getUserByEmail(body, (error, exists) => {
           // console.log(exists)
           if(error) {
            throw error;
           }
            if(exists){
                return res.json({
                    success: 0,
                    code : 305,
                    message: "l'email est déjà utilisé!"
                })
            }else {
               // body.password = hashSync(body.password,salt);
               saveNewCustomersParticulier(body, (error, results) => {
                    if(error)  {
                        console.log(error);
                        return res.json({
                            success: 0,
                            code : 500,
                            message: "Erreur de connexion..."
                        }); 
                    }
                    if(results) return res.json({
                        success: 1,
                        code : 200,
                        message : "Client enregistré !"
                    })
                })
            }
        })
},
    //Save new customers with Enterprise status
    saveNewCustomersEntreprise: async (req, res) => {
    const body = req.body;
   // const salt = genSaltSync(10);
    getUserByEmail(body, (error, exists) => {
       // console.log(exists)
       if(error) {
        throw error;
       }
        if(exists){
            return res.json({
                success: 0,
                code : 305,
                message: "l'email est déjà utilisé!"
            })
        }else {
           // body.password = hashSync(body.password,salt);
           saveNewCustomersEntreprise(body, (error, results) => {
                if(error)  {
                    console.log(error);
                    return res.json({
                        success: 0,
                        code : 500,
                        message: "Erreur de connexion..."
                    }); 
                }
                if(results) return res.json({
                    success: 1,
                    code : 200,
                    message : "Client enregistré !"
                })
            })
        }
    })
},
//Get status Customers save by ambassador
getStatusCustomersSavedByAmbassadorId: async (req,res)=>{
    const id = parseInt(req.params.id)
    getStatusCustomersSavedByAmbassadorId(id,(error, results) => {
        if (error) {
            throw error;
            return;
        }
        if(!results) {
            return res.json({
                success: 0,
                message : `Identifiant ${id} incorrecte`
            })
        }
        return res.json({
            success: 1,
            message: "Status des clients",
            data : results
        })
    })
},
//Get all Customers saved by ambassador Id
getAllCustomersSavedByAmbassadorId: async (req,res)=>{
    const id = parseInt(req.params.id)
    getAllCustomersSavedByAmbassadorId(id,(error, results) => {
        if (error) {
            throw error;
            return;
        }
        if(!results) {
            return res.json({
                success: 0,
                message : `Identifiant ${id} incorrecte`
            })
        }
        return res.json({
            success: 1,
            message: "Status des clients (All)",
            data : results
        })
    })
},
//Get Details Customers saved by ambassadorId
getDetailCustomersSavedByAmbassadorId: async (req,res)=>{
    const id = parseInt(req.params.id)
    const body = req.body;
    getDetailCustomersSavedByAmbassadorId(body,id,(error, results) => {
        if (error) {
            throw error;
            return;
        }
        if(!results) {
            return res.json({
                success: 0,
                message : `Identifiant ${id} incorrecte`
            })
        }
        return res.json({
            success: 1,
            message: "Detail du clients",
            data : results
        })
    })
},
//Update info customers by ambassador Id
updateInfoCustomersSavedByAmbassadorId: async(req, res) => {
    const body = res.body;
    const id = parseInt(req.params.id)
    updateInfoCustomersSavedByAmbassadorId(body, id,(error, results) => {
        if(error){
            throw error;
            return;
        }
        if(results) {
            return res.json({
                success: 1,
                message : "Modification effectuée"
            })
        } else {
            return res.json({
                success: 0,
                message : "Modification non effectuée"
            })
        }
    })
},
//AMBASSADOR INFO
     //Get only ambassadors by Id
     getAmbassadorById : async(req, res) => {
        const id = parseInt(req.params.id)
        getAmbassadorById(id, (error, results) => {
            if (error) {
                throw error;
                return;
            }
            if(!results) {
                return res.json({
                    success: 0,
                    message : `Identifiant ${id} introuvable`
                })
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    //update ambassadors by Id
    updateAmbassadorById : async(req, res) => {
        const id = parseInt(req.params.id)
        const body =  req.body;
        updateAmbassadorById(body,id, (error, results) => {
            if (error) {
                throw error;
                return;
            }
            if(!results) {
                return res.json({
                    success: 0,
                    message : `Modification non effectuée`
                })
            } else {
                return res.json({
                    success: 1,
                    message: "Modification effectuée"
                });
            }
           
        });
    },
    //create new account ambassador
    createNewAccountAmbassador: async(req, res) => {
        const body = req.body;
        getAmbassadorByEmail(body, (error, emailExists) => {
            if(error) {
                throw error;
            }
            if(emailExists) {
                return res.json({
                    success : 0,
                    message : "L'email est déjà occupé..."
                })
            } else {
                createNewAccountAmbassador(body, async (error, results) => {
                    if(error) {
                        throw error;
                        return;
                    }
                    if(results) {
                       // Envoyer le code de verification
                       let result = await textflow.sendVerificationSMS(req.body.telephone, {
                        service_name : `Votre code de vérification E-ambassador est : ${result.data.verification_code}`,
                        seconds: 86400 //1d
                       })
                       if(result.ok) {
                         //  sendOTPCode(result.data.verification_code, result.id)
                           return res.json({success: 1, message: "Code de verification envoyé", data: result})
                       }
                    }
                })
            }
        })

    },
     //Verify Account ambassadors by Id to (whatsapp verification, sms, email, otp)
     verifiedAccountAmbassadorById : async(req, res) => {
        const id = parseInt(req.params.id);
        const body = req.body;
        getTelephoneByAmbassadorId(id, async(error, data) => {
            if (error) throw error;
            if(data) {
                console.log("Telephone : ", data)
                verifiedAccountAmbassadorById(body,data.id, async (error, results) => {
                    if(error) {
                        throw error;
                        return;
                    }
                    if(results) {
                        let result = await textflow.verifyCode(`${data.telephone}`, `${req.body.otp}`); 
                        if(result.valid) {
                            return res.json({
                                success : 1,
                                message: "Vérification effectuée..."
                            })
                        } else {
                            return res.json({
                                success : 0,
                                message: "Code OTP incorrecte..."
                            })
                        }
                        
                    } else {
                        return res.json({
                            success : 0,
                            message: "Vérification non effectuée..."
                        })
                    }
                   
                })
                
            }
        }) 
     },
      //Delete or Desactivated amabassador by Id
      deleteAmbassadorById: async(req, res) => {
        const id = parseInt(req.params.id);
        deleteAmbassadorById(id, async(error, reults) => {
            if(error) {
                throw error;
                return;
            }
            if(results) {
                return res.json({
                    success : 1,
                    message : "Compte Ambassadeur desactivé..."
                })
            } else {
                return res.json({
                    success : 0,
                    message : "Erreur c'est produite lors de desactivation du compte..."
                })
            }
        })

      },
     
//STATISTIQUES
    //Get Total customers saved by ambassadorId
    getTotalCustomersInscrits: async (req, res) => {
        const id = parseInt(req.params.id);
        getTotalCustomersInscrits(id,(error,results)=> {
            if (error) {
                throw error;
            }
            return res.json({
                success: 1,
                code: 200,
                message: "Total Client enregistrés",
                data: results
            })
        })
    },
    //Get Total customers Sign by ambassadorId
    getTotalCustomersSigner: async (req, res) => {
        const id = parseInt(req.params.id);
        getTotalCustomersSigner(id,(error,results)=> {
            if (error) {
                throw error;
            }
            return res.json({
                success: 1,
                code: 200,
                message: "Total Clients Signés",
                data: results
            })
        })
    },
    //Get Total customers Relaunch by ambassadorId
    getTotalCustomersRelancer: async (req, res) => {
        const id = parseInt(req.params.id)
        getTotalCustomersRelancer(id,(error,results)=> {
            if (error) {
                throw error;
            }
            return res.json({
                success: 1,
                code: 200,
                message: "Total Clients Relancés",
                data: results
            })
        })
    },
    //Get Total customers Revoice by ambassadorId
    getTotalCustumersRevoquer: async (req, res) => {
        const id = parseInt(req.params.id)
        getTotalCustumersRevoquer(id,(error,results)=> {
            if (error) {
                throw error;
            }
            return res.json({
                success: 1,
                code: 200,
                message: "Total Clients Revoqués",
                data: results
            })
        })
},

//Se logger en tant que ambassaodr
login: async (req, res) => {
            const body = req.body;
            getAmbassadorByEmail(body,(error, results) => {
            // consol e.log(results)
                if(error){
                    console.log(error);
                } 
            if(results) {
                    const role = results.role
                    
                    compare(body.password, results.password, (error, response) => {
                        if(response) {
                            results.password = undefined;
                            console.log('reponse', results);
                            const token = sign({
                                result: [results.role],
                                "userInfo": {
                                    "roles": [role]
                                }
                        }, process.env.JWT_TOKEN_SECRET, {
                                expiresIn: process.env.JWT_EXPIRES_IN
                            });
                            return res.json({
                                success: 1,
                                message: "Vous etes connecté...",
                                token: token
                            });
                        } else {
                            return res.json({
                                success: 0,
                                code: 301,
                                message: "Identifiant invalide !"
                            })
                        }
                    })
                    
            } 
        })
},
}