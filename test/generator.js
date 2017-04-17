var should = require('chai').should(), generator = require('../generator');

describe('#generator', function() {
  it('Produces a single name with 2 arguments', function() {
    generator('military', 'nato').split('\n').length.should.equal(1);
  });
  
  it('Produces a single name with 3 arguments', function() {
    generator('military', 'nato', 1).split('\n').length.should.equal(1);
  });
  
  it('Produces no names with 3 arguments', function() {
    generator('military', 'nato', -10).should.be.empty;
  });
  
  it('Produces no names with 4 arguments', function() {
    generator('military', 'nato', 0, 0).should.be.empty;
  });
  
  it('Produces a single name with 4 arguments', function() {
    generator('military', 'nato', 1, 0).split('\n').length.should.equal(1);
  });
  
  it('Produces ten names with 4 arguments', function() {
    generator('military', 'nato', 10, 0).split('\n').length.should.equal(10);
  });
  it('Returns different results without a seed', function() {
    const result = generator('military', 'nato', 10, 0);	  
    for(var i = 0; i < 1000; i++) {
      let temp = require('../generator');
	  if(temp('military', 'nato', 10, 0) != result) return true;
	}
	return false;
  });
  it('Returns the same result with a seed', function() {
    const result = generator('military', 'nato', 10, 0, "Hello, World!");	  
    for(var i = 0; i < 1000; i++) {
      let temp = require('../generator');
	  if(temp('military', 'nato', 10, 0, "Hello, World!") != result) return false;
	}
	return true;
  });
});
