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
