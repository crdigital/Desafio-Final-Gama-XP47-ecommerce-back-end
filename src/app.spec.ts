import request  from 'supertest';
import {describe, expect, test, it} from '@jest/globals';
import app from './app';

describe("Testando rotas", () =>  {    
    it("Rota main tem propriedade 'message'", async () =>  {
        const res = await request(app.server).get('/');
        expect(res.body).toHaveProperty('message');
    }),
    it("Rota '/usuario' requer token de autorização", async () =>  {
        const res = await request(app.server).get('/usuario');
        expect(res.status).toBe(401);
    })
});

