window.ViewModel = (
		function(ko){
			
			var primeFactors = ko.observableArray(),
			number = ko.observable(),
			error = ko.observable(),
			factorClicked = ko.observable(false),
			getPrimeFactors = function(number){
				
				factorClicked(true);
				this.number(number);
				
				ajaxRequest('get','/factors',{'number':number})
					.done(getSucceeded)
					.fail(setError);						
			};
			
			function getSucceeded(data) {
				error(null);
				primeFactors(data);
			}
			
			function setError(){
				error('System error. Go take a lunch break and hope we fix it by the time you are done.');
			}
			
			function ajaxRequest(type, url, data, dataType) {
				var options = {
				dataType: dataType || "json",
				contentType: "application/json",
				cache: true,
				type: type,
				data: data};
				
				return $.ajax(url, options);
			}

			return {
				getPrimeFactors : getPrimeFactors,
				factorClicked : factorClicked,
				number : number,
				primeFactors : primeFactors,
				error : error
			};
			
		})(ko);

ko.applyBindings(window.ViewModel);
