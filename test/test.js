
var supertest = require("supertest");
var should = require("should");

//This agent refers to PORT where the program is running.

var server = supertest.agent("http://localhost:4000");

//UNIT test begin

describe("SAMPLE UNIT TEST ", function(){
	// #1 should return home page
	it("should return home page", function(done){
		// calling home page
		console.log('Sample test 5');
		server.get("/")
		.expect("content-type", /text/)
		.expect(200) // http response
		.end(function(err, res){
			res.status.should.equal(200);
			done();
		});
	});
	
});