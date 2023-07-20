const jwt = require("jsonwebtoken");

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .trim()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

module.exports = {
  checkFieldsSignup: (req, res, next) => {
    //fields is empty
    if (!req.body) {
      return res.status(400).json({
        code: 400,
        message: "Les champs ne doivent pas être vides",
      });
    }
    //firstname is empty
    if (!req.body.firstname || req.body.firstname.length === "") {
      return res.status(400).json({
        code: 400,
        message: "Veuillez indiquer le prénom",
      });
    }
    //lastname is empty
    if (!req.body.lastname || req.body.lastname.length === "") {
      return res.status(400).json({
        code: 400,
        message: "Veuillez indiquer le nom",
      });
    }
    //Email verify
    if (!req.body.email || !validateEmail(req.body.email)) {
      return res.status(400).json({
        message: "Veuillez fournir une adresse email valide",
      });
    }

    //Role verify
    if (!req.body.role || req.body.lastname.length === "") {
        return res.status(400).json({
          message: "Veuillez indiquer le role",
        });
      }
      
    //phone is empty
    if (!req.body.telephone || req.body.telephone.length === "") {
      return res.status(400).json({
        code: 400,
        message: "Veuillez indiquer le numéro de téléphone",
      });
    }
    //phone is NaN
   /*  if (isNaN(req.body.telephone)) {
      return res.status(400).json({
        code: 400,
        message: "Le numero de téléphone doit etre numerique",
      }); 
    }*/

    // password min 6 characters
    if (!req.body.telephone || req.body.telephone.length <= 8) {
      return res.status(400).json({
        message: "Veuillez saisir un numéro de téléphone avec au moins 8 valeurs numériques.",
      });
    }
    //password repeat must match
   /*  if (!req.body.password_repeat ||req.body.password_repeat != req.body.password) 
      {
      return res.status(400).json({
        message: "Les deux mots de passe doivent correspondre",
      });
    } */
    // password min 6 characters
    if (!req.body.password || req.body.password.length < 6) {
      return res.status(400).json({
        message: "Veuillez saisir un mot de passe de 6 caractères minimum",
      });
    }
    next();
  },
  checkFieldsId: (req, res, next) => {
    if (isNaN(req.params.id) || !req.params.id) {
      return res.status(400).json({
        success: 0,
        message: "Please provide a valid id",
      });
    }
    next();
  },
  checkFieldsIsvalidated: (req, res, next) => {
    if (isNaN(req.params.id) || !req.params.id) {
      return res.status(400).json({
        success: 0,
        message: "Please provide a valid id",
      });
    }
    if (!req.body.isvalidated || req.body.isvalidated.length === "") {
        return res.status(400).json({
          success: 0,
          message: "Veuillez indiquer le champ à verifer",
        });
      }
    next();
  },
  checkFieldsupdateUsers: (req, res, next) => {
    if (!req.body.firstname || req.body.firstname.length === "") {
        return res.status(400).json({
          code: 400,
          message: "Veuillez indiquer le prénom",
        });
      }
      //lastname is empty
      if (!req.body.lastname || req.body.lastname.length === "") {
        return res.status(400).json({
          code: 400,
          message: "Veuillez indiquer le nom",
        });
      }
      //Email verify
      if (!req.body.email || !validateEmail(req.body.email)) {
        return res.status(400).json({
          message: "Veuillez fournir une adresse email valide",
        });
      }
    next();
  },
  checkFieldsIsVerified: (req, res, next) => {
    if (!req.body.is_verified || req.body.is_verified.length === "")
      return res.status(400).json({
        message: "Please provide a valid is_verifed content",
      });
    next();
  },
  checkFieldsType: (req, res, next) => {
    //fields is empty
    if (!req.body.type || req.body.type.length === "") {
      return res.status(400).json({
        code: 400,
        message: "Veuillez saisir le type de l'entreprise.",
      });
    }
    next();
  },
  checkFieldsProduct: (req, res, next) => {
    //fields is empty
    if (!req.body) {
      return res.status(400).json({
        code: 400,
        message: "Please fields can not be empty",
      });
    }
    if (!req.file || req.file === "") {
      return res.status(400).json({
        code: 400,
        message: "Please provide image product",
      });
    }
    if (req.file.size > 2097152) {
      return res.status(400).json({
        code: 400,
        message: "Image trop lourde < 2M ",
      });
    }

    if (!req.file.mimetype.startsWith("image")) {
      return res.status(400).json({
        code: 500,
        message: "Format non supporté",
      });
    }

    //name is empty
    if (!req.body.name || req.body.name.length === "") {
      return res.status(400).json({
        code: 400,
        message: "Please provide name value",
      });
    }
    //rating is empty
    if (!req.body.rating || req.body.rating.length === "") {
      return res.status(400).json({
        code: 400,
        message: "Please provide sub_categorie value",
      });
    }
    if (isNaN(req.body.rating)) {
      return res.status(400).json({
        code: 400,
        message: "Please provide rating value",
      });
    }
    //price is empty
    if (!req.body.price || req.body.price.length === "") {
      return res.status(400).json({
        code: 400,
        message: "Please provide price value",
      });
    }
    if (isNaN(req.body.price)) {
      return res.status(400).json({
        code: 400,
        message: "Please provide price value",
      });
    }
    //description is empty
    if (!req.body.description || req.body.description.length === "") {
      return res.status(400).json({
        code: 400,
        message: "Please provide description value",
      });
    }
    //date_peremption is empty
    if (!req.body.date_peremption || req.body.date_peremption.length === "") {
      return res.status(400).json({
        code: 400,
        message: "Please provide date peremption value",
      });
    }
    //in_stock is empty
    if (!req.body.in_stock || req.body.in_stock.length === "") {
      return res.status(400).json({
        code: 400,
        message: "Please provide in stock value",
      });
    }
    if (isNaN(req.body.in_stock)) {
      return res.status(400).json({
        code: 400,
        message: "Please provide in stock value",
      });
    }
    /* //categorie_id is empty
         if (!req.body.categorie_id ||  req.body.categorie_id.length === '') {
             return res.status(400).json({
                 code: 400,
                 message: 'Please provide categorie id value'
             })
         }*/
    next();
  },
  checkFieldsFieldCustomers : (req, res) => {
    //fields is empty
    if (!req.body) {
      return res.status(400).json({
        code: 400,
        message: "Les champs ne doivent pas être vides",
      });
    }
    //firstname is empty
    if (!req.body.firstname || req.body.firstname.length === "") {
      return res.status(400).json({
        code: 400,
        message: "Veuillez indiquer le prénom",
      });
    }
    //lastname is empty
    if (!req.body.lastname || req.body.lastname.length === "") {
      return res.status(400).json({
        code: 400,
        message: "Veuillez indiquer le nom",
      });
    }
     //Address is empty
     if (!req.body.address || req.body.address.length === "") {
      return res.status(400).json({
        code: 400,
        message: "Veuillez indiquer l'addresse",
      });
    }
    //Email verify
    if (!req.body.email || !validateEmail(req.body.email)) {
      return res.status(400).json({
        message: "Veuillez fournir une adresse email valide",
      });
    }
     //phone is empty
     if (!req.body.telephone || req.body.telephone.length === "") {
      return res.status(400).json({
        code: 400,
        message: "Veuillez indiquer le numéro de téléphone",
      });
    }
    next();
  },
  checkNewCustomersParticulierFields : (req, res) => {
    //fields is empty
    if (!req.body) {
      return res.status(400).json({
        code: 400,
        message: "Les champs ne doivent pas être vides",
      });
    }
    //firstname is empty
    if (!req.body.firstname || req.body.firstname.length === "") {
      return res.status(400).json({
        code: 400,
        message: "Veuillez indiquer le prénom",
      });
    }
    //lastname is empty
    if (!req.body.lastname || req.body.lastname.length === "") {
      return res.status(400).json({
        code: 400,
        message: "Veuillez indiquer le nom",
      });
    }
     //Address is empty
     if (!req.body.address || req.body.address.length === "") {
      return res.status(400).json({
        code: 400,
        message: "Veuillez indiquer l'addresse",
      });
    }
    //Email verify
    if (!req.body.email || !validateEmail(req.body.email)) {
      return res.status(400).json({
        message: "Veuillez fournir une adresse email valide",
      });
    }
     //phone is empty
     if (!req.body.telephone || req.body.telephone.length === "") {
      return res.status(400).json({
        code: 400,
        message: "Veuillez indiquer le numéro de téléphone",
      });
    }
    //ambassadorId is empty
    if (!req.body.ambassadorId || req.body.ambassadorId.length === "") {
      return res.status(400).json({
        code: 400,
        message: "Veuillez indiquer l'identifiant",
      });
    }
    next();
  },
  checkFieldsFieldCustomersEnterprise : (req, res) => {
    //fields is empty
    if (!req.body) {
      return res.status(400).json({
        code: 400,
        message: "Les champs ne doivent pas être vides",
      });
    }
    //firstname is empty
    if (!req.body.firstname || req.body.firstname.length === "") {
      return res.status(400).json({
        code: 400,
        message: "Veuillez indiquer le prénom",
      });
    }
    //lastname is empty
    if (!req.body.lastname || req.body.lastname.length === "") {
      return res.status(400).json({
        code: 400,
        message: "Veuillez indiquer le nom",
      });
    }
     //Address is empty
     if (!req.body.address || req.body.address.length === "") {
      return res.status(400).json({
        code: 400,
        message: "Veuillez indiquer l'addresse",
      });
    }
    //Email verify
    if (!req.body.email || !validateEmail(req.body.email)) {
      return res.status(400).json({
        message: "Veuillez fournir une adresse email valide",
      });
    }
     //phone is empty
     if (!req.body.telephone || req.body.telephone.length === "") {
      return res.status(400).json({
        code: 400,
        message: "Veuillez indiquer le numéro de téléphone",
      });
    }
     //managerName is empty
     if (!req.body.managerName || req.body.managerName.length === "") {
      return res.status(400).json({
        code: 400,
        message: "Veuillez indiquer le nom du gerant",
      });
    }
        //companyName is empty
        if (!req.body.companyName || req.body.companyName.length === "") {
          return res.status(400).json({
            code: 400,
            message: "Veuillez indiquer le nom de l'entreprise",
          });
        }
        //companyImage is empty
        if (req.file.size > 2097152) {
          return res.status(400).json({
            code: 400,
            message: "Image trop lourde < 2M ",
          });
        }
        if (!req.file.mimetype.startsWith("image")) {
          return res.status(400).json({
            code: 500,
            message: "Format non supporté",
          });
        }
    next();

  },
  checkFieldsOtp : (req, res) => {
    
     //otp is empty
     if (!req.body.otp || req.body.otp.length === "") {
      return res.status(400).json({
        code: 400,
        message: "Veuillez taper le code reçu par sms ",
      });
    }
    next();

  }
};