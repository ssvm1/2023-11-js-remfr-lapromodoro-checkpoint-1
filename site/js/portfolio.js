document.getElementById('swap-avatar').addEventListener("click", avatarSwap);

    function avatarSwap() {
      var img = document.getElementById('your-image-id'); // Replace 'your-image-id' with the actual ID of your image
      img.src = "image/avatar.svg";
      img.alt = "New alt here";}