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
const updateEvent = async(req, res) => {
    const eventId = req.params.id;
    const uid = req.uid;

    try{
        const event = await Event.findById(eventId);
        if(!event){
            return res.status(404).json({
                ok: false,
                message: "Event not found",
            });
        }

        if(event.user.toString() !== uid){
            return res.status(401).json({
                ok: false,
                message: "You do not have the necessary permissions",
            });
        }

        const newEvent = {
            ...req.body,
            user: uid,
        };

        const updatedEvent = await Event.findByIdAndUpdate(eventId, newEvent, {new: true});

        res.json({
            ok: true,
            event: updatedEvent,
        });
    }catch(error){
        console.log(error);
        res.status(500).json({
            ok: false,
            message: "Please contact the administrator",
        });
    }
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
