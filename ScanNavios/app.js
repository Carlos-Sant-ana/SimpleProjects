function pesquisar() {
  // Obtém a seção HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value

  // se campoPesquisa for uma string sem nada
  if (!campoPesquisa) {
      section.innerHTML = "<center><p>Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte</p></center>"
      return 
  }

  campoPesquisa = campoPesquisa.toLowerCase()

  // Inicializa uma string vazia para armazenar os resultados
  let resultados = "";
  let titulo = ""; 
  let descricao = "";
  let tags = "";

  // Itera sobre cada dado da lista de dados
  for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLowerCase()
      // se titulo includes campoPesquisa
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
          // cria um novo elemento
          resultados += `
          <center>
          <div class="item-resultado">
            <div class="div1">
            <img src=${dado.imgship} class="imgship">
            </div>
            <div class="div2">
                <h2>
                  <p>${dado.titulo}</p>
                </h2>
              <p class="descricao-meta">${dado.descricao}</p>
              <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
          </div>
          </center>
      `;
      }
  }

  if (!resultados) {
      resultados = "<center> <p>Nada foi encontrado</p> </center>"
  }

  // Atribui os resultados gerados à seção HTML
  section.innerHTML = resultados;
}