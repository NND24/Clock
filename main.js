const switchBtn = document.querySelector(".switch-btn");
const body = document.querySelector("body");
const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");

if (localStorage.getItem("mode") == "Dark Mode") {
  body.classList.add("dark");
} else {
  body.classList.remove("dark");
}

switchBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  const isDarkMode = body.classList.contains("dark");
  switchBtn.innerText = isDarkMode ? "Light Mode" : "Dark Mode";
  localStorage.setItem("mode", isDarkMode ? "Dark Mode" : "Light Mode");
});

const updateTime = () => {
  let date = new Date();
  let hourDeg = (date.getHours() / 12) * 360;
  let minuteDeg = (date.getMinutes() / 60) * 360;
  let secondDeg = (date.getSeconds() / 60) * 360;

  hourHand.style.transform = `rotate(${hourDeg}deg)`;
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
  secondHand.style.transform = `rotate(${secondDeg}deg)`;
};

setInterval(updateTime, 1000);
updateTime();
