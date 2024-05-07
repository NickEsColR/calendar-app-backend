const {response} = require("express");
const User = require("../models/User");

const createUser = async(req, res) => {
    // const { name, email, password } = req.body;

    try{
        const user = new User(req.body);
        await user.save();
    
        res.status(201).json({
            ok: true,
            msg: "registro",
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
