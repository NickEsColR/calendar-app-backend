const {response} = require("express");
const bcrypt = require("bcryptjs");

const User = require("../models/User");

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
    
        res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name,
        });
    }catch (error){
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Por favor hable con el administrador",
        });
    }
};

const loginUser = (req, res) => {
    const { email, password } = req.body;

    res.json({
        ok: true,
        msg: "login",
    });
};

const renewToken = (req, res) => {
    const { email, password } = req.body;

    res.json({
        ok: true,
        msg: "renew",
    });
};

module.exports = {
    createUser,
    loginUser,
    renewToken,
};
