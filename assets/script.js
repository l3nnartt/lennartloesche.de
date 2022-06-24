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

    var accountsdiv = document.getElementById("accountsdiv");
    var accountLink = "";
    let value = '';
    let colorvalue = '';

    var socialMedia = [
      {
        YouTube: {
          url: "https://www.youtube.com/channel/",
          color: "#de1f1f"
        },
        Spotify: {
          url: "https://open.spotify.com/user/",
          color: "#1DB954"
        },
        Twitch: {
          url: "https://www.twitch.tv/",
          color: "#6441a5"
        },
        Twitter: {
          url: "https://twitter.com/",
          color: "#1DA1F2"
        },
        Steam: {
          url: "https://steamcommunity.com/profiles/",
          color: "#0b6498"
        },
        GitHub: {
          url: "https://github.com/",
          color: "#FFF"
        },
        Reddit: {
          url: "https://www.reddit.com/user/",
          color: "#FF5700"
        }
      }
    ]

    data.connected_accounts.forEach((accounts) => {

      if (accounts.type === "youtube") {
        accountLink = socialMedia[0].YouTube.url + accounts.id;
        colorvalue = socialMedia[0].YouTube.color;
      }

      if (accounts.type === "twitter") {
        accountLink = socialMedia[0].Twitter.url + accounts.name;
        colorvalue = socialMedia[0].Twitter.color;
      }

      if (accounts.type === "twitch") {
        accountLink = socialMedia[0].Twitch.url + accounts.name;
        colorvalue = socialMedia[0].Twitch.color;
      }

      if (accounts.type === "github") {
        accountLink = socialMedia[0].GitHub.url + accounts.name;
        colorvalue = socialMedia[0].GitHub.color;
      }

      if (accounts.type === "reddit") {
        accountLink = socialMedia[0].Reddit.url + accounts.id;
        colorvalue = socialMedia[0].Reddit.color;
      }

      if (accounts.type === "spotify") {
        accountLink = socialMedia[0].Spotify.url + accounts.id;
        colorvalue = socialMedia[0].Spotify.color;
      }

      if (accounts.type === "steam") {
        accountLink = socialMedia[0].Steam.url + accounts.id;
        colorvalue = socialMedia[0].Steam.color;
      }

      value += "<a href=" + accountLink + " target='_blank' class='mx-2' style='color: " + colorvalue + " !important'><i class='bi bi-" + accounts.type + "'></i></a>";
    });
    accountsdiv.innerHTML = value;
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