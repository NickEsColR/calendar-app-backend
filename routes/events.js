/*
    Rutas de eventos / Events 
    host + /api/events
*/

const { Router } = require("express");
const { validarJWT } = require("../middlewares/validate-jwt");
const { getEvents,addEvent,updateEvent,deleteEvent } = require("../controllers/events");

const router = Router();

// Todas tienen que pasar por la validación del JWT
router.use(validarJWT); //es lo mismo que ponerlo en cada una de las peticiones de abajo

router.get("/",getEvents);
router.post("/", addEvent);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);

module.exports = router;