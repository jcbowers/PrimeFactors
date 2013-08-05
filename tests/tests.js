var assert = require("assert");
var model = require("../PrimeFactors");

describe('Negitive', function(){
	it('Negitive numbers cannot have prime factors', function(){
		  var primes = model.PrimeFactors(-12);
		  
		  assert.equal(0, primes.length);
	});
});

describe('Zero', function(){
	it('0 should have no prime factors', function(){
		  var primes = model.PrimeFactors(0);
		  
		  assert.equal(0, primes.length);
	});
});

describe('One', function(){
	it('1 should have no prime factors', function(){
		  var primes = model.PrimeFactors(0);
		  
		  assert.equal(0, primes.length);
	});
});


describe('Prime', function(){
	it('The only prime factor of a prime should be itself', function(){
		  var primes = model.PrimeFactors(11);
		  
		  assert.equal(1, primes.length);
		  assert.equal(11, primes[0]);
	});
});

describe('Single prime factor', function(){
	it('2 is the only prime factor of 32', function(){
		  var primes = model.PrimeFactors(32);
		  
		  assert.equal(5, primes.length);
		  
		  for(i=0;i<primes.length;i++){
			assert.equal(2, primes[i]);
		  }
	});
});

describe('Multiple prime factors', function(){
	it('2,3 and 5 are prime facctors of 30', function(){
		  var primes = model.PrimeFactors(30);
		  
		  assert.equal(3, primes.length);
		  assert.equal(2, primes[0]);
		  assert.equal(3, primes[1]);
		  assert.equal(5, primes[2]);
	});
});

describe('Non numeric', function(){
	it('Non numeric input should return empty result', function(){
		  var primes = model.PrimeFactors('foobar');
		  
		  assert.equal(0, primes.length);
	});
});