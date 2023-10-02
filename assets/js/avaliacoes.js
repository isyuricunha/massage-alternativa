// Função para buscar e exibir avaliações
function buscarAvaliacoes(placeId, targetElementId) {
  const service = new google.maps.places.PlacesService(
    document.createElement("div")
  );
  service.getDetails({ placeId: placeId }, (place, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      const avaliacoes = place.reviews;
      const secaoAvaliacoes = document.getElementById(targetElementId);

      if (avaliacoes) {
        for (const avaliacao of avaliacoes) {
          const rating = avaliacao.rating;
          const text = avaliacao.text;
          const authorName = avaliacao.author_name;

          const reviewDiv = document.createElement("div");
          reviewDiv.innerHTML = `<p><strong>${authorName}</strong></p><p>Classificação: ${rating}/5</p><p>${text}</p>`;
          secaoAvaliacoes.appendChild(reviewDiv);
        }
      } else {
        secaoAvaliacoes.innerHTML = "Nenhuma avaliação disponível.";
      }
    } else {
      console.error("Erro ao buscar avaliações: " + status);
    }
  });
}

// Configure o ID do local e o ID do elemento de destino
const lugarId = "ChIJYc9Pf-hBzpQRgX1ABzGJk3U"; // Substitua pelo ID da empresa no Google
const elementoAlvoId = "avaliacoes"; // Substitua pelo ID do elemento de destino na página

// Chame a função para buscar as avaliações quando a página carregar
window.onload = function () {
  buscarAvaliacoes(lugarId, elementoAlvoId);
};
