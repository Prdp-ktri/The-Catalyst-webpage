function handleClick(section) {
  console.log("Clicked:", section);

  switch (section) {
    case "home":
      alert("Go to Home");
      break;
    case "performance":
      alert("Navigate to Performance");
      break;
    case "features":
      alert("Navigate to Features");
      break;
    case "prices":
      alert("Navigate to Prices");
      break;
    case "faq":
      alert("Navigate to FAQ");
      break;
    case "login":
      alert("Open Login Page");
      break;
    case "start":
      alert("Start Here Clicked");
      break;
  }
}

// Animate numbers using setTimeout

function animateValue(id, start, end, duration) {
  let range = end - start;
  let current = start;
  let increment = range / (duration / 20);

  function update() {
    current += increment;

    if (
      (increment > 0 && current >= end) ||
      (increment < 0 && current <= end)
    ) {
      document.getElementById(id).innerText = end;
      return;
    }

    document.getElementById(id).innerText = Math.floor(current);
    setTimeout(update, 20);
  }

  update();
}

// Run animations
setTimeout(() => animateValue("stat1", 0, 42, 800), 200);
setTimeout(() => animateValue("stat2", 0, 99, 1200), 400); // will format later
setTimeout(() => animateValue("stat3", 0, 10, 800), 600);

// Fix decimal for 99.99%
setTimeout(() => {
  document.getElementById("stat2").innerText = "99.99";
}, 1300);

// Pricing section
const monthlyBtn = document.getElementById("monthlyBtn");
const yearlyBtn = document.getElementById("yearlyBtn");

monthlyBtn.onclick = () => {
  monthlyBtn.classList.add("bg-lime-400");
  yearlyBtn.classList.remove("bg-lime-400");

  // Prices
  starterPrice.textContent = "30";
  proPrice.textContent = "100";
  enterprisePrice.textContent = "500";

  // Billing text
  starterBilling.innerHTML = "per seat / month<br>Billed monthly";
  proBilling.innerHTML = "per seat / month<br>Billed monthly";
  enterpriseBilling.innerHTML = "starts from / month<br>Billed monthly";

  // Hide yearly notes
  starterNote.classList.add("hidden");
  proNote.classList.add("hidden");
  enterpriseNote.classList.add("hidden");
};

yearlyBtn.onclick = () => {
  yearlyBtn.classList.add("bg-lime-400");
  monthlyBtn.classList.remove("bg-lime-400");

  // Prices
  starterPrice.textContent = "22";
  proPrice.textContent = "75";
  enterprisePrice.textContent = "375";

  // Billing text
  starterBilling.innerHTML = "per seat / month";
  proBilling.innerHTML = "per seat / month";
  enterpriseBilling.innerHTML = "starts from / month";

  // Show yearly notes
  starterNote.classList.remove("hidden");
  proNote.classList.remove("hidden");
  enterpriseNote.classList.remove("hidden");
};

const items = document.querySelectorAll(".faq-item");
const expandAllBtn = document.getElementById("expandAll");
const collapseAllBtn = document.getElementById("collapseAll");

function toggleItem(item, expand) {
  const answer = item.querySelector(".faq-answer");
  const icon = item.querySelector(".icon");

  if (expand) {
    answer.classList.remove("hidden");
    icon.textContent = "✕";
    icon.classList.add("bg-lime-400", "border-lime-400");
  } else {
    answer.classList.add("hidden");
    icon.textContent = "+";
    icon.classList.remove("bg-lime-400", "border-lime-400");
  }
}

// Individual toggle
items.forEach((item) => {
  item.querySelector(".faq-question").addEventListener("click", () => {
    const isOpen = !item
      .querySelector(".faq-answer")
      .classList.contains("hidden");
    toggleItem(item, !isOpen);
  });
});

// Expand All
expandAllBtn.onclick = () => {
  items.forEach((item) => toggleItem(item, true));
};

// Collapse All
collapseAllBtn.onclick = () => {
  items.forEach((item) => toggleItem(item, false));
};

function scrollToTop() {
  document.getElementById("home").scrollIntoView({
    behavior: "smooth",
  });
}
