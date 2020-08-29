const txtEmail = document.getElementById("txtEmail")



function editarEmail() {
    txtEmail.disabled = false
    txtEmail.focus()
}

function disableEmail() {
    txtEmail.disabled = true
}