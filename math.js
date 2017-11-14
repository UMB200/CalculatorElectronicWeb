// //全てを選択するくquerySelectorAllに使用している。select all from form using queryselect
// var digits = document.querySelectorAll('#mainFrame span');
// //演算子を定義する。 define operators
// var mathOperators = ['+', '-', '*', '/'];
// //decimal value
// var decimalValue = false;

// //loop through all keys entered
// for (var i = 0; i < digits.length; i++) {
// 	//おんくりっく行事を追加する。add onclick event to digits
// 	digits[i].onclick = function (el) {
// 		var pressedKey = document.querySelector('#resultBox');
// 		var pressedValue = pressedKey.innerHTML;
// 		var equivOfButton = this.innerHTML;

// 		//if C button is pressed clear screen
// 		if(equivOfButton == 'C'){
// 			pressedKey.innerHTML = '';
// 			decimalValue = false;
// 		}

// 		//if equal button is pressed, command operations
// 		else if(equivOfButton == '='){
// 			// 方程式に演算子を追加する　append math operation
// 			var mathOperation = pressedValue; 
// 			//文字列の終わりを目的　aim the end of string
// 			var lastDigit = mathOperation[mathOperation.length - 1]; 
// 		}
// 		if(mathOperation){
// 			pressedKey.innerHTML = eval(mathOperation);
// 			decimalValue = false;
// 		}
		

// 	//二つ演算子は禁止 no 2 operators in a row
// 	if(mathOperators.indexOf(equivOfButton) > -1){
// 		//最終の演算子を貰うlast math operator only
// 		var lastKey = pressedValue[pressedValue.length -1];
// 		//check if entry is empty 

// 		//演算子が入力値時に追加する。Add operator only if entered value is not empty
// 		if (pressedValue != '' && mathOperators.indexOf(lastKey) == -1) {
// 			pressedKey.innerHTML +=equivOfButton;
// 		}
// 		//空の文字列時にマイナス演算子が許す。Minus is allowed if string is blank
// 		else if (pressedValue == '' && equivOfButton == '-') {
// 			pressedKey.innerHTML +=equivOfButton;
// 		}
// 		//もし新演算子があれば最後の演算子を置き換える. If new math operation is pressed change it to the last one
// 		if(mathOperators.indexOf(lastKey) > -1 && pressedValue.length > 1){
// 			pressedKey.innerHTML = pressedValue.replace(/.$/, equivOfButton);
// 		}
// 		decimalValue = false;
// 	}
// }

// //キーボード機能性　keyboard functionality
// document.onkeydown = function(event) {

// 	var keyValue = String.fromCharCode(event.keyCode);
// 	var keyInd = event.keyCode;
// 	var pressedKey = document.querySelector('#resultBox');
// 	var pressedValue = pressedKey.innerHTML;
// 	var equivOfButton = this.innerHTML; 
// 	var lastKey = pressedValue[pressedValue.length -1];
// 	var mathOperation = pressedValue;

	

// 	if(keyValue == 1){
// 		pressedValue.innerHTML +=keyValue;
// 	}
// 	if(keyValue == 2){
// 		pressedValue.innerHTML +=keyValue;
// 	}
// 	if(keyValue == 3){
// 		pressedValue.innerHTML +=keyValue;
// 	}
// 	if(keyValue == 4){
// 		pressedValue.innerHTML +=keyValue;
// 	}
// 	if(keyValue == 5){
// 		pressedValue.innerHTML +=keyValue;
// 	}
// 	if(keyValue == 6){
// 		pressedValue.innerHTML +=keyValue;
// 	}
// 	if(keyValue == 7){
// 		pressedValue.innerHTML +=keyValue;
// 	}
// 	if(keyValue == 8){
// 		pressedValue.innerHTML +=keyValue;
// 	}
// 	if(keyValue == 9){
// 		pressedValue.innerHTML +=keyValue;
// 	}
// 	if(keyValue == 0){
// 		pressedValue.innerHTML +=keyValue;
// 	}

// 	//capture operators and prevent from adding 2 oprators
// 	if((pressedValue != '' && mathOperators.indexOf(lastKey) == -1 && keyInd == 187 
// 		&& event.shiftKey) 
// 		|| (keyInd = 107)
// 		|| (keyInd == 61 && event.shiftKey)){
// 		document.querySelector('#resultBox').innerHTML +='+';
// }	
// }
//最初の能力値を除去remove the last entered digit
function removeLast(){
	var	value  = document.getElementById('resultBox').value;
	document.getElementById('resultBox').value = value.substr(0, value.length - 1);
}
function squareRoot(){
	var value = document.getElementById('resultBox').value;
	document.getElementById('resultBox').value = Math.sqrt(value);
}
