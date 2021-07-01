// Arrows sidebar events
let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e) => {
  let arrowParent = e.target.parentElement.parentElement;
  arrowParent.classList.toggle("showMenu");
  });
}

// Sidebar closed event
let sidebar = document.querySelector(".sidebar");
let responsive_right_pannel = document.querySelector(".responsive-right-pannel");
let sidebarBtn = document.querySelector(".logo-details a i img");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
  responsive_right_pannel.classList.toggle("sidebarclosed");
});

// Dynamic Right pannel Iframe source
async function buyNavButtonClick() {
    document.getElementById("right_pannel").src = "https://quickswap.exchange/#/swap";
};
  
async function sellNavButtonClick() {
  document.getElementById("right_pannel").src = "https://quickswap.exchange/#/pool";
};
  
async function rewardNavButtonClick() {
  document.getElementById("right_pannel").src = "https://quickswap.exchange/#/quick";
};

async function overviewNavButtonClick() {
  document.getElementById("right_pannel").src = "https://info.uniswap.org/#/";
};

async function tokenNavButtonClick() {
  document.getElementById("right_pannel").src = "https://info.uniswap.org/#/tokens";
};

async function poolNavButtonClick() {
  document.getElementById("right_pannel").src = "https://info.uniswap.org/#/pools";
};
    
async function streamingNavButtonClick() {
  document.getElementById("right_pannel").src = "stream.html";
};

/* Database */

Moralis.initialize("A1wx0qFYX4M8QlKNVeC330wGq2EYnO0iOGQggXc8"); // Application id from moralis.io
Moralis.serverURL = "https://kbcp7hj3liti.moralis.io:2053/server"; //Server url from moralis.io

async function login() {
  console.log("login clicked");
  var user = await Moralis.Web3.authenticate();
  if (user) {
    console.log(user);
    user.save();
  }
}

Moralis.User.enableUnsafeCurrentUser()
const currentUser = Moralis.User.current();
if (currentUser) {
  console.log("log sucess");
} else {
  console.log("unable to log");
}