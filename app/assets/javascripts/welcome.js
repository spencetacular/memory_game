$(document).ready(function(){

	var firstNumberClicked;
	var secondNumberClicked;
	var ticker =0;
	var matchesFoundTicker = 0;

	var myArray = ['1','1','1','1','2','2','2',
			'2','3','3','3','3','4','4','4','4'];

	populateBoard();

	function shuffle(o){
    for(var j, x, i = o.length; i; j = 
    Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
	}

	function populateBoard(){
		shuffle(myArray);
		$('.boxes').each(function(){
			$(this).children(0).html(myArray.pop());
			$(this).children(0).addClass('hide_text');
			$(this).children(0).removeClass('matched');
		});
		matchesFoundTicker = 0;
	}

	function clickTracker(){
		if (ticker <2) {
			ticker++;
		} else{
			ticker = 0;
		}
		console.log("clickTracker:" + ticker);
	};

	//check if box has already been clicked
	function isShowing(number_class){
		if (number_class != 'hide_text') {
			alert("This one is already showing");
			return false;

		}else{
			return true;
		}
	}

	function checkCompleted(){
		if (matchesFoundTicker >= 8) {
			alert('You Win!!!!');
			populateBoard();
		};

	}

	function checkMatch(num1,num2){
		if (num1 == num2) {
		
				$('.boxes').each(function(){
					var currentClass = $(this).children(0).attr('class');
					if (currentClass != 'hide_text') {
						$(this).children(0).addClass('matched');
					};

				});
				
				alert("Match!");
				//this should be moved
				clickTracker();
				matchesFoundTicker++;
				return true;

		} else{

				alert("Not A Match");

			$('.boxes').each(function(){
					var currentClass = $(this).children(0).attr('class');
					if (currentClass != 'hide_text' && currentClass != 'matched') {
						$(this).children(0).addClass('hide_text');
					};

				});
				//this should be moved
				clickTracker();
				return false;
		};
	}

	$('.boxes').click(function(){

		var currentClass = $(this).children(0).attr('class');
			if (isShowing(currentClass) ){
				$(this).children(0).toggleClass('hide_text');
				clickTracker();
			};

		 if (ticker == 1) {
		 	firstNumberClicked = $(this).children(0).html();
		};

		if (ticker == 2) {
		 	secondNumberClicked = $(this).children(0).html();

		 	checkMatch(firstNumberClicked, secondNumberClicked);
		 	checkCompleted();
		};

	})

});

