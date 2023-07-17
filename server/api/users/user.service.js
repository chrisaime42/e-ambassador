const dbConfig = require("../../config/db.config")

module.exports = {
    //Creer un utilisateur par admin
createUsers: (data, callback) => {

    dbConfig.query(`INSERT INTO users (firstname,lastname, email, password,
        role) values (?,?,?,?,?)`,[
            data.firstname,
            data.lastname,
            data.email,
            data.password,
            data.role
        ],(error, results) => {
            if (error) {
                throw error;
                return;
            }
            return callback(null, results)
        }
    );
},

//Creer un user par admin
createUsersByAdmin: (data, callback) => {
    dbConfig.query(`INSERT INTO users (firstname,lastname, email, password,
        role) values (?,?,?,?,?)`,[
            data.firstname,
            data.lastname,
            data.email,
            data.password,
            data.role
        ],(error, results) => {
            if (error) {
                throw error;
                return;
            }
            return callback(null, results)
        }
    );
},
    //Creer un compte ambassadors
    createNewAccountAmbassadors: (data, callback) => {

        dbConfig.query(`INSERT INTO ambassador (firstname,lastname, email, telephone,address,password,role) values (?,?,?,?,?,?,?)`,[
                data.firstname,
                data.lastname,
                data.email,
                data.telephone,
                data.address,
                data.password,
                data.role
            ],(error, results) => {
                if (error) {
                    throw error;
                    return;
                }
                return callback(null, results)
            }
        );
    },
    //valider compte ambassador par Id
    validatedAmbassadorsAccountById: (data,id, callback) => {
        dbConfig.query(`update ambassador set isValidated=? where id = ?`,[
                data.isvalidated,
                id,
            ],(error, results) => {
                if (error) {
                    throw error;
                    return;
                }
                return callback(null, results)
            }
        );
    },
    //valider compte ambassador par Email
    validatedAmbassadorsAccountByEmail: (data, callback) => {
        dbConfig.query(`update ambassador set isValidated=? where email = ?`,[
                data.isvalidated,
                data.email,
            ],(error, results) => {
                if (error) {
                    throw error;
                    return;
                }
                return callback(null, results)
            }
        );
    },
    //Status de clients
    getStatusCustomers : (callback) => {
        dbConfig.query(`SELECT * FROM customers `, []
        ,(error, results) => {
            if (error) {
                throw error;
                return;
            }
            return callback(null, results)
        })
    },
     //Afficher les clients par Status (Enregistrer, Signer, Relancer, Revoquer)
     getCustomersByStatus : (data, callback) => {
        dbConfig.query(`SELECT * FROM customers where status = ? `, [data.status]
        ,(error, results) => {
            if (error) {
                throw error;
                return;
            }
            return callback(null, results)
        })
    },


    //Statistiques
    //Nombre d'ambassadeurs inscrits
    getTotalAmbassadorsInscrits : ( callback) => {
        dbConfig.query(`SELECT count(*) as total FROM ambassador`, []
        ,(error, results) => {
            if (error) {
                throw error;
                return;
            }
            return callback(null, results)
        })
    },
    //Nombre de clients inscrits
    getTotalCustomers : ( callback) => {
        dbConfig.query(`SELECT count(*) as total FROM customers`, []
        ,(error, results) => {
            if (error) {
                throw error;
                return;
            }
            return callback(null, results)
        })
    },
    //Nombre de clients Enregistrer
    getTotalCustomersInscrits : ( callback) => {
        dbConfig.query(`SELECT count(*) as total FROM customers where status='Enregistrer'`, []
        ,(error, results) => {
            if (error) {
                throw error;
                return;
            }
            return callback(null, results)
        })
    },
    //Nombre de clients Signés
    getTotalCustomersSigner : (callback) => {
        dbConfig.query(`SELECT count(*) as total FROM customers where status='Signer'`, []
        ,(error, results) => {
            if (error) {
                throw error;
                return;
            }
            return callback(null, results)
        })
    },
    //Nombre de clients relancer
    getTotalCustomersRelancer : (callback) => {
        dbConfig.query(`SELECT count(*) as total FROM customers where status='Relancer'`, []
        ,(error, results) => {
            if (error) {
                throw error;
                return;
            }
            return callback(null, results)
        })
    },
    //Nombre de clients Revoquer
    getTotalCustumersRevoquer : ( callback) => {
        dbConfig.query(`SELECT count(*) as total FROM customers where status='Revoquer'`, []
        ,(error, results) => {
            if (error) {
                throw error;
                return;
            }
            return callback(null, results)
        })
    },
    
    //Obtenir un utilisteur par son email
    getUserByEmail: (data, callback) => {
        dbConfig.query(`SELECT * FROM users WHERE email = ?`, [data.email]
        ,(error, results) => {
            if (error) {
                throw error;
                return;
            }
            return callback(null, results[0])
        })
    },
    //Obtenir tous les utilisateurs
    getAllUsers: callback => {

        dbConfig.query(`SELECT * from users`,[],
        (error, results ) => {
            if (error) {
                throw error;
                return;
            }
            return callback(null, results)
        })
    },
    //Obtenir les utlisateurs par role
    getUsersByRole: (data, callback) => {
        dbConfig.query(`SELECT * from users WHERE role = ?`, [data.role],
        (error, results) => {
            if (error) {
                throw error;
                return;
            }
            return callback(null, results)
        })
    },
      //Obtenir tous les utilisateurs
    getAllCustomers: callback => {

        dbConfig.query(`SELECT * from customers`,[],
        (error, results ) => {
            if (error) {
                throw error;
                return;
            }
            return callback(null, results)
        })
    },
     //Obtenir  utilisateurs par Id
     getCustomersById: (id,callback) => {
        dbConfig.query(`SELECT * from customers where id = ? `,[id],
        (error, results ) => {
            if (error) {
                throw error;
                return;
            }
            return callback(null, results[0])
        })
    },
       //Obtenir tous les utilisateurs
    getAllAmbassador: callback => {

        dbConfig.query(`SELECT * from ambassador`,[],
        (error, results ) => {
            if (error) {
                throw error;
                return;
            }
            return callback(null, results)
        })
    },
    //Obtenir un  utilisateurs ambassador par id
    getAmbassadorById: (id, callback) => {
        dbConfig.query(`SELECT * from ambassador where id = ? `,[id],
        (error, results ) => {
            if (error) {
                throw error;
                return;
            }
            return callback(null, results[0])
        })
    },
     //Obtenir un  utilisateurs clients  par id
     getCustomersById: (id, callback) => {
        dbConfig.query(`SELECT * from customers where id = ? `,[id],
        (error, results ) => {
            if (error) {
                throw error;
                return;
            }
            return callback(null, results[0])
        })
    },
    //Obtenir info user  par id
    getUsersById: (id, callback) => {
        dbConfig.query(`SELECT * from users WHERE id = ?`, [id],
        (error, results) => {
            if (error) {
                throw error;
                return;
            }
            return callback(null, results[0])
        })
    },
    //Modifier info user  par id
    updateUsersById: (data,id, callback) => {
        dbConfig.query(`UPDATE users set firstname= ?, lastname = ?, email = ? WHERE id = ?`, [
            data.firstname,
            data.lastname,
            data.email,
            id
        ],
        (error, results) => {
            if (error) {
                throw error;
                return;
            }
            return callback(null, results)
        })
    }
} 