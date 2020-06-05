import chai from "chai";
import chaiHttp from "chai-http";
import server from "../../index";

const should = chai.should();

chai.use(chaiHttp);

describe("ContactController", () => {
    it("should create new contact", done => {
        const contact = {
            name : "Ugo"
        };
        contact.should.have.property("name");
        done();
    })
})
