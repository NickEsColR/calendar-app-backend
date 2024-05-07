const Event = require("../models/Event");

const getEvents = (req, res) => {
    res.json({
        ok: true,
        message: "GET Events",
    });
};
const addEvent = async (req, res) => {
    const event = new Event(req.body);

    try {
        event.user = req.uid;
        const savedEvent = await event.save();

        res.json({
            ok: true,
            event: savedEvent,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: "Please contact the administrator",
        });
    }
    res.json({
        ok: true,
        message: "POST Event",
    });
};
const updateEvent = (req, res) => {
    res.json({
        ok: true,
        message: "PUT Event",
    });
};
const deleteEvent = (req, res) => {
    res.json({
        ok: true,
        message: "DELTE Events",
    });
};

module.exports = {
    getEvents,
    addEvent,
    updateEvent,
    deleteEvent,
};
