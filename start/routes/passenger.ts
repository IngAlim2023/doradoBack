import PassengerController from "../../app/controller/PassengerController.js";
import router from "@adonisjs/core/services/router";

const passenger = new PassengerController()


router.post('/dorado/passenger', passenger.createPassenger)
router.get('/dorado/passenger', passenger.readPassengers)
router.get('/dorado/passenger/:codvuelo', passenger.readPassengersByFlight)
router.delete('/dorado/passenger/:id', passenger.detelePassengers)