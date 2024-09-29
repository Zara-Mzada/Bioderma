const mobile_menu_btn = document.getElementById("mobile_menu_btn");
const header_menu = document.getElementById("header_menu");
const close_btn = document.getElementById("close_btn");

mobile_menu_btn.onclick = () => {
  event.preventDefault(); 
  console.log("Menu button clicked");
  header_menu.classList.add("open");
};

close_btn.onclick = () => {
  event.preventDefault(); 
  console.log("Close button clicked");
  header_menu.classList.remove("open");
};
