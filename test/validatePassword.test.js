// node 12 and up
import chai from "chai"
import password from "../src/validatePassword.js"
const expect = chai.expect


describe("Validate Password length", () => {
    it("length of the password is between 5 and 10", () =>{
        expect(password("ScientificPaper")).to.equal(false)
    });
    it("Password length is not less than 5 or greater than 10", () =>{
        expect(password("Scientific")).to.equal(true)
    });
})

