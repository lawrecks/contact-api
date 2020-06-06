import chai from "chai";
import chaiHttp from "chai-http";
import server from "../../index";
import contactSeeder from '../database/seeders/contactSeeder';
import { ugo, daisy } from "./__mock_data__";
const should = chai.should();

chai.use(chaiHttp);

let id;
before(contactSeeder.emptyUserTable);


describe("Contact Controller", () => {
    it("should Create New Contact", done => {
    chai
        .request(server)
        .post("/api/v1/contacts")
        .send(ugo)
        .end((err, res) => {
            id = res.body.contact.id;
            res.should.have.status(201);
            res.body.should.be.a("object");
            res.body.should.have.property("success");
            res.body.should.have.property("contact");
            done();
        });
    });
    it("should Return 400 for incomplete contact fname", done => {
        chai
        .request(server)
        .post("/api/v1/contacts")
        .send(daisy)
        .end((err, res) => {
            res.should.have.status(400);
            res.body.should.have.property("error");
            done();
        });
    });
    it("should Update created contact", done => {
        chai
        .request(server)
        .put(`/api/v1/contacts/${id}`)
        .send(ugo)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            res.body.should.have.property("success");
            res.body.should.have.property("contact");
            done();
        });
    });

    it("should get all created contacts", done => {
        chai
        .request(server)
        .get("/api/v1/contacts")
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            res.body.should.have.property("success");
            res.body.should.have.property("contacts");
            done();
        });
    });

    it("should Return 400 for invalid id for deletion", done => {
        chai
        .request(server)
        .delete("/api/v1/contacts/a")
        .end((err, res) => {
            res.should.have.status(400);
            res.body.should.have.property("error");
            done();
        });
    });

    it("should delete created contact", done => {
        chai
        .request(server)
        .delete(`/api/v1/contacts/${id}`)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            res.body.should.have.property("success");
            done();
        });
    });
});