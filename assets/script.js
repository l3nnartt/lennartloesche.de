const discordUserId = "398101340322136075";

const realLifeName = "Lennart";
const introduceText = "Hey there! My name is " + realLifeName + "!";
const subText =
  "I'm a still-learning developer from Germany, actively interested in evolving more and more.";
const impressumLink = "https://lennartloesche.de/impressum.html";
const privacyLink = "https://lennartloesche.de/datenschutz.html";

const phoneIconStatus =
  "https://cdn.discordapp.com/attachments/822443641908756580/991361379426652180/Ebene_1.png";
const activitiesIframeUrl =
  "https://lanyard-visualizer.netlify.app/user/" +
  discordUserId +
  "?mode=iframe&title=false&background=false";

const spotifyMessage = "Listening to Spotify";
const gameMessage = "Playing a Game";
const noGameMessage = "About me";

lanyard({
  userId: discordUserId,
  socket: true,
  onPresenceUpdate: (data) => {
    var status = document.getElementById("pfpstatus");
    var discordprofilepic = document.getElementById("discordprofilepic");
    var discordbanner = document.getElementById("discordbanner");
    var discordtext = document.getElementById("discordtext");
    var buttoncopystandard = document.getElementById("buttoncopystandard");
    var buttoncopydiv = document.getElementById("buttoncopy");
    var copyText =
      data.discord_user.username + "#" + data.discord_user.discriminator;
    var activities = document.getElementById("activities");

    // show mobile icon if active on mobile device
    if (data.active_on_discord_mobile) {
      status.innerHTML =
        "<img src=" + phoneIconStatus + " class='imagephone'></img>";
    }

    // load discord profile picture of api
    discordprofilepic.innerHTML =
      "<img src='https://cdn.discordapp.com/avatars/" +
      discordUserId +
      "/" +
      data.discord_user.avatar +
      ".webp?size=128' class='w-100 rounded-circle' draggable='false' alt='" +
      realLifeName +
      "Profile Picture'/>";

    // load discord banner picture of api
    discordbanner.innerHTML =
      "<img src='https://dcdn.dstn.to/banners/" +
      discordUserId +
      "?size=1280' draggable='false' alt='Profile Banner' />";

    // load discord username and tag of api
    discordtext.innerHTML =
      "<span class='h4 text-white whitney'>" +
      data.discord_user.username +
      "</span><span class='h4 text-white-50 whitney'>#" +
      data.discord_user.discriminator +
      "</span>";

    // copy button
    document;
    buttoncopystandard.addEventListener("click", copyToClickBoard);

    function copyToClickBoard() {
      navigator.clipboard
        .writeText(copyText)
        .then(() => {
          buttoncopystandard.style.display = "none";
          buttoncopydiv.innerHTML =
            "<span class='text-white bi bi-clipboard-check-fill'></span>";
        })
        .catch((err) => {
          buttoncopystandard.style.display = "none";
          buttoncopydiv.innerHTML =
            "<span class='text-white bi bi-clipboard-x-fill'></span>";
        });
    }

    // show discord rich presence if activity is started; show normal about me message if no activity is started
    if (data.activities != "" && data.listening_to_spotify) {
      activities.innerHTML =
        "<div class='text-white-50 one ms-lg-2'><p class='fw-bold text-uppercase spacing-spotify'>" +
        spotifyMessage +
        "</p></div><iframe class='iframe-spotify' src=" +
        activitiesIframeUrl +
        "></iframe>";
    } else if (data.activities != "" && !data.listening_to_spotify) {
      activities.innerHTML =
        "<div class='text-white-50 one ms-lg-2'><p class='fw-bold text-uppercase spacing-game'>" +
        gameMessage +
        "</p></div><iframe class='iframe-spotify iframe-game' src=" +
        activitiesIframeUrl +
        "></iframe>";
    } else {
      activities.innerHTML =
        "<div class='text-white-50 one ms-lg-2'><p class='fw-bold text-uppercase spacing'>" +
        noGameMessage +
        "</p><p><div>" +
        introduceText +
        "</div><div>" +
        subText +
        "</div></p><span class='h6 user-select-none'><a href='" +
        impressumLink +
        "'>Impressum</a> - <a href='" +
        privacyLink +
        "'>Datenschutz</a></span></div>";
    }

    // discord status (online, idle, dnd, offline)
    switch (data.discord_status) {
      case "online":
        return (status.style.background = "#43b581");
      case "idle":
        return (status.style.background = "#faa61a");
      case "dnd":
        return (status.style.background = "#f04747");
      default:
        return (status.style.background = "#747f8d");
    }
  },
});

fetch("https://dcdn.dstn.to/profile/" + discordUserId)
  .then((response) => response.json())
  .then((data) => {
    var accountsdiv = document.getElementById("accountsdiv");
    var accountLink = "";
    var value = "";

    // social media url and color
    var socialMedia = [
      {
        github: {
          name: "github",
          username: "name",
          url: "https://github.com/",
          color: "#FFF",
          icon: "github",
          classes: "mx-2",
        },
        spotify: {
          name: "spotify",
          username: "id",
          url: "https://open.spotify.com/user/",
          color: "#1DB954",
          icon: "spotify",
          classes: "mx-2",
        },
        steam: {
          name: "steam",
          username: "id",
          url: "https://steamcommunity.com/profiles/",
          color: "#0b6498",
          icon: "steam",
          classes: "mx-2",
        },
        twitch: {
          name: "twitch",
          username: "name",
          url: "https://www.twitch.tv/",
          color: "#6441a5",
          icon: "twitch",
          classes: "mx-2",
        },
        twitter: {
          name: "twitter",
          username: "name",
          url: "https://twitter.com/",
          color: "#1DA1F2",
          icon: "twitter",
          classes: "mx-2",
        },
        youtube: {
          name: "youtube",
          username: "id",
          url: "https://www.youtube.com/channel/",
          color: "#de1f1f",
          icon: "youtube",
          classes: "mx-2",
        },
        reddit: {
          name: "reddit",
          username: "name",
          url: "https://www.reddit.com/user/",
          color: "#FF5700",
          icon: "reddit",
          classes: "mx-2",
        },
        battlenet: {
          name: "battlenet",
          username: null,
          url: null,
          color: null,
          icon: null,
          classes: null,
        },
        xbox: {
          name: "xbox",
          username: null,
          url: null,
          color: null,
          icon: null,
          classes: null,
        },
        epicgames: {
          name: "epicgames",
          username: null,
          url: null,
          color: null,
          icon: null,
          classes: null,
        },
        riotgames: {
          name: "riotgames",
          username: null,
          url: null,
          color: null,
          icon: null,
          classes: null,
        },
      },
    ];

    // insert discord linked social media accounts
    for (let accounts of data.connected_accounts) {
      if (accounts.type === socialMedia[0][accounts.type].name) {
        switch (socialMedia[0][accounts.type].username) {
          case "id":
            accountLink = socialMedia[0][accounts.type].url + accounts.id;
            break;
          case "name":
            accountLink = socialMedia[0][accounts.type].url + accounts.name;
            break;
        }

        value +=
          "<a href=" +
          accountLink +
          " target='_blank' class='" +
          socialMedia[0][accounts.type].classes +
          "' style='color: " +
          socialMedia[0][accounts.type].color +
          " !important'><i class='bi bi-" +
          socialMedia[0][accounts.type].icon +
          "'></i></a>";
      }
    }

    accountsdiv.innerHTML = value;
  });
