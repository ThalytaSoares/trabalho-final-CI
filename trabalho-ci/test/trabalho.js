function geradorDeTagsDeIdentificacao(nome) {
  return nome.toUpperCase();
}

function verificarSePodeSerAdotado(idade, porte) {
  return idade >= 1 && porte === 'M';
}

function calcularConsumoDeRacao(nome, idade, peso) {
  // Supondo que o consumo diário seja peso * 300
  return peso * 300;
}

function decidirTipoDeAtividadePorPorte(porte) {
  const atividades = {
    pequeno: 'brincar dentro de casa',
    medio: 'passeios curtos',
    grande: 'exercícios ao ar livre'
  };
  return atividades[porte];
}

async function buscarDadoAsync() {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Pipoca'), 100);
  });
}

// Exporta todas as funções de uma vez
module.exports = {
  geradorDeTagsDeIdentificacao,
  verificarSePodeSerAdotado,
  calcularConsumoDeRacao,
  decidirTipoDeAtividadePorPorte,
  buscarDadoAsync
};
