$(document).ready(function(){
	var num = "";
	var operator = "";
	var total = $("#calc_screen").text();
	$("#calc_screen").text(0);
	var firstnum = "";
	
	$(".buttons").click(function(){
		total = 0;
		num = num.concat($(this).html());
		$("#calc_screen").text(num); 
	});
	$("#clear").click(function(){
		num = "";
		$("#calc_screen").text(0);
	});
	$("#clear_all").click(function(){
		$("#calc_screen").text(0);
		num = "";
		operator = "";
		firstnum = "";
	});

	$("#add").click(function(){
		var addition = function(num1,num2){
			return parseFloat(num1) + parseFloat(num2);
		}
		firstnum = num;
		num = "";
		$("#calc_screen").text("");
		operator = addition;
	});
	$("#subtract").click(function(){
		var subtraction = function(num1,num2){
			return parseFloat(num1) - parseFloat(num2);
		}
		firstnum = num;
		num = "";
		$("#calc_screen").text("");
		operator = subtraction;

	});
	$("#divide").click(function(){
		var division = function(num1,num2){
			return parseFloat(num1)/parseFloat(num2);	
		}
		firstnum = num;
		num = "";
		$("#calc_screen").text("");
		operator = division;
	});
	$("#multiply").click(function(){
		var multiplication = function(num1,num2){
			return parseFloat(num1) * parseFloat(num2);
		}
		firstnum = num;
		num = "";
		$("#calc_screen").text("");
		operator = multiplication;
	});
	$("#equal").click(function(){
		total = operator(firstnum,num)
		$("#calc_screen").text(total);
		operator = "";
		firstnum = "";
		num = String(total);
		total = "";
	});
	$("#power").click(function(){
		var exponent = function(num1,num2){
		return Math.pow(parseFloat(num1),parseFloat(num2));
		};
		firstnum = num;
		num = "";
		$("#calc_screen").text("");
		operator = exponent;
	});

	$("#modulus").click(function(){
		var modulus = function(num1,num2){
			return parseFloat(num1)%parseFloat(num2);
		}
		firstnum = num;
		num = "";
		$("#calc_screen").text("");
		operator=modulus;
	});

	$("#root").click(function(){
		var root = function(num1,num2){
			return Math.pow(parseFloat(num1),1/parseFloat(num2));
		}
		firstnum = num;
		num = "";
		$("#calc_screen").text("");
		operator=root;
	});

	$("#negative").click(function(){
		num = num * -1;
		$("#calc_screen").text(num);
	});

	$("#decimal").click(function(){
		num = num.concat(".");
		$("#calc_screen").text(num);
	});


	
	
});	


