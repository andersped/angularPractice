app.filter('kebab', function() {
	return function(input){
		if (input === parseInt(input,10)){
			return input;
		} else{
		return input.replace(/_/g, "-");
	}
	};
});

app.filter('camel', function(){
	return function(input){
		if (input === parseInt(input,10)){
			return input;
		} else{
			// return input.replace(/_/g, "C");
			// return input.replace(/_|c/g, "C");
			return input.toLowerCase().replace(/_(.)/g, function(match, group1){
				return group1.toUpperCase();
			});

		}
	}
})

app.filter('pigLatin', function(){
	return function(input){
		if(input === parseInt(input,10)){
			return input;
		}else{
		var test = input.split("");
		var changeText = input.substring(1) + input.substring(0,1) + "ay";
		return changeText;
	}
	};
});

app.filter('redact', function(){
	return function(input, name){
		var inputString = input.split(" ");
		var redact = "REDACT"
		var correctWords = []
		
		for (i = 0; i < inputString.length; i++){
			if (inputString[i] != name){
				correctWords.push(inputString[i]);
				// return name;
			} else if (inputString[i] = name){
				correctWords.push(redact);
			}

		}
		return correctWords.join(" ");
	}
});


