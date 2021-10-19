import usersDAO from "../dao/usersDAO.js";
import mongodb from "mongodb"
const ObjectId = mongodb.ObjectId

export default class UsersController {
    static async apiGetUsers(req, res, next) {
        const usersPerPage = req.query.usersPerPage ? parseInt(req.query.usersPerPage, 10) : 20
        const page = req.query.page ? parseInt(req.query.page, 10) : 0

        let filters = {}
        if (req.query.name) {
            filters.name = req.query.name
        }

        const { usersList, totalNumUsers } = await usersDAO.getUsers({
            filters,
            page,
            usersPerPage
        })
        let response = {
            users: usersList,
            page: page,
            filters: filters,
            entries_per_page: usersPerPage,
            total_results: totalNumUsers,
        }
        res.json(response)
    }

    static async apiPostUsers(req, res, next) {
        try {
            const userId = req.body.user_id
            const name = req.body.name
            const password = req.body.password

            const userResponse = await usersDAO.addUser(
                userId,
                name,
                password
            )
            res.json({ status: "success" })
        } catch (e) {
            res.status(500).json({ error: e.message })
        }
    }

    static async apiUpdateUsers(req, res, next) {
        try {
            const userId = req.body.user_id
            const name = req.body.name
            const password = req.body.password

            const userResponse = await usersDAO.updateUser(
                req.body.user_id,
                userId,
                name,
                password
            )

            var { error } = userResponse
            if (error) {
                res.status(400).json({ error })
            }
            if (userResponse.modifiedCount === 0) {
                throw new Error(
                    "unable to update user"
                )
            }
            res.json({ status: "success" })
        } catch (e) {
            res.status(500).json({ error: e.message })
        }
    }

    static async apiDeleteUsers(req, res, next) {
        try {
            const userId = req.body.user_id
            console.log(userId)
            const userResponse = await usersDAO.deleteUser(
                userId
            )
            res.json({ status: "success" })
        } catch (e) {
            res.status(500).json({ error: e.message })
        }
    }
}