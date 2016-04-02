"use strict"

const should = require('should')
const request = require('../index')

describe('Request', () => {
    it('should return promise for GET requests (using main function)', function (done) {
        this.enableTimeouts(false)
        
        request('http://jsonplaceholder.typicode.com/posts/1', { json: true }).then((res) => {
            res.should.be.instanceof(Array)
            res.should.have.property('length', 2)
            res[0].should.have.property('statusCode', 200)
            res[0].body.should.not.be.empty()
            res[0].body.should.have.property('id', 1)
            
            done()
        }).catch(done)
    })
    
    it('should return promise for GET requests (using main.get function)', function (done) {
        this.enableTimeouts(false)
        
        request.get('http://jsonplaceholder.typicode.com/posts/1', { json: true }).then((res) => {
            res.should.be.instanceof(Array)
            res.should.have.property('length', 2)
            res[0].should.have.property('statusCode', 200)            
            res[0].body.should.not.be.empty()
            res[0].body.should.have.property('id', 1)
            
            done()
        }).catch(done)
    })
    
    it('should return promise for POST requests (using main.post function)', function (done) {
        this.enableTimeouts(false)
        
        let newPost = {
            userId: 1,
            id: 1,
            title: 'test',
            body: 'Test!'
        }
        
        request.post('http://jsonplaceholder.typicode.com/posts', { json: newPost }).then((res) => {
            res.should.be.instanceof(Array)
            res.should.have.property('length', 2)
            res[0].should.have.property('statusCode', 201)
            res[0].body.should.not.be.empty()
            res[0].body.should.eql(newPost)
            
            done()
        }).catch(done)
    })
    
    it('should return promise for DELETE requests (using main.del function)', function (done) {
        this.enableTimeouts(false)
        
        request.del('http://jsonplaceholder.typicode.com/posts/1').then((res) => {
            res.should.be.instanceof(Array)
            res.should.have.property('length', 2)
            res[0].should.have.property('statusCode', 200)
            
            done()
        }).catch(done)
    })
})