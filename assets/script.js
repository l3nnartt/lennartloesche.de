$.getJSON("https://dcdn.dstn.to/profile/398101340322136075", function (data) {
	var discordtext = document.getElementById("discordtext");
	discordtext.innerHTML =
		"<span class='h4 text-white whitney'>" +
		data.user.username +
		"</span><span class='h4 text-white-50 whitney'>#" +
		data.user.discriminator +
		"</span>";
});
