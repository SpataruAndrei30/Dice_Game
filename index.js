function setCookie(name, value, daysToLive) {
  const date = new Date();
  date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);
  let expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}
function deleteCookie(name) {
  setCookie(name, null, null);
}
function getCookie(name) {
  const cDecoded = decodeURIComponent(document.cookie);
  const cArray = cDecoded.split("; ");
  let result = 0;

  cArray.forEach((element) => {
    const [cookieName, cookieValue] = element.split("=");
    if (cookieName === name) {
      result = parseInt(cookieValue);
    }
  });

  return result;
}

function letsGo() {
  let score1 = 0;
  let score2 = 0;
  let playerName1 = document.getElementById("player1").value;
  let playerName2 = document.getElementById("player2").value;
  document.querySelector("p.pl1").textContent = String(playerName1);
  document.querySelector("p.pl2").textContent = String(playerName2);
  let randomNumber1 = Math.random();
  randomNumber1 = Math.floor(randomNumber1 * 6) + 1;
  let randomNumber2 = Math.random();
  randomNumber2 = Math.floor(randomNumber2 * 6) + 1;
  let indicePoza1 = "images/dice" + String(randomNumber1) + ".png";
  document.querySelector("img.img1").setAttribute("src", indicePoza1);
  let indicePoza2 = "images/dice" + String(randomNumber2) + ".png";
  document.querySelector("img.img2").setAttribute("src", indicePoza2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent =
      "🏆 " + String(playerName1) + " wins!";
    let score1 = getCookie("player1") + 1;
    let score2 = getCookie("player2");
    console.log(getCookie("player1"));
    setCookie("player1", score1, 365);
    document.querySelector("div.score").innerHTML =
      "Score:" + String(score1) + " - " + String(score2);
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent =
      String(playerName2) + " wins!" + "🏆 ";
    let score1 = getCookie("player1");
    let score2 = getCookie("player2") + 1;
    console.log(getCookie("player2"));
    setCookie("player2", score2, 365);
    document.querySelector("div.score").innerHTML =
      "Score:" + String(score1) + " - " + String(score2);
  } else {
    document.querySelector("h1").textContent = "Draw!";
  }
}
