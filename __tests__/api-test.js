import request from "supertest";
import app from "../server.js";
import {expect, test} from "@jest/globals";

test('get array of users from the user endpoint', async function(){
    let response = await request(app).get('/api/v1/users/?results=3')
    expect(response.status).toBe(200)
})