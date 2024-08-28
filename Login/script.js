const modal = document.getElementById("mymodal")
const but = document.getElementById("but")

function login() {
  var nome = $("#nome").val();
  var senha = $("#senha").val();

  if (nome && senha && nome === "admin" && senha === "admin") {
    const user = {
      name: nome,
      dataEntrada: new Date(),
      id: Math.floor(Math.random() * 100000),
    };

    localStorage.setItem("usuario", JSON.stringify(user));

    window.location.href = "../Loja/loja.html";
  } else {
      modal.style.display = "flex";
  }
}

var span = document.getElementsByClassName("butao")[0];

span.onclick = function() {
  modal.style.display = "none";
}

function showPassword() {
    var senha = document.getElementById("senha")
    if (senha.getAttribute("type")==="password") {
        senha.setAttribute("type", "text")
    }
    else
    {
      senha.setAttribute("type", "password")
    }
}
