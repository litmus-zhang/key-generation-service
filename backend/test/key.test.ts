import request from "supertest";
import { AppDataSource } from "../src/data-source";
import { Key } from "../src/entity/Key";
import { app } from "../src";


describe("Key ", () => {

    
    it("should create a key and 201 Created", async () => {
        const res = await request(app).post("/api/v1/keys");
        expect(res.status).toBe(201);
        expect(res.body.message).toBe("Key generated successfully")
    })
})