
const { genSaltSync, hashSync, compareSync, compare } = require("bcrypt");
const { sign } = require("jsonwebtoken");
const { getUserByEmail, createUsers, validatedAmbassadorsAccountById, validatedAmbassadorsAccountByEmail, getStatusCustomers, getCustomersByStatus, getTotalAmbassadorsInscrits, getTotalCustomersSigner, getTotalCustomersInscrits, getTotalCustomersRelancer, getTotalCustumersRevoquer, getAllUsers, getAllCustomers, updateUsersById, getUsersByRole, getAmbassadorById, getUsersById, getCustomersById, getAllAmbassador, createUsersByAdmin, createNewAccountAmbassadors, getTotalCustomers } = require("./user.service");
var validator = require("email-validator");


module.exports = {

    //Creer un utilisateur 
createUser: async (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
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
                body.password = hashSync(body.password,salt);
                createUsers(body, (error, results) => {
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
                        message : "Utilisteur enregistré !"
                    })
                })
            }
        })
},

    //Creer un utilisateur par admin
createUsersByAdmin: async (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
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
            body.password = hashSync(body.password,salt);
            createUsersByAdmin(body, (error, results) => {
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
                    message : "Utilisteur enregistré !"
                })
            })
        }
    })
},
      //Creer un compte ambassadors
createNewAccountAmbassadors: async (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
    getUserByEmail(body, (error, exists) => {
        console.log(exists)
        if(exists){
            return res.json({
                success: 0,
                code : 305,
                message: "l'email est déjà utilisé!"
            })
        }else {
            body.password = hashSync(body.password,salt);
            createNewAccountAmbassadors(body, (error, results) => {

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
                    message : "Compte ambassadeus enregistré !"
                })
            })
        }
    })
},
    // Valider compte ambassadeurs par Id
validatedAmbassadorsAccountById : async(req, res) => {
        const body = req.body;
        const id = parseInt(req.params.id)
        console.log(id)
        validatedAmbassadorsAccountById(body, id, (error, results) => {
            if (error) {
                throw error;
                return;
            } 
            if(!results){
                return res.json({
                    success: 1,
                    code: 200,
                    message: "Identifiant introuvable"
                })
            }
            return res.json({
                success: 1,
                code: 200,
                message: "Compte ambassadeur validé"
            })
        })
},

    //Valider compte ambassadeurs par Email
validatedAmbassadorsAccountByEmail : async(req, res) => {
        const body = req.body;
        validatedAmbassadorsAccountByEmail(body, (error, exists) => {
            if (error) {
                throw error;
            } 
                return res.json({
                    success: 1,
                    code: 200,
                    message: "Compte ambassadeur validé"
                })
        })
    },
 //Status de clients
getStatusCustomers : async(req, res) => {
    getStatusCustomers( (error, results)=> {
        if (error) {
            throw error;
        }
        return res.json({
            success: 1,
            code: 200,
            message: "Status des clients",
            data: results
        })
    })
 },
 //Afficher les clients par Status (Enregistrer, Signer, Relancer, Revoquer)
getCustomersByStatus : async (req, res) => {
    const body = req.body;
    getCustomersByStatus(body, (error, results) => {
        if (error) {
            throw error;
        }
        return res.json({
            success: 1,
            code: 200,
            message: `Status des clients ${req.body.status}`,
            length : results.length,
            data: results
        })
    })
 },
 
//Nombre d'ambassadeurs inscrits
getTotalAmbassadorsInscrits: (req, res) => {
        getTotalAmbassadorsInscrits((error, results)=>
        {
            if (error) {
                throw error;
            }
            return res.json({
                success: 1,
                code: 200,
                message: "Total ambassadeurs enregistrés",
                data: results
            })
        })
},
//Nombre de clients inscrits
getTotalCustomers: async (req, res) => {
    getTotalCustomers((error,results)=> {
        if (error) {
            throw error;
        }
        return res.json({
            success: 1,
            code: 200,
            message: "Total Client",
            data: results
        })
    })
},
//Nombre de clients inscrits
getTotalCustomersInscrits: async (req, res) => {
    getTotalCustomersInscrits((error,results)=> {
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
//Nombre de clients Signés
getTotalCustomersSigner: async (req, res) => {
    getTotalCustomersSigner((error,results)=> {
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
 //Nombre de clients relancer
 getTotalCustomersRelancer: async (req, res) => {
    getTotalCustomersRelancer((error,results)=> {
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
 //Nombre de clients Revoquer
getTotalCustumersRevoquer: async (req, res) => {
        getTotalCustumersRevoquer((error,results)=> {
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
    // Obtenir un utilisateur par son mail
getUserByEmail : (req, res) => { 
        const body = req.body;
        getUserByEmail(body, (error, results) => {
            if(error) {
                    throw error;
                    return;
            }
            if(!results) {
                return  res.json({
                    success: 0,
                    code: 303,
                    message: `Verifier l'addresse email svp !`
                })
            }
            return res.json({
                success: 1,
                data: results
            })
        })
},
    //Obtenir tous les utilisateurs
getAllUsers: (req, res) => {
        // console.log("current", req.user)
        getAllUsers((error, results) => {
            if (error) {
                throw error;
                return;
            }
            return res.json({
                success: 1,
                length: results?.length,
                data: results
            });
        });
},
    //Obtenir les utilisateurs par role
getUsersByRole: async(req, res) => {
    const body = req.body;
    getUsersByRole(body, (error, results) => {
        if(error){
            throw error;
            return;
        }
        if(!results) {return res.json({
            success: 0,
            code: 305,
            message: `le role n'a pas été trouvé...`
        })} else {
            return res.json({
                success: 1,
                length: results.length,
                data: results
            })
        }
        
    })
},
    //Obtenir les utilisateurs clients
getAllCustomers : async(req, res) => {
    getAllCustomers((error, results) => {
        if (error) {
            throw error;
            return;
        }
        return res.json({
            success: 1,
            length: results?.length,
            data: results
        });
    });
},

 //Obtenir les utilisateurs clients
 getCustomersById : async(req, res) => {
    const id = parseInt(req.params.id);
    getCustomersById((error, results) => {
        if (error) {
            throw error;
            return;
        }
        if(!results) {
            return res.json({
                success : 0,
                message: ` Identifant ${id} introuvable`
            })
        }
        return res.json({
            success: 1,
            data: results
        });
    });
},
 //Obtenir les utilisateurs ambassadeurs
 getAllAmbassador : async(req, res) => {
    getAllAmbassador((error, results) => {
        if (error) {
            throw error;
            return;
        }
        return res.json({
            success: 1,
            data: results
        });
    });
},
    //Obtenir les utilisateurs ambassadeurs
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
 //Obtenir les utilisateurs clients apr id
 getCustomersById : async(req, res) => {
    const id = parseInt(req.params.id)
    getCustomersById(id, (error, results) => {
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
    //Obtenir les données d'un utilisateurs qui ne soit pas un client
getUsersById : (req, res) => {
    const id = parseInt(req.params.id)
    getUsersById(id, (error, results) => {
        if (error) {
            throw error;
            return;
        }
        if (!results) {
            return res.json({
                success: 0,
                message: `Identifiant incorrecte`
            });
        }
        //   results.password = undefined;
        return res.json({
            success: 1,
            data: results
        });
    })
},
    // Modifier les donnés de l'utilisateur
updateUsersById : (req, res) => {
    const body = req.body;
    const id = parseInt(req.params.id)
    getUserByEmail(body, (error, emailExists) => {
        if(error) {
            throw error;
            return;
        }
        if(emailExists) {
            return res.json({
                success: 0,
                message:" L'email existe deja...",
            });
        } else{
            updateUsersById(body, id,(error, results) => {
                if (error) {
                    throw error;
                    return;
                }
                if (!results) {
                    return res.json({
                        success: 0,
                        code: 300,
                        message:" Erreur! Reessayer svp ...",
                    });
                }
                return res.json({
                    success: 1,
                    code: 600,
                    message:" Modifications effectuées",
                });
            })
        }
    })
},

    //Se logger en tant que User simple
login: async (req, res) => {
            const body = req.body;
            getUserByEmail(body,(error, results) => {
            // console.log(results)
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