import request from "supertest"
import { AppDataSource } from "../src/data-source"
import { User } from "../src/entity/User"
import { app } from "../src"

describe("User Registration", () => {
    beforeAll(() => {
        return AppDataSource.initialize()
    })
    beforeEach(() => {
        return AppDataSource.getRepository(User).clear()
    })
    const validUser = {
        firstname: "Litmus",
        lastname: "Zhang",
        password: "Zhang1234"
    }
    const validUserRequest = async (user = validUser) => {
        return request(app).post("/api/v1/users").send(user)
    }
    it("Should create user and return  200 Ok ", async () => {
        const res = await validUserRequest()

        expect(res.status).toBe(200);
        expect(res.body.message).toBe("User Created successfully")
    })

})

