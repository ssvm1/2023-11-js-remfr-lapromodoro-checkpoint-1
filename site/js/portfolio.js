document.getElementById('swap-avatar').addEventListener("click", avatarSwap);

    function avatarSwap() {
      let img = document.getElementById('swap-avatar');
      img.src = "image/avatar.svg";
      img.alt = "New alt here";}