import request from "supertest";
import { AppDataSource } from "../src/data-source";
import { Key } from "../src/entity/Key";
import { app } from "../src";


describe("Key ", () => {
    beforeEach(() => {
        return AppDataSource.getRepository(Key).clear()
    })

    const createKey = async () => {
        return request(app).post("/api/v1/keys/");
    }
    it("should create a key and 200 Ok", async () => {
        const res = await createKey()
        expect(res.status).toBe(201)
        expect(res.body.message).toBe("Key generated successfully")
    })
    // it("should get all key", async () => {
    //     await createKey()
    //     const keys = keyRepository.count()
    //     expect(keys).toBe(1)
    // })
    // it("should get a single key", async () => {
    //     await createKey()
    //     const key = await keyRepository.find()
    //     const { id } = key[0]
    //     const res = await request(app).get(`/api/v1/:userid/keys/${id}`)
    //     expect(res).toBeDefined()
    //     expect(res.status).toBe(200)
    // })
    // it("delete a single key", async () => {
    //     await createKey()
    //     const key = await keyRepository.find()
    //     const { id } = key[0]

    //     const res = await request(app).delete("/api/v1/:userid/keys/:id")
    //     expect(res).toBeDefined()
    //     expect(res.status).toBe(200)

    // })
    // it("should delete all keys", async () => {
    //     await createKey()
    //     await createKey()

    //     const keys = keyRepository.find()
    //     expect(keys).toBe(2)
    //     const res = await request(app).delete("/api/v1/:userid/keys/")
    //     expect(res.statusCode).toBe(200)
    //     expect(res.body.message).toBe("All keys deleted")
    // })
})