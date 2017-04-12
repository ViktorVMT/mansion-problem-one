window.onload = function() {
	$(document).on("click", "#continueRegistration", function(event){
	    $('#formOne').hide();
	    $('#formTwo').show();
	});
	$(document).on("click", "#skipRegistration", function(event){
		window.location.href = "http://www.casino.com/"; 
	});
	$("input").on({
		keydown: function(e) {
			if (e.which === 32)
			{
				return false;
			}
		},
		change: function() {
			this.value = this.value.replace(/\s/g, "");
		}
	});
	$(document).on("click", "#playNow", function(event){
	    window.location.href = "http://www.casino.com/casino-games/"; 
	});
	$(document).on("click", "#goToPromotions", function(event){
	    window.location.href = "http://www.casino.com/promotions/"; 
	});
	$('.collapse-button .btn').on('click', function(e) {
		e.preventDefault();
		var $this = $(this);
		var $collapse = $this.closest('.collapse-group').find('.collapse');
		$collapse.collapse('toggle');
	});

	document.getElementById('formOne').onsubmit = function() {
		var checkedBox = document.getElementById("checkboxOne").checked;
		if (checkedBox === false) {
			alert("You must agree to the Terms and Conditions on this site.");
			return false;
		}
		var password1 = document.getElementById("inputPassword1").value;
		var password2 = document.getElementById("inputPassword2").value;
		if (password1 !== password2) {
			alert("Both password fields must match.");
			return false;
		}
		$('#myModalOne').modal('show');
		return false;
	};

	document.getElementById('formTwo').onsubmit = function() {
		var checkedBox = document.getElementById("checkboxTwo").checked;
		if (checkedBox === false) {
			alert("You must agree to the Terms and Conditions on this site.");
			return false;
		}
		$('#myModalTwo').modal('show');
		return false;
	};
};