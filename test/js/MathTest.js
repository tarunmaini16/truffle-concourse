var Math = artifacts.require("Math");

contract('Math', function(accounts) {
    it("should return 0 for add", function() {
      return Math.deployed().then(function(instance) {
        return instance.add();
      }).then(function(result) {
        assert.equal(result, 0, "The result was not 0");
      });
    });

    it("should return 1 for add", function() {
        return Math.deployed().then(function(instance) {
            math = instance;
            return math.seta(1);
        }).then(function(){
            return math.add()    
        }).then(function(result) {
            assert.equal(result, 1, "The result will be 1");
        });
      });

      it("should return 1 for add", function() {
        return Math.deployed().then(function(instance) {
            math = instance;
            return math.seta(2);
        }).then(function() {
            return math.setb(1);
        }).then(function(){
            return math.add();    
        }).then(function(result) {
            assert.equal(result, 3, "The result will be 3");
        }).then(function(){
            return math.sub();    
        }).then(function(result) {
            assert.equal(result, 1, "The result will be 1");
        })
      });
});