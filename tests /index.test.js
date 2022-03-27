const expect = require('expect')
const request = require('supertest')
const app = require('../index')
const Todo = require('../models/todo_schema')

beforeEach((done)=> {
  Todo.deleteMany().then(()=>done())

})

describe ('Post api/todo', ()=>
  {
    it('should create new todo', (done)=> {
      const text = 'test todo'
      request(app).post('/api/todo/').send({
        text
      }).expect(200).expect(res=> {
        expect(res.body.text).toBe(text)
      }).end((err, res)=> {
        if (err) {
          return done(err)
        }
        Todo.find().then((tos)=> {

          expect(tos.length()).toBe(1)
          expect(tos[0].text).toBe(text)
        }).catch(e=> {
          done(e)
        })
      })
    })
  })