import request from "supertest"
import { AppDataSource } from "../src/data-source"
import { User } from "../src/entity/User"
import { app } from "../src"

export const validUser = {
    fullName: "Litmus Zhang",
    email: "Zhang@gmail.com",
    password: "Zhang1234"
}
export const validUserRequest = async (user = validUser) => {
    return request(app).post("/api/v1/users").send(user)
}
describe("User Registration", () => {
    beforeAll(() => {
        return AppDataSource.initialize()
    })
    beforeEach(() => {
        return AppDataSource.getRepository(User).clear()
    })

    it("Should create user and return  201 Created ", async () => {
        const res = await validUserRequest()

        expect(res.status).toBe(201);
        expect(res.body.message).toBe("User Created successfully")
    })

    it("should hash the password", async () => {
        const res = await validUserRequest()
        const user = await AppDataSource.getRepository(User).find()
        expect(user[0].password).not.toBe(validUser.password)
    })

})
