// trabalho.js

export function geradorDeTagsDeIdentificacao(nome) {
  return nome.toUpperCase();
}

export function verificarSePodeSerAdotado(idade, porte) {
  return idade >= 1 && porte === 'M';
}

export function calcularConsumoDeRacao(nome, idade, peso) {
  // Supondo que o consumo diário seja peso * 300
  return peso * 300;
}

export function decidirTipoDeAtividadePorPorte(porte) {
  const atividades = {
    pequeno: 'brincar dentro de casa',
    medio: 'passeios curtos',
    grande: 'exercícios ao ar livre'
  };
  return atividades[porte];
}

export async function buscarDadoAsync() {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Pipoca'), 100);
  });
}
