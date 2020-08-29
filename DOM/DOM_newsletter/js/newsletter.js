const txtEmail = document.getElementById("txtEmail")
const msgFeedback = document.getElementById("newsletterFeedback")



function cadastrarEmail() {
    let email = txtEmail.value // email = ""
    msgFeedback.innerHTML = `O email ${email} foi cadastrado com sucesso`
}

