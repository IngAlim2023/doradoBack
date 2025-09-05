import DestinationController from "../../app/controller/DestinationController.js";
import router from "@adonisjs/core/services/router";

const destination = new DestinationController();

router.get('/dorado/destinos', destination.readDestination);