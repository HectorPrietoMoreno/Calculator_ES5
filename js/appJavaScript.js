// Get all the keys from document
var keys = document.querySelectorAll('#calculator span');
var operators = ['+', '-', 'x', '÷'];
var decimalAdded = false;
var input = document.querySelector('.screen');;
var inputVal;
var btnVal;
var equation;

// Add onclick event to all the keys and perform operations
for(var i = 0; i < keys.length; i++) {
	keys[i].onclick = function() {
		// Get the input and button values
		inputVal = input.innerHTML;
		btnVal = this.innerHTML;
		
		// Reset values
		if(btnVal == 'C') 
		{
			input.innerHTML = '';
			decimalAdded = false;
		}
		
		// Calculate the operation
		else if(btnVal == '=')
		{
			calculateResult(input);
		}

		// Avoid multiple operator but allow a negative number in the second number.
		else if((operators.indexOf(btnVal) > -1) && (operators.indexOf(input.innerHTML[input.innerHTML.length - 1]) > -1)){
			if ((operators.indexOf(input.innerHTML[input.innerHTML.length - 1]) !== 1) && (operators.indexOf(btnVal) == 1)){
				input.innerHTML += btnVal;
			}
		}
		// Add to the equation in screen
		else {
			input.innerHTML += btnVal;
		}

	} 
}
var calculateResult = function(){
	equation = inputVal;
	var lastChar = equation[equation.length - 1];
	
	if (equation.includes('x')){
		equation = equation.replace(/x/, '*');
	}
	if (equation.includes('÷')){
		equation = equation.replace(/÷/, '/');
	}
	if(equation !== ''){
		input.innerHTML = eval(equation);
	}
}