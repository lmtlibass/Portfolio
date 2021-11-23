function menu() {
    var menu_mobile = document.getElementById("menu");
    if (menu_mobile.style.display === "none") {
      menu_mobile.style.display = "initial";
    } else {
      menu_mobile.style.display = "none";
    }
  }