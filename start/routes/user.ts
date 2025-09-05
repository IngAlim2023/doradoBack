import router from "@adonisjs/core/services/router";
import UserController from "../../app/controller/UserController.js";

const user = new UserController();

router.post('/dorado/user', user.createUser)
router.post('/dorado/login', user.login)
router.get('/dorado/logout', user.logout)
router.get('/dorado/validate', user.validate)