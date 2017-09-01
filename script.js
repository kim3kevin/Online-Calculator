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
			return parseInt(num1) + parseInt(num2);
		}
		firstnum = num;
		num = "";
		$("#calc_screen").text(0);
		operator = addition;
	});
	$("#subtract").click(function(){
		var subtraction = function(num1,num2){
			return parseInt(num1) - parseInt(num2);
		}
		firstnum = num;
		num = "";
		$("#calc_screen").text(0);
		operator = subtraction;

	});
	$("#divide").click(function(){
		var division = function(num1,num2){
			return parseInt(num1)/parseInt(num2);	
		}
		firstnum = num;
		num = "";
		$("#calc_screen").text(0);
		operator = division;
	});
	$("#multiply").click(function(){
		var multiplication = function(num1,num2){
			return parseInt(num1) * parseInt(num2);
		}
		firstnum = num;
		num = "";
		$("#calc_screen").text(0);
		operator = multiplication;
	});
	$("#equal").click(function(){
		total = operator(firstnum,num)
		$("#calc_screen").text(total);
		operator = "";
		firstnum = "";
		num = "";
		})
});	




/*var screenText = $("#calc_screen").text();
	$(".buttons").click(function(){
		var buttonText = $(this).text();
		if(screenText = ''){
			$("#calc_screen").text(function(){	
			return buttonText;
		});
		}else{
			return buttonText;
	}
});
});



$(document).ready(function(){
	$("#clear").click(function(){
		var display = ""
		$("#calc_screen").text(function(){
			return display;
		})
	})
})

$(document).ready(function(){
	$("#clear_all").click(function(){
		var display = ""
		$('#calc_screen').text(function(){
			return display;
		})
	})
})

		*/