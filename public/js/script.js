// const MenuHandler = (flag) => {
//   if (flag) {
//       document.getElementById("list").classList.add("top-100");
//       document.getElementById("list").classList.remove("hidden");
//       document.getElementById("close").classList.remove("hidden");
//       document.getElementById("open").classList.add("hidden");
//   } else {
//       document.getElementById("list").classList.remove("top-100");
//       document.getElementById("list").classList.add("hidden");
//       document.getElementById("close").classList.add("hidden");
//       document.getElementById("open").classList.remove("hidden");
//   }
// };

console.log('testing123...');

const startBtn = document.getElementById("startBtn");
const forHide = document.querySelector("forHide");
const loginForm = document.querySelector(".loginForm")
$("#startBtn").click(function(e) {

  e.preventDefault();
    $("#forHide").hide();
  loginForm.style.display = "block"
});

const showRoster = document.getElementById("showRoster");
const newRoster = document.getElementById("newRoster");
const mainHero = document.getElementById("mainHero");
const teamRoster = document.querySelector(".team")
$('#showRoster').click(function(e) {
  e.preventDefault();
    $("#mainHero").hide();
      teamRoster.style.display = "block";
})