document.getElementById('botaoExibir').addEventListener('click', function() {
    fetch('dados.json')
      .then(response => response.json())
      .then(data => {
        const idAleatorio = Math.floor(Math.random() * 52) + 1;
        const itemEncontrado = data.find(item => item.ID === idAleatorio); // Alterado para item.ID
  
        if (itemEncontrado) {
          exibirFoto(itemEncontrado.Foto); // Alterado para item.Foto
        } else {
          console.log('ID não encontrado.');
        }
      })
      .catch(error => console.error('Erro ao buscar dados:', error));
  });
  
  function exibirFoto(caminhoFoto) {
    const imagem = document.createElement('img');
    imagem.src = caminhoFoto;
    const fotoContainer = document.getElementById('fotoContainer');
    fotoContainer.innerHTML = '';
    fotoContainer.appendChild(imagem);
  }