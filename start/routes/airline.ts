import AirlineController from "../../app/controller/AirlineController.js";
import router from "@adonisjs/core/services/router";


const air = new AirlineController();

router.get('/dorado/airline', air.readAir)