const express = require("express");

const createUser = (req, res) => {
    const { name, email, password } = req.body;

    res.status(201).json({
        ok: true,
        msg: "registro",
        name,
        email,
        password,
    });
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
