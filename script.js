  const darkmodeBtn = document.getElementById("dark-mode-btn");
  darkmodeBtn.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
      darkmodeBtn.className = "fa-solid fa-sun fa-sm";
    }else {
      darkmodeBtn.className = "fa-solid fa-moon fa-sm";
    }
  }

const menuBtn = document.getElementById("menu-btn");

menuBtn.onclick = function() {
  const navList = document.querySelector(".nav-list");
  menuBtn.classList.toggle("open");
  navList.classList.toggle("open");
}

const project = document.getElementById("project");
project.onclick = function() {
  const projectContent = document.querySelector(".project-content");
  const projectTitle = document.querySelector(".title");
  projectContent.classList.toggle("open");
  projectTitle.classList.toggle("closed");
}