const agentes = {
  "mariposa": "fks172",
  "sidorovich": "lop1212",
  "takukunavara": "prc95",
  "borboletinha": "ngx12",
};

function validarLogin(event) {
  event.preventDefault();

  const usuario = document.getElementById("#usuario").value;
  const senha = document.getElementById("#senha").value;

  if (agentes[usuario] && agentes[usuario] === senha) {
    alert("Acesso concedido ao agente: " + usuario);
    window.location.href = "server.html";
  } else {
    alert("Acesso negado. Credenciais inválidas.");
  }
}
