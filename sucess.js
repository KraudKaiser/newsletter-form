let email = window.location.search.split("=")[1].replace("%40", "@")

let emailValue = document.getElementById("emailValue")

emailValue.innerHTML = email