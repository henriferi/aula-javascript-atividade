

function login () {
    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    if(usuario == "" || senha == "") {
        alert("Usuário e/ou Senha estão inválidos.")
    } else {
        alert("Você será direcionado para nossa página principal.")
    }
}