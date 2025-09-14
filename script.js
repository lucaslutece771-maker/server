const agentes = {
  "Batman": "fks172",
  "Sidorovich": "lop1212",
  "Penny": "prc95",
  "Nick Valentine": "ngx12",
  "Sherlock": "lock1212",
  "L Lawliet": "kirakira",
  "Sam Fisher": "NKVD1232",
  "Jill Valentine": "ocus612",
  "Ada Wong": "umb0909",
  "Ada Wrong": "kps??",
  "Jimin do BTS": "kpop",
  "Decoder": "#vT9!pLx2@rQz7$Wm8^Kd3*Yb6&Jo1Xe",
};

function validarLogin(event) {
  event.preventDefault();

  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;

  if (agentes[usuario] && agentes[usuario] === senha) {
    alert("Acesso concedido ao agente: " + usuario);
    window.location.href = "server.html";
  } else {
    alert("Acesso negado. Credenciais inválidas.");
  }
}
