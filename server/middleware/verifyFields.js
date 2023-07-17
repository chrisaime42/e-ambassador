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
  checkFieldsDrone: (req, res, next) => {
    //fields is empty
    if (!req.body) {
      return res.status(400).json({
        code: 400,
        message: "Please fields can not be empty",
      });
    }
    //tag is empty
    if (!req.body.tag || req.body.tag.length === "") {
      return res.status(400).json({
        code: 400,
        message: "Please provide tag value",
      });
    }
    next();
  },
  checkFieldsDroneCoordinate: (req, res, next) => {
    //latitude is empty
    if (!req.body.latitude || req.body.latitude.length === "") {
      return res.status(400).json({
        code: 400,
        message: "Please provide latitude coordinate",
      });
    }
    //longitude is empty
    if (!req.body.longitude || req.body.longitude.length === "") {
      return res.status(400).json({
        code: 400,
        message: "Please provide longitude coordinate",
      });
    }
    next();
  },
  checkFieldsDroneTypeId: (req, res, next) => {
    //drone_type_id is empty
    if (!req.body.drone_type_id || req.body.drone_type_id.length === "") {
      return res.status(400).json({
        code: 400,
        message: "Please provide drone type id value",
      });
    }
  },
  checkFieldsCustomersType: (req, res, next) => {
    //fields is empty
    if (!req.body) {
      return res.status(400).json({
        code: 400,
        message: "Please fields can not be empty",
      });
    }
    //name is empty
    if (!req.body.name || req.body.name.length === "") {
      return res.status(400).json({
        code: 400,
        message: "Please provide name value",
      });
    }
    next();
  },
  checkFieldsCustomers: (req, res, next) => {
    //fields is empty
    if (!req.body) {
      return res.status(400).json({
        code: 400,
        message: "Please fields can not be empty",
      });
    }
    //store_name is empty
    if (!req.body.store_name || req.body.store_name.length === "") {
      return res.status(400).json({
        code: 400,
        message: "Please provide store name value",
      });
    }
    //store_contact is empty
    if (!req.body.store_contact || req.body.store_contact.length === "") {
      return res.status(400).json({
        code: 400,
        message: "Please provide store contact value",
      });
    }
    //store_phone is empty
    if (!req.body.store_phone || req.body.store_phone.length === "") {
      return res.status(400).json({
        code: 400,
        message: "Please provide store phone value",
      });
    }
    //owner_fullname is empty
    if (!req.body.owner_fullname || req.body.owner_fullname.length === "") {
      return res.status(400).json({
        code: 400,
        message: "Please provide owner fullname value",
      });
    }
    //owner_address is empty
    if (!req.body.owner_address || req.body.owner_address.length === "") {
      return res.status(400).json({
        code: 400,
        message: "Please provide owner address value",
      });
    }
    //Email verify
    if (!req.body.email || !validateEmail(req.body.email)) {
      return res.status(400).json({
        message: "Please provide a valid email address",
      });
    }
    //username is empty
    if (!req.body.username || req.body.username.length === "") {
      return res.status(400).json({
        code: 400,
        message: "Please provide username value",
      });
    }
    // username min 4 characters
    if (!req.body.username || req.body.username.length <= 3) {
      return res.status(400).json({
        message: "Please enter a username with min. 4 characters",
      });
    }

    // password min 6 characters
    if (!req.body.store_phone || req.body.store_phone.length <= 8) {
      return res.status(400).json({
        message: "Please enter a store phone with min. 8 numeric values",
      });
    }
    //password repeat must match
    if (
      !req.body.password_repeat ||
      req.body.password_repeat != req.body.password
    ) {
      return res.status(400).json({
        message: "Please Both password must match",
      });
    }
    // password min 6 characters
    if (!req.body.password || req.body.password.length < 6) {
      return res.status(400).json({
        message: "Please enter a password with min. 6 characters",
      });
    }

    next();
  },
  checkFieldsCustomersUpdate: (req, res, next) => {
    //fields is empty
    if (!req.body) {
      return res.status(400).json({
        code: 400,
        message: "Please fields can not be empty",
      });
    }
    //store_name is empty
    if (!req.body.store_name || req.body.store_name.length === "") {
      return res.status(400).json({
        code: 400,
        message: "Please provide store name value",
      });
    }
    //store_contact is empty
    if (!req.body.store_contact || req.body.store_contact.length === "") {
      return res.status(400).json({
        code: 400,
        message: "Please provide store contact value",
      });
    }
    //store_phone is empty
    if (!req.body.store_phone || req.body.store_phone.length === "") {
      return res.status(400).json({
        code: 400,
        message: "Please provide store phone value",
      });
    }
    //owner_fullname is empty
    if (!req.body.owner_fullname || req.body.owner_fullname.length === "") {
      return res.status(400).json({
        code: 400,
        message: "Please provide owner fullname value",
      });
    }
    //owner_address is empty
    if (!req.body.owner_address || req.body.owner_address.length === "") {
      return res.status(400).json({
        code: 400,
        message: "Please provide owner address value",
      });
    }
    //Email verify
    if (!req.body.email || !validateEmail(req.body.email)) {
      return res.status(400).json({
        message: "Please provide a valid email address",
      });
    }
    //username is empty
    if (!req.body.username || req.body.username.length === "") {
      return res.status(400).json({
        code: 400,
        message: "Please provide username value",
      });
    }
    // username min 4 characters
    if (!req.body.username || req.body.username.length <= 3) {
      return res.status(400).json({
        message: "Please enter a username with min. 4 characters",
      });
    }

    // password min 6 characters
    if (!req.body.store_phone || req.body.store_phone.length <= 8) {
      return res.status(400).json({
        message: "Please enter a store phone with min. 8 numeric values",
      });
    }

    // password min 6 characters
    if (!req.body.password || req.body.password.length < 6) {
      return res.status(400).json({
        message: "Please enter a password with min. 6 characters",
      });
    }

    next();
  },
  validatePaymentMethod: (req, res, next) => {
    //name is empty
    if (!req.body.name || req.body.name.length === "") {
      return res.status(400).json({
        code: 400,
        message: "Please provide a payment method name",
      });
    }
    //name is empty
    if (!req.body.type || req.body.type.length === "") {
      return res.status(400).json({
        code: 400,
        message: "Please provide a payment method type",
      });
    }

    next();
  },
};