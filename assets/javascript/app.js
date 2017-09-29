// // Create a button to begin play
// //Create a timer to countdown remaining time
// // Populate with questions, each question having 1 correct response and three incorrect responses
// //Questions can only have one response
// //Track correct, incorrect and unanswered questions
// //When timer runs out or user clicks "done", results are displayed (Correct, incorrect, unanswered)

 // Variables
 var count = 60;
 var correctCount = 0;
 var wrongCount = 0;
 var unansweredCount = 0;

 // //Functions


 $(document).ready(function(){

 	$("#mid_game_container").hide();
 	$("#end_container").hide();
 	window.scrollTo(0, 500);
 	$("#start_button").on("click", function(){
 		$("#start_container").hide();
		// Show the Game Div
		$("#mid_game_container").show();
		var ballgameAudio = $("#ballgame")[0];
		ballgameAudio.play();
		ballgameAudio.addEventListener('ended', function() {
			this.currentTime = 0;
			this.play();
		}, false);
		ballgameAudio.play();


		startCountdown();
		return;

	});


	// Counts down and displays the time to the user
	function countdown(){
		count--;
		$('#timer_number').html(count + " Seconds");
		$("#done_button").on("click", function(){
			count = 0; 
			return;

		});

		if(count == -1){
			timeUp();
			$("#mid_game_container").hide();
		}
	}


	function startCountdown(){
		setInterval(countdown, 1000);
	}

	function timeUp(){
		var Q1 = $('input:radio[name="q1"]:checked').val();
		var Q2 = $('input:radio[name="q2"]:checked').val();
		var Q3 = $('input:radio[name="q3"]:checked').val();
		var Q4 = $('input:radio[name="q4"]:checked').val();
		var Q5 = $('input:radio[name="q5"]:checked').val();
		var Q6 = $('input:radio[name="q6"]:checked').val();
		var Q7 = $('input:radio[name="q7"]:checked').val();
		var Q8 = $('input:radio[name="q8"]:checked').val();
		var Q9 = $('input:radio[name="q9"]:checked').val();
		var Q10 = $('input:radio[name="q10"]:checked').val();
		if(Q1 == undefined){
			unansweredCount++;
		}
		else if(Q1 == "Albert Almora"){
			correctCount++;
		}
		else{
			wrongCount++;
		}
		if(Q2 == undefined){
			unansweredCount++;
		}
		else if(Q2 == "Tigers"){
			correctCount++;
		}
		else{
			wrongCount++;
		}

		if(Q3 == undefined){
			unansweredCount++;
		}
		else if(Q3 == "ten"){
			correctCount++;
		}
		else{
			wrongCount++;
		}

		if(Q4 == undefined){
			unansweredCount++;
		}
		else if(Q4 == "Mark Grace"){
			correctCount++;
		}
		else{
			wrongCount++;
		}

		if(Q5 == undefined){
			unansweredCount++;
		}
		else if(Q5 == "Charlie Root"){
			correctCount++;
		}
		else{
			wrongCount++;
		}

		if(Q6 == undefined){
			unansweredCount++;
		}
		else if(Q6 == "Cap Anson"){
			correctCount++;
		}
		else{
			wrongCount++;
		}

		if(Q7 == undefined){
			unansweredCount++;
		}
		else if(Q7 == "Kerry Wood"){
			correctCount++;
		}
		else{
			wrongCount++;
		}

		if(Q8 == undefined){
			unansweredCount++;
		}
		else if(Q8 == "Anthony Rizzo"){
			correctCount++;
		}
		else{
			wrongCount++;
		}

		if(Q9 == undefined){
			unansweredCount++;
		}
		else if(Q9 == "twelve"){
			correctCount++;
		}
		else{
			wrongCount++;
		}

		if(Q10 == undefined){
			unansweredCount++;
		}
		else if(Q10 == "three"){
			correctCount++;
		}
		else{
			wrongCount++;
		}

		$('#correct_answers').html(correctCount);
		$('#wrong_answers').html(wrongCount);
		$('#unanswered').html(unansweredCount);
		$("#end_container").show();
		window.scrollTo(0, 550);
	}

});
