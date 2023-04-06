/* eslint-disable import/no-extraneous-dependencies */
const request = require('supertest');
const {
  beforeEach, afterEach, describe, it,
} = require('@jest/globals');
const app = require('../../api/index');
require('dotenv').config();

let server;
beforeEach(() => {
  const porta = process.env.PORT || 3000;
  server = app.listen(porta);
});

afterEach(() => {
  server.close();
});

describe('Testando as rotas de tutores', () => {
  it('GET na rota  /tutores que deve retorna todos os tutores ', async () => {
    await request(app)
      .get('/tutores')
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  });
});

let idResposta;
describe('POST em /tutor', () => {
  it('Deve criar um novo tutor', async () => {
    const resposta = await request(app)
      .post('/tutor')
      .send({
        nome: 'Jorge Meireles',
        email: 'jorgeantoniomeireles@gmail.com',
        senha: '123456',
      })
      .expect(200);
    idResposta = resposta.body.id;
  });

  it('Não deve ter o body vázio', async () => {
    await request(app)
      .post('/tutor')
      .send({})
      .expect(400);
  });
});

describe('GET em /tutor/:id', () => {
  it('Deve  um tutor', async () => {
    await request(app)
      .get(`/tutor/${idResposta}`)
      .expect(200);
  });
});

describe('PUT em /tutor/:id', () => {
  it('Deve atualizar um tutor', async () => {
    await request(app)
      .put(`/tutor/${idResposta}`)
      .send({
        nome: 'Jorge Antônio',
        email: 'jorgeantoniomeireles@gmail.com',
        senha: '123456',
      })
      .expect(200);
  });
});

describe('DELETE em /tutor/:id', () => {
  it('Deve apagar um tutor', async () => {
    await request(app)
      .delete(`/tutor/${idResposta}`)
      .expect(200);
  });
});
