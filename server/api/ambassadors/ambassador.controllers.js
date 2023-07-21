
const { genSaltSync, hashSync, compareSync, compare } = require("bcrypt");
const { sign } = require("jsonwebtoken");
const textflow = require("textflow.js");
const { saveNewCustomersParticulier, saveNewCustomersEntreprise, getStatusCustomersSavedByAmbassadorId, getAllCustomersSavedByAmbassadorId, getDetailCustomersSavedByAmbassadorId, updateInfoCustomersSavedByAmbassadorId, getAmbassadorByEmail, getAmbassadorById, updateAmbassadorById, deleteAmbassadorById, getTotalCustomersInscrits, getTotalCustomersSigner, getTotalCustomersRelancer, getTotalCustumersRevoquer, createNewAccountAmbassador, getAmbassadorByTelephone, getCustomersByEmail, getCustomersByTelephone, getCustomersByCompanyName, updateOTP, updateOTPToNull, resetOTP } = require("./ambassador.service");
const { generateOTP, SEND_SMS_WITH_TWILIO } = require("../../middleware/function");
const cloudinary = require("../../helper/cloudinary");
const e = require("express");

textflow.useKey(`${process.env.API_KEY_TEXTFLOW_SMS}`)

module.exports = {

//CUSTOMERS
    //Save new customers with Particulier status
    saveNewCustomersParticulier: async (req, res) => {
        const body = req.body;
       // const salt = genSaltSync(10);
       saveNewCustomersParticulier(body, (error, exists) => {
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
    if (req.file) {
        console.log(" req file 1", req.file.path);
        try {
        await cloudinary.uploader
            .upload(req.file.path, {
            public_id: `${Date.now()}_${body.name}`,
            resource_type: "auto",
            folder: "ambassador",
            })
            .then((result) => {
            body.companyImage = result.url;
            });
        } catch (e) {
        console.log(e);
        res.status(505).json({
            code: 505,
            message: "Erreur chargement image, ressayer svp...",
        });
        }
    }
    getCustomersByEmail(body, (error, emailExists) => {
        if(error) throw error;

        if(emailExists) {
            return res.json({
                success : 0,
                message: "L'email est déjà occupé ..."
            })
        } else {
            getCustomersByTelephone(body, (error, phoneExists) => {
                if(error) throw error;
                if(phoneExists) {
                    return res.json({
                        success: 0,
                        message: "Numero de telephone est déjà occupé"
                    })
                } else {
                    getCustomersByCompanyName(body, (error, companyNameExists) => {
                        if (error) throw error;

                        if(companyNameExists) {
                            return res.json({
                                success: 0,
                                message: "Le nom de l'entreprise a deja été enregistré"
                            })
                        } else {
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
                }
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
    if (req.file) {
        console.log(" req file 1", req.file.path);
        try {
        await cloudinary.uploader
            .upload(req.file.path, {
            public_id: `${Date.now()}_${body.name}`,
            resource_type: "auto",
            folder: "ambassador",
            })
            .then((result) => {
            body.companyImage = result.url;
            });
        } catch (e) {
        console.log(e);
        res.status(505).json({
            code: 505,
            message: "Erreur chargement image, ressayer svp...",
        });
        }
    }
    // getCustomersByEmail(body,(error, emailExists) => {
    //     if (error) throw error;
    //     if(emailExists) {
    //         return res.json({
    //             success : 0,
    //             message : "Email deja occupé",
    //         })
    //     } 
    //     getCustomersByTelephone(body,(error, phoneExists) => {
    //         if(error) throw error;
    //         if(phoneExists) {
    //             return res.json({
    //                 success : 0,
    //                 message: "Numero de Telephone occupée"
    //             })
    //         } else {
    //             getCustomersByCompanyName(body,(error, companyNameExists) => {
    //                 if(error) throw error;
    //                 if(companyNameExists){
    //                     return res.json({
    //                         success: 0,
    //                         message: "Le nom de l'entreprise est deja occupée"
    //                     })
    //                 } else {
                        
    //                 }
    //             })
    //         }
    //     })
       
        

    // })
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
          const salt = genSaltSync(10);
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
                getAmbassadorByTelephone(body, (error, phoneExists) => {
                    if(phoneExists) {
                        return res.json({
                        success : 0,
                        message : "Numero de telephone est déjà occupé..."
                     })
                    } else {
                        body.password = hashSync(body.password,salt);
                        createNewAccountAmbassador(body, async (error, results) => {
                            if(error) {
                                throw error;
                                return;
                            }
                            return res.json({
                                success: 1,
                                message: "Ambassadeur enregistré"
                        })
                        })
                    }
                })
            }
        })

    },
     //Send OTP CODE to Account ambassadors by Id to (whatsapp verification, sms, email, otp)
     sendOTPCodeToAmbassador : async(req, res) => {
        const id = parseInt(req.params.id);
        const body = req.body;
        const OTP_CODE = generateOTP();
        const PHONE_NUMBER = process.env.MY_PHONE_NUMBER_TWILIO;
        const Message = `Hello, Votre code de verification E-amabssador est : ${OTP_CODE}`
       // const salt = genSaltSync(10);
        getAmbassadorByTelephone(body, async(error, phoneExists) => {
            if (error) throw error;
            if(!phoneExists) {
                return res.json({
                    success: 0,
                    message: "Numéro de telephone incorrecte..."
                })
            } else {
                const salt = genSaltSync(10);
               console.log("OTP ", OTP_CODE)
               console.log("PHONE ", phoneExists.telephone)
               console.log("PHONE TWILIO ", PHONE_NUMBER)
               SEND_SMS_WITH_TWILIO(PHONE_NUMBER, phoneExists.telephone, Message)
               
               let otp = OTP_CODE 
               let telephone = phoneExists.telephone
               updateOTP(otp,telephone,(error, results) => {})
               return res.json({
                success: 1,
                message: "Code de verification transferé",
                data: otp
            })
            }
        }) 
     },
     
     // Verify account ambassador to OTP code
     verifyAmbassadorAccountWithOTPCode : async(req, res) => {
        const id = parseInt(req.params.id);
        const body = req.body;
        //const salt = genSaltSync(10);
        getAmbassadorByTelephone(body, async(error, phoneExists) => {
            if (error) throw error;
            if(!phoneExists) {
                return res.json({
                    success: 0,
                    message: "Numéro de telephone incorrecte..."
                })
            } else {
                if (body.otp && body.otp !== phoneExists.otp ) {
                    return res.json({
                        succes: 0,
                        message: "Code verification incorrecte..."
                    })
                } else {
                    let telephone = phoneExists.telephone
                    resetOTP(telephone, (error, results) =>{})
                    return res.json({
                        succes: 1,
                        message: "Verification effectué"
                    })
                }
            }
        }) 
     },

      //Delete or Desactivated amabassador by Id
      deleteAmbassadorById: async(req, res) => {
        const id = parseInt(req.params.id);
        deleteAmbassadorById(id, async(error, results) => {
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
                    
            } else {
                return res.json({
                    success: 0,
                    code: 301,
                    message: "Email invalide !"
                })
            }
        })
},

}