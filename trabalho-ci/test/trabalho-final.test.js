import assert from 'node:assert';
import { test, expect } from '@playwright/test';

import {
  geradorDeTagsDeIdentificacao,
  verificarSePodeSerAdotado,
  calcularConsumoDeRacao,
  decidirTipoDeAtividadePorPorte,
  buscarDadoAsync
} from './trabalho.js'; 

test('QUANDO informar um nome para o Pet, DEVE ser impresso na tag com letras maiúsculas', () => {
  assert.strictEqual(geradorDeTagsDeIdentificacao('Pantera'), 'PANTERA');
});

test('QUANDO a idade = 1 + porte M, DEVE ser permitida a adoção', () => {
  assert.strictEqual(verificarSePodeSerAdotado(1, 'M'), true);
});

test('QUANDO o peso = 14.5, DEVE ser retornado 4350 gramas para o consumo diário', () => {
  assert.strictEqual(calcularConsumoDeRacao('Pitoco', 1, 14.5), 4350);
});

test('QUANDO o porte = pequeno, DEVE ser retornada a atividade adequada', () => {
  assert.strictEqual(decidirTipoDeAtividadePorPorte('pequeno'), 'brincar dentro de casa');
});

test('QUANDO buscar dado de exemplo, DEVE retornar um valor de forma assíncrona', async () => {
  const resultado = await buscarDadoAsync();
  assert.strictEqual(resultado, 'Pipoca');
});
