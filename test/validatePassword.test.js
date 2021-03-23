// node 12 and up
import chai from "chai"
import password from "../src/validatePassword.js"
const expect = chai.expect

describe("Validate Password length", () => {
    it("If password length is not between 5 and 10 return false", () =>{
        expect(password("ScientificPaper")).to.equal(false)
    });
    it("If password length is between 5 and 10 return true", () =>{
        expect(password("Scientific")).to.equal(true)
    });
})

