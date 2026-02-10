function buscarCEP() {
  const cepDigitado = document.getElementById("cep").value;

  fetch(`https://viacep.com.br/ws/${cepDigitado}/json/`)
    .then(resposta => resposta.json())
    .then(dados => {
      if (dados.erro) {
        document.getElementById("resultado").innerText = "CEP não encontrado";
        return;
      }
      document.getElementById("resultado").innerText =
        `${dados.logradouro}, ${dados.bairro} - ${dados.localidade}/${dados.uf}, ${dados.estado}, ${dados.ddd}, ${dados.ibge}`;
    })
  }

function jokes(){
    fetch('https://api.chucknorris.io/jokes/random')
      .then(r => r.json())
      .then(r =>{
        if(r.erro){
          document.getElementById("piada").innerText = "Erro ao buscar piada";
          return;
        }
        document.getElementById("piada").innerText = r.value;
      })
  }

function randomuser(){
    fetch('https://randomuser.me/api/')
    .then(answer => answer.json())
    .then(answer => {document.getElementById("aleatorio").innerText = `${answer.results[0].name.title} ${answer.results[0].name.first} ${answer.results[0].name.last}`;
  });0
}