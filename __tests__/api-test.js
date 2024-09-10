import request from "supertest";
import app from "../server.js";
import {expect, test, beforeAll} from "@jest/globals";
// import {PrismaClient} from "@prisma/client"

beforeAll(async()=>{
    let response = await request(app).post('/api/v1/users').send({
        "username": "Roland-One",
        "password": "34464646",
        "email": "one@email.com"
    }).set('Accept', 'application/json')

    expect(response.status).toBe(201)
})


test('get array of users from the user endpoint', async function(){
    let response = await request(app).get('/api/v1/users/?results=5')
    expect(response.status).toBe(200)
})