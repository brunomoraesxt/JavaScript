var idade = function(anos){
    return new Promise(function(resolve, reject){
        setTimeout(function() {
          anos >= 18 ? resolve() : reject();
        }, 2000);
    });

  };

  idade(10)
    .then(function(){
      console.log("Maior que 18");
    })
    .catch(function(){
      console.log("Menor que 18");
    });

var inputName = document.getElementById("user");
var dataList = document.querySelector("ul");
var getUserRepo = function(name) {
  var user = inputName.value;
  if (!user) {
    renderError();
    alert("Preencha o campo");
  }
  renderLoading();
  axios
    .get(`https://api.github.com/users/${user}/repos`)
    .then(function(response) {
      fillList(response.data);
    })
    .catch(function(error) {
      alert("Não foi possível efetuar a busca!");
      renderError(error);
    });
};

function renderLoading(loading) {
  dataList.innerHTML = "";
  var textElement = document.createTextNode("Carregando...");
  var loadingElement = document.createElement("li");
  loadingElement.appendChild(textElement);
  dataList.appendChild(loadingElement);
}

function renderError(loading) {
  dataList.innerHTML = "";
  var user = inputName.value;
  var msgUserEmpty = !user ? "Preencha o usuário" : "Erro ao efetuar busca";

  var textElement = document.createTextNode(msgUserEmpty);
  var errorElement = document.createElement("li");
  errorElement.style.color = "#F00";
  errorElement.appendChild(textElement);
  dataList.appendChild(errorElement);
}

const fillList = function(repositorios) {
  console.log("TCL: repositorios", repositorios);
  dataList.innerHTML = "";

  for (repo of repositorios) {
    const reponame = document.createTextNode(repo.name);
    const repoItem = document.createElement("li");

    repoItem.appendChild(reponame);
    dataList.appendChild(repoItem);
  }
};