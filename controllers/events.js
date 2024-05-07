const getEvents = (req, res) => {
    res.json({
        ok: true,
        message: "GET Events",
    });
};
const addEvent = (req, res) => {
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
    deleteEvent
};
