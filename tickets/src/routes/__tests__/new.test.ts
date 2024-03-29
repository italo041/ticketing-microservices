import request from 'supertest'
import { app } from '../../app'

it('has a route handler listening to /api/tickets for post requests', async () => {
    const response = await request(app)
        .post('/api/tickets')
        .send({});

    expect(response.status).not.toEqual(404);
});

it('can only by accesed if the user is signed in', async () => {
    const response = await request(app)
        .post('/api/tickets')
        .send({})
        .expect(401);
});

it('return a status other than 401 if the user is signed in', async () => {
    const response = await request(app)
        .post('/api/tickets')
        .send({});

    expect(response.status).not.toEqual(401);
});

it('return an error if an invalid title is provided', async () => {

});

it('return an error if an invalid price is provided', async () => {

});

it('has a route handler listening to /api/tickets for post requests', async () => {

});

it('hcreate a ticket with valid inputs', async () => {

});