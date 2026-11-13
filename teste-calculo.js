// Teste das regras de cálculo: node teste-calculo.js
var C = require('./calc.js');
var casos = [
  { nome: 'Planilha (5 g, 10 min)', e: { peso: 5, tempo: 10, precoKg: 150, valorHora: 2.25, perdaPct: 5, margemPct: 100 },
    esperado: { custoBase: 'R$ 1,13', perda: 'R$ 0,06', custoTotal: 'R$ 1,18', valorCobrar: 'R$ 2,36' } },
  { nome: 'Tudo zero', e: { peso: 0, tempo: 0, precoKg: 150, valorHora: 2.25, perdaPct: 5, margemPct: 100 },
    esperado: { custoBase: 'R$ 0,00', perda: 'R$ 0,00', custoTotal: 'R$ 0,00', valorCobrar: 'R$ 0,00' } },
  { nome: 'Margem 0 e perda 0', e: { peso: 100, tempo: 60, precoKg: 120, valorHora: 3, perdaPct: 0, margemPct: 0 },
    esperado: { custoBase: 'R$ 15,00', perda: 'R$ 0,00', custoTotal: 'R$ 15,00', valorCobrar: 'R$ 15,00' } },
  { nome: 'Margem 70%', e: { peso: 200, tempo: 300, precoKg: 150, valorHora: 2.25, perdaPct: 5, margemPct: 70 },
    esperado: { custoBase: 'R$ 41,25', perda: 'R$ 2,06', custoTotal: 'R$ 43,31', valorCobrar: 'R$ 73,63' } }
];
var falhas = 0;
casos.forEach(function (c) {
  var r = C.calcular(c.e);
  Object.keys(c.esperado).forEach(function (k) {
    var obtido = C.moeda(r[k]).replace(/ /g, ' ');
    if (obtido !== c.esperado[k]) { falhas++; console.log('FALHA', c.nome, k, obtido, '≠', c.esperado[k]); }
  });
});
[['12,5', 12.5], ['12.5', 12.5], ['1.234,56', 1234.56], ['', 0], ['abc', 0], ['-3', 0], [' 7 ', 7]].forEach(function (t) {
  var n = C.lerNumero(t[0]);
  if (n !== t[1]) { falhas++; console.log('FALHA lerNumero', JSON.stringify(t[0]), n, '≠', t[1]); }
});
console.log(falhas ? falhas + ' falha(s)' : 'Todos os testes passaram');
process.exit(falhas ? 1 : 0);
