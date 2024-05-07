/*
    Rutas de eventos / Events 
    host + /api/events
*/

const { Router } = require("express");
const { check } = require("express-validator");
const { validarJWT } = require("../middlewares/validate-jwt");
const { validate } = require("../middlewares/validate");
const {
    getEvents,
    addEvent,
    updateEvent,
    deleteEvent,
} = require("../controllers/events");
const { isDate } = require("../helpers/isDate");

const router = Router();

// Todas tienen que pasar por la validación del JWT
router.use(validarJWT); //es lo mismo que ponerlo en cada una de las peticiones de abajo

router.get("/", getEvents);
router.post(
    "/",
    [
        check("title", "El título es obligatorio").not().isEmpty(),
        check("start", "La fecha de inicio es obligatoria").custom(isDate),
        check("end", "La fecha de finalización es obligatoria").custom(isDate),
        validate
    ],
    addEvent
);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);

module.exports = router;
