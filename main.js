const Button = document.getElementById("button");
const firstImage = document.getElementById("event-image");
const players = document.getElementById("players");
const display = document.getElementById("display");

let count = 0;

Button.onclick = function () {
  if (count === 0 || count === 9) {
    count += 1;
    display.textContent = count;
  } else if (count < 10) {
    count += 2;
    display.textContent = count;
  } else {
  }

  if (count === 1) {
    firstImage.src = "profile1.jpg";
    players.textContent = "GK　児玉剛";
  }
  if (count === 3) {
    firstImage.src = "profile3.jpg";
    players.textContent = "DF　森重真人";
  }
  if (count === 5) {
    firstImage.src = "profile5.jpg";
    players.textContent = "DF　長友佑都";
  }
  if (count === 7) {
    firstImage.src = "profile7.jpg";
    players.textContent = "MF　三田啓貴";
  }
  if (count === 9) {
    firstImage.src = "profile9.jpg";
    players.textContent = "FW　ディエゴ";
  }
  if (count === 10) {
    firstImage.src = "profile10.jpg";
    players.textContent = "MF　東慶悟";
  }
  //   if ((count = 3)) {
  //   }
};

let countdown = setInterval(function () {
  const now = new Date();
  const target = new Date("2022/9/30 23:59:59");
  const remainTime = target - now;

  if (remainTime < 0) return false;

  const difDay = Math.floor(remainTime / 1000 / 60 / 60 / 24);
  const difHour = Math.floor(remainTime / 1000 / 60 / 60) % 24;
  const difMin = Math.floor(remainTime / 1000 / 60) % 60;
  const difSec = Math.floor(remainTime / 1000) % 60;

  document.getElementById("countdown-day").textContent = difDay;
  document.getElementById("countdown-hour").textContent = difHour;
  document.getElementById("countdown-min").textContent = difMin;
  document.getElementById("countdown-sec").textContent = difSec;

  if (remainTime < 0) clearInterval(countdown);
}, 1000);

("use-strict");

const slider = function () {
  const next = document.querySelector(".next");
  const prev = document.querySelector(".prev");

  const sliderwidth = document.querySelector(".sliderlist__item");
  let width = sliderwidth.clientWidth;

  const sliderlist = document.querySelector(".sliderlist");
  const sliderlist_item = document.querySelectorAll(".sliderlist__item");

  let counter = 0;

  next.addEventListener("click", function () {
    if (counter == sliderlist_item.length - 1) return;
    prev.style.display = "block";
    sliderlist.style.transition = ".3s";
    counter++;
    sliderlist.style.transform = "translateX(" + -width * counter + "px)";

    sliderlist.addEventListener("transitionend", function () {
      if (counter == sliderlist_item.length - 1) {
        sliderlist.style.transition = "none";
        next.style.display = "none";
      }
    });
  });

  prev.addEventListener("click", function () {
    if (counter == sliderlist_item.length - sliderlist_item.length) return;
    next.style.display = "block";
    sliderlist.style.transition = ".3s";
    counter--;
    sliderlist.style.transform = "translateX(" + -width * counter + "px)";

    sliderlist.addEventListener("transitionend", function () {
      if (counter == sliderlist_item.length - sliderlist_item.length) {
        sliderlist.style.transition = "none";
        prev.style.display = "none";
      }
    });
  });
};

slider();
