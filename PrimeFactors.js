function PrimeFactors(number){	
	
	function isPrime(n){
		if(n < 2)
			return false;
			
		for(var i=2;i<n;i++){
			if(n%i === 0 && n != i)
				return false;
		}
		
		return true;
	}
		
	var returnArray = [];
	
	if(isNaN(number)){
		return returnArray;
	}
	
	function GetFactors(factor){
		
		if(isPrime(factor)){
			returnArray[returnArray.length] = factor;
			return;
		}

		for(var j=2;j<factor;j++){
			if(factor % j === 0 && isPrime(j)){
				returnArray[returnArray.length] = j;
				return GetFactors(factor/j);
			}
		}
	}
	
	GetFactors(number);
		
	return returnArray;
}

exports.PrimeFactors = PrimeFactors;