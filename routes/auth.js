/*
    Rutas de usuarios / Auth 
    host + /api/auth
*/

const { Router } = require("express");
const router = Router();
const { check } = require("express-validator");

const { createUser, loginUser, renewToken } = require("../controllers/auth");

router.post(
    "/new",
    [
        //middlewares
        check("name", "El nombre es obligatorio").not().isEmpty(),
        check("email", "Agrega un email válido").isEmail(),
        check("password", "El password debe ser de 6 caracteres").isLength({
            min: 6,
        }),
    ],
    createUser
);

router.post(
    "/",
    [
        check("email", "Agrega un email válido").isEmail(),
        check("password", "El password debe ser de 6 caracteres").isLength({
            min: 6,
        }),
    ],
    loginUser
);

router.get(
    "/renew",
    [
        check("email", "Agrega un email válido").isEmail(),
        check("password", "El password debe ser de 6 caracteres").isLength({
            min: 6,
        }),
    ],
    renewToken
);

module.exports = router;
