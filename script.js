$(document).ready(function(){
	var num = "";
	var operator = "";
	var total = $(".calc_screen").text();
	$(".calc_screen").text(0);
	var firstnum = "";
	var assignOperator = function(operation){
		if(firstnum === "" && total === ""){
			firstnum = num;
			num = "";
			$(".calc_screen").text("");
			operator = operation;
		}else if(firstnum === "" && total !== ""){
			firstnum = total; 
			total = "";
			num = "";
			$(".calc_screen").text("");
			operator = operation;
		}else{
			total = operator(firstnum,num);
			$(".calc_screen").text(total);
			num = "";
			firstnum = total;
			operator = operation;
		};
	};	
	
	$(".buttons").click(function(){
		if(firstnum === ""){
			total = "";
			num = num.concat($(this).html());
			$(".calc_screen").text(num); 
			parseFloat(num);	
		}else{
			num = num.concat($(this).html());
			$(".calc_screen").text(num); 
			parseFloat(num);
		}
	});

	$("#clear").click(function(){
		num = "";
		$(".calc_screen").text(0);
	});

	$("#clear_all").click(function(){
		$(".calc_screen").text(0);
		num = "";
		operator = "";
		firstnum = "";
	});

	$(".add").click(function(){
		var addition = function(num1,num2){
			return parseFloat(num1) + parseFloat(num2);
		}
		assignOperator(addition);		
	});

	$(".subtract").click(function(){
		var subtraction = function(num1,num2){
			return parseFloat(num1) - parseFloat(num2);
		}
		assignOperator(subtraction);		
	});

	$(".divide").click(function(){
		var division = function(num1,num2){
			return parseFloat(num1)/parseFloat(num2);	
		}
		assignOperator(division);		
	});

	$(".multiply").click(function(){
		var multiplication = function(num1,num2){
			return parseFloat(num1) * parseFloat(num2);
		}
		assignOperator(multiplication);		
	});

	$(".equal").click(function(){
		if(operator ===  "" && num === ""){
			$(".calc_screen").text("Error");
		}
		else if(operator ==="" && num !== ""){
			$(".calc_screen").text(num);
		}
		else{
			total = operator(firstnum,num);
			$(".calc_screen").text(total);
			operator = "";
			firstnum = "";
			num = "";
			}		
	});

	$(".power").click(function(){
		var exponent = function(num1,num2){
		return Math.pow(parseFloat(num1),parseFloat(num2));
		};
		assignOperator(exponent);		
	});

	$(".modulo").click(function(){
		var modulo = function(num1,num2){
			return parseFloat(num1)%parseFloat(num2);
		};
		assignOperator(modulo);		
	});

	$(".radical").click(function(){
		var radical = function(num1,num2){
			return Math.pow(parseFloat(num1),1/parseFloat(num2));
		};
		assignOperator(radical);		
	});

	$(".negative").click(function(){
		if(!num){
			$(".calc_screen").text("ERROR");
		}
		else{
			num = parseFloat(num)* -1;
			$(".calc_screen").text(num);
		};
	});

	$(".decimal").click(function(){
		num = num.concat(".");
		$(".calc_screen").text(num);
	});
});	

/*if(firstnum === ""){
			firstnum = num;
			num = "";
			$(".calc_screen").text("");
			operator = addition;
		}else{
			total = operator(firstnum,num);
			$(".calc_screen").text(total);
			num = "";
			firstnum = total;
			operator = addition;

		}	*/

		/*if(firstnum === ""){
			firstnum = num;
			num = "";
			$(".calc_screen").text("");
			operator = subtraction;
		}else{
			total = operator(firstnum,num);
			$(".calc_screen").text(total);
			num = "";
			firstnum = total;
			operator = subtraction;
		};*/

		/*	if(firstnum === ""){
			firstnum = num;
			num = "";
			$(".calc_screen").text("");
			operator = radical;
		}else{
			total = operator(firstnum,num);
			$(".calc_screen").text(total);
			num = "";
			firstnum = total;
			operator = radical;
		};*/
		/*if(firstnum === ""){
			firstnum = num;
			num = "";
			$(".calc_screen").text("");
			operator = exponent;
		}else{
			total = operator(firstnum,num);
			$(".calc_screen").text(total);
			num = "";
			firstnum = total;
			operator = exponent;
		};*/

		/*if(firstnum === ""){
			firstnum = num;
			num = "";
			$(".calc_screen").text("");
			operator = modulo;
		}else{
			total = operator(firstnum,num);
			$(".calc_screen").text(total);
			num = "";
			firstnum = total;
			operator = modulo;
		};*/

		/*if(firstnum === ""){
			firstnum = num;
			num = "";
			$(".calc_screen").text("");
			operator = multiplication;
		}else{
			total = operator(firstnum,num);
			$(".calc_screen").text(total);
			num = "";
			firstnum = total;
			operator = multiplication;
		};*/

		/*if(firstnum === ""){
			firstnum = num;
			num = "";
			$(".calc_screen").text("");
			operator = division;
		}else{
			total = operator(firstnum,num);
			$(".calc_screen").text(total);
			num = "";
			firstnum = total;
			operator = division;
		};*/