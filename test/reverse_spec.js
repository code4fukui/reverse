var helper = require("node-red-node-test-helper");
var reverseNode = require("../reverse.js");

describe('reverse Node', function () {
  afterEach(function () {
    helper.unload();
  });
  it('should be loaded', function (done) {
    var flow = [{ id: "n1", type: "reverse", name: "test name" }];
    helper.load(reverseNode, flow, function () {
/*
      var n1 = helper.getNode("n1");
      n1.should.have.property('name', 'eman tset');
      done();
      */
    });
  });
/*
  it('should make payload lower case', function (done) {
    var flow = [{ id: "n1", type: "reverse", name: "test name",wires:[["n2"]] },
    { id: "n2", type: "helper" }];
    helper.load(reverseNode, flow, function () {
      var n2 = helper.getNode("n2");
      var n1 = helper.getNode("n1");
      n2.on("input", function (msg) {
        msg.should.have.property('payload', 'uppercase');
        done();
      });
      n1.receive({ payload: "UpperCase" });
    });
  });
*/
});
