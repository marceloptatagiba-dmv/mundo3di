/* Calculadora Mundo 3DI — regras de cálculo (sem dependência de tela) */
(function (root) {
  'use strict';

  var PADROES = { precoKg: 150, valorHora: 2.25, perdaPct: 5, margemPct: 100 };

  /* Converte texto digitado (vírgula ou ponto) em número >= 0. Vazio ou inválido = 0. */
  function lerNumero(valor) {
    var s = String(valor == null ? '' : valor).trim().replace(/\s/g, '');
    if (s.indexOf(',') !== -1) {
      s = s.replace(/\./g, '').replace(',', '.'); // 1.234,56 -> 1234.56
    }
    var n = parseFloat(s);
    return isFinite(n) && n > 0 ? n : 0;
  }

  /*
   * Custo base   = peso × (preço kg / 1000) + tempo × (valor hora / 60)
   * Perda/Refugo = custo base × perda%
   * Custo total  = custo base + perda
   * Valor final  = custo total × (1 + margem%)
   */
  function calcular(e) {
    var valorGrama = e.precoKg / 1000;
    var valorMinuto = e.valorHora / 60;
    var material = e.peso * valorGrama;
    var impressao = e.tempo * valorMinuto;
    var custoBase = material + impressao;
    var perda = custoBase * e.perdaPct / 100;
    var custoTotal = custoBase + perda;
    var valorCobrar = custoTotal * (1 + e.margemPct / 100);
    return {
      valorGrama: valorGrama,
      valorMinuto: valorMinuto,
      material: material,
      impressao: impressao,
      custoBase: custoBase,
      perda: perda,
      custoTotal: custoTotal,
      valorCobrar: valorCobrar
    };
  }

  var fmtBRL = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
  function moeda(n) { return fmtBRL.format(n); }
  function decimal(n, min, max) {
    return n.toLocaleString('pt-BR', { minimumFractionDigits: min, maximumFractionDigits: max });
  }

  var Calc = { PADROES: PADROES, lerNumero: lerNumero, calcular: calcular, moeda: moeda, decimal: decimal };
  if (typeof module !== 'undefined' && module.exports) { module.exports = Calc; }
  root.Calc = Calc;
})(typeof window !== 'undefined' ? window : globalThis);
