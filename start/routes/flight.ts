import FlightController from "../../app/controller/FlightController.js";
import router from "@adonisjs/core/services/router";

const flight = new FlightController();

router.post('/dorado/flight', flight.createFlight);
router.get('/dorado/flight', flight.readFlight);
router.get('/dorado/infoflights', flight.infoFlight);
router.put('/dorado/vuelos/editar/:id', flight.updateFlight);