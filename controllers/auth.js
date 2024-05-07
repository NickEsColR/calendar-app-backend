const {response} = require("express");
const bcrypt = require("bcryptjs");

const User = require("../models/User");
const { generateJWT } = require("../helpers/jwt");
const { validateJWT } = require("../middlewares/validate-jwt");

const createUser = async(req, res) => {
    const { email, password } = req.body;

    try{
        let user = await User.findOne({ email });

        if (user){
            return res.status(400).json({
                ok: false,
                msg: "Un usuario existe con ese correo",
            });
        }

        user = new User(req.body);

        //Encript password
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, salt);

        await user.save();

        //Generate JWT
        const token = await generateJWT(user.id, user.name);
    
        res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name,
            token,
        });
    }catch (error){
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Por favor hable con el administrador",
        });
    }
};

const loginUser = async(req, res) => {
    const { email, password } = req.body;

    try{
        const user = await User.findOne({ email });

        if (!user){
            return res.status(400).json({
                ok: false,
                msg: "El usuario no existe con ese correo",
            });
        }

        //Confirm password
        const isValidPassword = bcrypt.compareSync(password, user.password);
        if(!isValidPassword){
            return res.status(400).json({
                ok: false,
                msg: "Password incorrecto",
            });
        }

        //Generate JWT
        const token = await generateJWT(user.id, user.name);

        res.json({
            ok: true,
            uid: user.id,
            name: user.name,
            token,
        });
    }catch (error){
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Por favor hable con el administrador",
        });
    }
};

const renewToken = async(req, res) => {
    const {uid, name} = req;


    //Generate JWT
    const token = await generateJWT(uid, name);

    res.json({
        ok: true,
        token
    });
};

module.exports = {
    createUser,
    loginUser,
    renewToken,
};
