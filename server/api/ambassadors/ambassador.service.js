const dbConfig = require("../../config/db.config")

module.exports = {
//CUSTOMERS
    //Save new customers with Particulier status
    saveNewCustomersParticulier: (data, callback) => {
        dbConfig.query(`INSERT INTO customers (firstname,lastname, email,
            telephone, address, type, ambassadorId, status ) values (?,?,?,?,?,'Particulier',?,'Enregistrer')`,[
                data.firstname,
                data.lastname,
                data.email,
                data.telephone,
                data.address,
                data.ambassadorId,
            ],(error, results) => {
                if (error) {
                    throw error;
                    return;
                }
                return callback(null, results)
            }
        );
    },
    //Save new customers with Enterprise status
    saveNewCustomersEntreprise: (data, callback) => {
        dbConfig.query(`INSERT INTO customers (firstname,lastname, email,
            telephone, address, managerName,type, ambassadorId, companyName, companyImage,  status ) values (?,?,?,?,?,?,?,?,?,?,?)`,[
                data.firstname,
                data.lastname,
                data.email,
                data.telephone,
                data.address,
                data.managerName,
                data.type || 'Particulier',
                data.ambassadorId,
                data.companyName,
                data.companyImage || '',
                data.status ||'Enregistrer'
            ],(error, results) => {
                if (error) {
                    throw error;
                    return;
                }
                return callback(null, results)
            }
        );
    },
    //Get status Customers save by ambassador
    getStatusCustomersSavedByAmbassadorId: (id, callback) => {
        dbConfig.query(`SELECT c.*, a.id, a.firstname  FROM customers as c, ambassador as a WHERE c.ambassadorId = a.id AND a.id = ? `,[ id ],(error, results) => {
                if (error) {
                    throw error;
                    return;
                }
                return callback(null, results)
            }
        );
    },
    //Get all Customers saved by ambassador Id
    getAllCustomersSavedByAmbassadorId: (id, callback) => {
        dbConfig.query(`SELECT c.*, a.*  FROM customers as c, ambassador as a WHERE c.ambassadorId = a.id AND a.id = ? `,[ id ],(error, results) => {
                if (error) {
                    throw error;
                    return;
                }
                return callback(null, results)
            }
        );
    },
    //Get Details Customers saved by ambassadorId
    getDetailCustomersSavedByAmbassadorId: (data,id, callback) => {
        dbConfig.query(`SELECT c.*, a.*  FROM customers as c, ambassador as a WHERE c.ambassadorId = a.id AND c.id = ? AND a.id = ?`,[ data.id,id ],(error, results) => {
                if (error) {
                    throw error;
                    return;
                }
                return callback(null, results)
            }
        );
    },
    //Update info customers by ambassador Id
    updateInfoCustomersSavedByAmbassadorId: (data,id, callback) => {
        dbConfig.query(`UPDATE customers set firstname= ?, lastname= ?, email= ?, telephone= ?, 
        address= ?, managerName= ?, type= ?, companyName= ? WHERE id = ?`,
        [ 
            data.firstname,
            data.lastname,
            data.email,
            data.telephone,
            data.address,
            data.managerName,
            data.type,
            data.companyName,
            id
         ],(error, results) => {
                if (error) {
                    throw error;
                    return;
                }
                return callback(null, results)
            }
        );
    },
    //Get customers by email
    getCustomersByEmail: (data, callback) => {
        dbConfig.query(`SELECT * FROM customers WHERE email = ?`, [data.email]
        ,(error, results) => {
            if (error) {
                throw error;
                return;
            }
            return callback(null, results[0])
        })
    },
     //Get customers by email
     getCustomersByCompanyName: (data, callback) => {
        dbConfig.query(`SELECT * FROM customers WHERE companyName = ?`, [data.companyName]
        ,(error, results) => {
            if (error) {
                throw error;
                return;
            }
            return callback(null, results[0])
        })
    },
    //Get customers by telephone
    getCustomersByTelephone: (data, callback) => {
        dbConfig.query(`SELECT * FROM customers WHERE telephone = ?`, [data.telephone]
        ,(error, results) => {
            if (error) {
                throw error;
                return;
            }
            return callback(null, results[0])
        })
    },
    //Get customers by Id
    getCustomersById: (id, callback) => {
        dbConfig.query(`SELECT * FROM customers WHERE id = ?`, [id]
        ,(error, results) => {
            if (error) {
                throw error;
                return;
            }
            return callback(null, results[0])
        })
    },

//AMBASSADOR INFO
    //Get ambassador by email
    getAmbassadorByEmail: (data, callback) => {
        dbConfig.query(`SELECT * FROM ambassador WHERE email = ?`, [data.email]
        ,(error, results) => {
            if (error) {
                throw error;
                return;
            }
            return callback(null, results[0])
        })
    },
       //Get ambassador by telephone
       getAmbassadorByTelephone: (data, callback) => {
        dbConfig.query(`SELECT * FROM ambassador WHERE telephone = ?`, [data.telephone]
        ,(error, results) => {
            if (error) {
                throw error;
                return;
            }
            return callback(null, results[0])
        })
    },
    //Get only ambassadors by Id
    getAmbassadorById: (id, callback) => {
        dbConfig.query(`SELECT * FROM ambassador WHERE id = ?`, [id]
        ,(error, results) => {
            if (error) {
                throw error;
                return;
            }
            return callback(null, results[0])
        })
    },
    //update ambassadors by Id
    updateAmbassadorById: (data, id, callback) => {
        dbConfig.query(`UPDATE ambassador SET firstname = ?, lastname = ?, email = ?, telephone = ?,  
        address = ?  WHERE id = ?`, 
        [
            data.firstname,
            data.lastname,
            data.email,
            data.telephone,
            data.address,
            id
        ]
        ,(error, results) => {
            if (error) {
                throw error;
                return;
            }
            return callback(null, results)
        })
    },
    //Verify Account ambassadors by Id to (whatsapp verification, sms, email, otp)
    updateOTP: (data,telephone, callback) => {
        dbConfig.query(`UPDATE ambassador SET otp = ?  WHERE telephone = ?`, 
        [data, telephone]
        ,(error, results) => {
            if (error) {
                throw error;
            }
            return callback(null, results[0])
        })
    },
    //update otp to null
    resetOTP: (telephone, callback) => {
        dbConfig.query(`UPDATE ambassador SET isVerified=1, otp = null  WHERE telephone = ?`, 
        [telephone]
        ,(error, results) => {
            if (error) {
                throw error;
            }
            return callback(null, results[0])
        })
    },

    //Verify OTP CODE
   
    //Verify Account ambassadors by Id to (whatsapp verification, sms, email)
    //Get telehpne to ambassador by Id
getTelephoneByAmbassadorId: (id, callback) => {
        dbConfig.query(`SELECT * FROM ambassador WHERE id = ?`, [id]
        ,(error, results) => {
            if (error) {
                throw error;
                return;
            }
            return callback(null, results[0])
        })
},
//Create New Account to ambassador 
createNewAccountAmbassador: (data, callback) => {
    dbConfig.query(`INSERT INTO ambassador (firstname,lastname, email, telephone, address, password,
        role) values (?,?,?,?,?,?,'ambassadeur')`,[
            data.firstname,
            data.lastname,
            data.email,
            data.telephone,
            data.address,
            data.password
        ],(error, results) => {
            if (error) {
                throw error;
                return;
            }
            return callback(null, results)
        }
    );
},


    
    //Delete or Desactivated amabassador by Id
deleteAmbassadorById: (id, callback) => {
        dbConfig.query(`UPDATE ambassador SET isValidated = 0 WHERE id = ?`, [id]
        ,(error, results) => {
            if (error) {
                throw error;
                return;
            }
            return callback(null, results)
        })
    },
    //Change Password or forgot password
forgetPasswordAmbassadorById: (data,id, callback) => {
        dbConfig.query(`UPDATE ambassador SET password = ?  WHERE id = ?`, [data.password,id]
        ,(error, results) => {
            if (error) {
                throw error;
                return;
            }
            return callback(null, results)
        })
    },
    //Create new password ambassador
    
//STATISTIQUES
    //Get Total customers saved by ambassadorId
    getTotalCustomersInscrits : (id, callback) => {
        dbConfig.query(`SELECT count(c.id) as total FROM customers c, ambassador a WHERE c.ambassadorId = a.id AND a.id = ? AND c.status='Enregistrer'`, [id]
        ,(error, results) => {
            if (error) {
                throw error;
                return;
            }
            return callback(null, results)
        })
    },
    //Get Total customers Sign by ambassadorId
    getTotalCustomersSigner : (id,callback) => {
        dbConfig.query(`SELECT count(c.id) as total FROM customers c, ambassador a WHERE c.ambassadorId = a.id AND a.id = ? AND c.status='Signer'`, [id]
        ,(error, results) => {
            if (error) {
                throw error;
                return;
            }
            return callback(null, results)
        })
    },
    //Get Total customers Relaunch by ambassadorId
    getTotalCustomersRelancer : (id,callback) => {
        dbConfig.query(`SELECT count(c.id) as total FROM customers c, ambassador a WHERE c.ambassadorId = a.id AND a.id = ? AND c.status='Relancer'`, [id]
        ,(error, results) => {
            if (error) {
                throw error;
                return;
            }
            return callback(null, results)
        })
    },
    //Get Total customers Revoice by ambassadorId
    getTotalCustumersRevoquer : (id,callback) => {
        dbConfig.query(`SELECT count(c.id) as total FROM customers c, ambassador a WHERE c.ambassadorId = a.id AND a.id = ? AND c.status='Revoquer'`, [id]
        ,(error, results) => {
            if (error) {
                throw error;
                return;
            }
            return callback(null, results)
        })
    },
    //Get Revenue (amount or percent) for customers when status is completed (Signer)


    
} 