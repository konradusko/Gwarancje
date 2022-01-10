//Uploder IMG
document.querySelector(".BoxDial__addFileAvatarInput").onchange = evt => {
    const [file] = document.querySelector(".BoxDial__addFileAvatarInput").files
    if (file) {
        document.querySelector(".BoxDial__uploadAvatar").src = URL.createObjectURL(file)
    }
  }