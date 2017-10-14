$("#add-reservation").on("click", function() {
	var Reservation = {
		name: $("#name-input").val().trim(),
		number: $("#number-input").val().trim(),
		email: $("#email-input").val().trim(),
		id: $("#id-input").val().trim()
	};
	var URL = window.location.origin;
	$.post
});