var randomUserGeneratorAPI = "https://randomuser.me/api/";
var generatorOptions = {
	results: 12,
	nat: "us"
};
function generateProfile(profile) {
	var profileHTML = "<tr id='profiles'>";
    console.log(profile);
	$.each(profile.results, function(i, profile) {
		profileHTML += "<td class='profile-row'>";
		profileHTML += "<img src='"+ profile.picture.large +"' class='image'>";
		profileHTML += "<p id='userName'>"+ profile.name.first + ' ' + profile.name.last +"</p>";
		profileHTML += "<p id='email'>"+ profile.email +"</p>";
		profileHTML += "<p id='city'>"+ profile.location.city + "</p></li>";
		profileHTML += "</td>";
	}); //end each
	profileHTML += "</tr>";
	$("#profiles-board").html(profileHTML);
	
	var modalHTML = $("#modal-profile");
	$.each(profile.results, function(i, profile) {
		modalHTML += "<div class='modal'>";
		modalHTML += "<div class='modal-content'>";
		modalHTML += "<span class='close'>&times;</span></li>";
		modalHTML += "<img src='"+ profile.picture.large +"' class='modal-image'>";
		modalHTML += "<p id='user-modal-name'>"+ profile.name.first + ' ' + profile.name.last +"</p>";
		modalHTML += "<p id='username-modal'>"+ profile.login.username +"</p>";
		modalHTML += "<p id='email-modal'>"+ profile.email +"</p>";
		modalHTML += "<p id='city-modal'>"+ profile.location.city + "</p>";
		modalHTML += "<p id='tlf-modal'>"+ profile.cell + "</p>";
		modalHTML += "<p id='direction'>"+ profile.location.street + ', ' + profile.location.state + ' ' + profile.location.postcode + "</p>";
		modalHTML += "<p id='birthday'>"+ profile.dob +"</p>";
		modalHTML += "</div>";
		modalHTML += "</div>";
	}); //end each
	
	$("#modal-profile").append(modalHTML);
	
	loadScreen();
}

function modalProfile() {
	$(".modal").hide();
	$("#profiles td").click(function(e) {
		$(".modal:eq(" + $(this).index() + ")").show().addClass("active");
	}); //end click
}

function closeModal() {
	$(".close").click(function(e) {
		$(".modal").hide();
	}); //end click
}

/*function searchBar() {
	$("form").submit(function(e) {
		e.preventDefault();
		var searchResult = $("form input").val().toLowerCase();
		$(".profile-row").hide();
		if ( $('#userName:contains(' + searchResult + ')').length === 0 && $('#email:contains(' + searchResult + ')').length === 0 ) {
			$('table').append('<p class="no-match">No matches found.</p>');
		} 
		else if ($('#userName:contains(' + searchResult + ')').length > 0 || $('#email:contains(' + searchResult + ')').length > 0 ) { 
			$('#userName:contains(' + searchResult + ')').parents('.profile-row').show();
			$('#email:contains(' + searchResult + ')').parents('.profile-row').show();
		} 
		console.log(searchResult);
	})//end click
}*/

function loadScreen() {
	modalProfile();
	closeModal();
}

$.getJSON(randomUserGeneratorAPI, generatorOptions, generateProfile);

//searchBar();





