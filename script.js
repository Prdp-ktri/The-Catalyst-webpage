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
