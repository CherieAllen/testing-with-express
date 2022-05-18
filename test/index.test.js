import request from "supertest";
import app from "../index.js"

request(app)

describe("Getting pets from API", () => {
    it("should return all the pets I loved before"), async () => {
        //arrange
        const endpoint = "/pets"
        expectedResponse ="All the pets"


        //act
        const actual = await request.get(endpoint)
        

        //assert
        expect(actual.status).toBe(200)
        expect(actual.error).toBeFalsy()
        expect(actual.text).toContain(expectedResponse)
    }
})