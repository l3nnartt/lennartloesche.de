$.getJSON("https://dcdn.dstn.to/profile/398101340322136075", function (data) {
	var discordtext = document.getElementById("discordtext");
	var profilepicture = document.getElementById("discordprofilepic");
	var discordbanner = document.getElementById("discordbanner");

	discordtext.innerHTML =
		"<span class='h4 text-white whitney'>" +
		data.user.username +
		"</span><span class='h4 text-white-50 whitney'>#" +
		data.user.discriminator +
		"</span>";
	profilepicture.innerHTML =
		"<img src='https://cdn.discordapp.com/avatars/398101340322136075/" +
		data.user.avatar +
		".webp' class='w-100 rounded-circle' draggable='false' alt='Lennart Profile Picture' />";
	discordbanner.innerHTML =
		"<img src='https://cdn.discordapp.com/banners/398101340322136075/" +
		data.user.banner +
		".jpg?size=1280' draggable='false' alt='Profile Banner' />";
});
