document.getElementById('swap-avatar').addEventListener("click", avatarSwap);

    function avatarSwap() {
      let img = document.getElementById('swap-avatar');
      img.src = "image/avatar.svg";
      img.alt = "New alt here";}



const changeNameBtn = document.createElement("button");
changeNameBtn.setAttribute("id","change-name")
changeNameBtn.innerHTML = "Customize this section";
changeNameBtn.style.padding = "1rem 2rem"
changeNameBtn.style.backgroundColor = "#FFF"
changeNameBtn.style.border = "none"
document.getElementById("AddBtn").appendChild(changeNameBtn)


document.getElementById("change-name").addEventListener("click", changeName);

function changeName() {

  let inputColor = prompt("Please enter a color or ignore for default")
  let backgroundSection = document.getElementById("AddBtn");
  let titleColor = document.querySelectorAll("h4") 
  let footerColor = document.querySelector("footer") 
  let inputName = prompt("Please enter your name")
  let nameSection = document.getElementById('firstname');
  nameSection.innerHTML = `${inputName}`;
  nameSection.style.color = "#FFF";
  backgroundSection.style.backgroundColor = `${inputColor || '#750ff7'}`
  footerColor.style.backgroundColor = `${inputColor || '#750ff7'}`
  titleColor.forEach((h4Element) => {
    h4Element.style.color = `${inputColor || '#750ff7'}`;
  });
}

