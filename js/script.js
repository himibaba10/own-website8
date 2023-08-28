const buttons = document.querySelectorAll(".helping-tab-buttons button");
const helpingTabs = document.querySelectorAll(".helping-tabs .helping-tab");

function showTab(btn) {
  helpingTabs.forEach((tab) => {
    tab.classList.remove("active");
    tab.style.opacity = 0;
    if (tab.id === btn.dataset.tabname) {
      tab.classList.add("active");
      setTimeout(() => (tab.style.opacity = 1), 10);
    }
  });
}

let count = 0;
for (let i = 0; i < buttons.length; i++) {
  let button = buttons[i];
  button.addEventListener("click", function (e) {
    count = i;
    buttons.forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");
    showTab(button);
  });
}

if (buttons.length) {
  setInterval(() => {
    buttons.forEach(
      (button) =>
        button.classList.contains("active") && button.classList.remove("active")
    );
    buttons[count].classList.add("active");
    showTab(buttons[count]);
    count++;
    count > buttons.length - 1 && (count = 0);
  }, 5000);
}

window.addEventListener("resize", () => {
  if (screen.width > 767) {
    navLinks.style.display = "flex";
  } else if (screen.width > 757) {
    navLinks.style.display = "none";
    animation.play();
    icon.className.includes("active") && icon.classList.remove("active");
  }
});

// Loading state
const loaderSection = document.getElementById("loader-section");
if (loaderSection) {
  window.addEventListener("load", () => {
    loaderSection.style.opacity = "0";
    setTimeout(() => {
      loaderSection.style.display = "none";
    }, 500);
  });
}

// Hover to show
const teamMembers = document.getElementsByClassName("team-member");

for (let member of teamMembers) {
  function showInfo(mousePosition) {
    member.addEventListener(mousePosition, function () {
      const memberInfo = this.querySelector(".team-member-info");
      memberInfo.style.display = "block";
      mousePosition == "mouseenter"
        ? memberInfo.classList.replace(
            "animate__fadeOutDown",
            "animate__fadeInUp"
          )
        : memberInfo.classList.replace(
            "animate__fadeInUp",
            "animate__fadeOutDown"
          );
    });
  }

  showInfo("mouseenter");
  showInfo("mouseleave");
}
