//Require the dev-dependencies
let chai = require("chai");
let chaiHttp = require("chai-http");
let should = chai.should();

const app = require("../app");

chai.use(chaiHttp);
//Our parent block
describe("Users", () => {
  /*
   * Test the /GET route
   */
  describe("/GET User List", () => {
    it("it should GET all the Users", (done) => {
      chai
        .request(app)
        .get("/users/userList")
        .query({ limit: 10, offset: 0 })
        .end((err, res) => {
          console.log(err);
          res.should.have.status(200);
          res.body.should.be.a("array");
          done();
        });
    });

    it("it should GET all the Users with default limit and offset value", (done) => {
      chai
        .request(app)
        .get("/users/userList")
        .query({ limit: "", offset: "" })
        .end((err, res) => {
          console.log(err);
          res.should.have.status(200);
          res.body.should.be.a("array");
          done();
        });
    });
  });

  /*
   * Test the /GET route
   */
  describe("/GET Friends List", () => {
    it("it should GET all Friends for requested User", (done) => {
      chai
        .request(app)
        .get("/users/friends/1")
        .query({ limit: 10, offset: 0 })
        .end((err, res) => {
          console.log(err);
          res.should.have.status(200);
          res.body.should.be.a("array");
          done();
        });
    });

    it("it should GET all the Users with default limit and offset value", (done) => {
      chai
        .request(app)
        .get("/users/friends/1")
        .query({ limit: "", offset: "" })
        .end((err, res) => {
          console.log(err);
          res.should.have.status(200);
          res.body.should.be.a("array");
          done();
        });
    });

    // it.skip('User Id not mentioned in the request it should give request Not Found error(404)', (done) => {
    //   chai.request(app)
    //       .get('/users/friends/')
    //       .end((err, res) => {
    //         console.log(err)
    //         res.should.have.status(404);
    //         done();
    //       });
    // });
  });
});
