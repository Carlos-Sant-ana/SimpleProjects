fetch('dados.json')
  .then(response => response.json())
  .then(dados => {
    // 'dados' agora contém os dados JSON do arquivo dados.json
    exibirRaridades(dados); // Chama a função exibirRaridades com os dados
  })
  .catch(error => {
    console.error('Erro ao buscar JSON:', error);
  });

function exibirRaridades(raridades) { // Agora aceita 'raridades' como argumento
  const listaRaridades = document.getElementById("listaRaridades");

  raridades.forEach(raridade => {
    const itemLista = document.createElement("li");
    itemLista.textContent = raridade.nome;
    listaRaridades.appendChild(itemLista);
  });
}