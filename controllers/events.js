const Event = require("../models/Event");

const getEvents = async(req, res) => {
    const events = await Event.find().populate("user", "name");
    res.json({
        ok: true,
        events
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
