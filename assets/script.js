fetch("https://dcdn.dstn.to/profile/398101340322136075")
  .then((response) => response.json())
  .then((data) => {
    var discordtext = document.getElementById("discordtext");
    discordtext.innerHTML =
      "<span class='h4 text-white whitney'>" +
      data.user.username +
      "</span><span class='h4 text-white-50 whitney'>#" +
      data.user.discriminator +
      "</span>";

    document
      .getElementById("buttoncopystandard")
      .addEventListener("click", copyToClickBoard);
    var buttoncopystandard = document.getElementById("buttoncopystandard");
    var buttoncopydiv = document.getElementById("buttoncopy");
    var copyText = data.user.username + "#" + data.user.discriminator;

    function copyToClickBoard() {
      navigator.clipboard
        .writeText(copyText)
        .then(() => {
          buttoncopystandard.style.display = "none";
          buttoncopydiv.innerHTML =
            "<span class='text-white bi bi-clipboard-check-fill'></span>";
        })
        .catch((err) => {
          console.log("Something went wrong", err);
          buttoncopystandard.style.display = "none";
          buttoncopydiv.innerHTML =
            "<span class='text-white bi bi-clipboard-x-fill'></span>";
        });
    }
  });

fetch("https://api.lanyard.rest/v1/users/398101340322136075")
  .then((response) => response.json())
  .then((data) => {
    var status = document.getElementById("pfpstatus");
      switch (data.data.discord_status) {
      case "online":
        return status.style.background = "#43b581"
      case "idle":
        return status.style.background = "#faa61a"
      case "dnd":
        return status.style.background = "#f04747"
      default:
        return status.style.background = "#747f8d"
    }
  });