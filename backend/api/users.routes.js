import express from "express"
import UsersCtrl from "./users.controller.js"

const router = express.Router()

router.route("/").get(UsersCtrl.apiGetUsers)

router
    .route("/user")
    .post(UsersCtrl.apiPostUsers)
    .put(UsersCtrl.apiUpdateUsers)
    .delete(UsersCtrl.apiDeleteUsers)

export default router