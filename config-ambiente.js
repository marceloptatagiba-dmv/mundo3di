/* Configuração do ambiente — PRODUÇÃO.
   Cada ambiente tem o seu próprio arquivo: o de teste fica em ambientes/staging/.
   Não copie este arquivo de um ambiente para o outro (ambientes/montar.sh já cuida disso).
   - prefixoCache: o service worker só apaga caches que começam com este prefixo.
   - versao: MAJOR.MINOR.PATCH; aumente sempre que alterar qualquer arquivo do app, para os celulares atualizarem
     (o cache offline é <prefixo>-v<versao>). No staging o mesmo número leva o sufixo -teste.N.
   - chaveConfig: nome onde as configurações ficam salvas no aparelho. */
(function (root) {
  'use strict';
  root.AMBIENTE_3DI = {
    nome: 'producao',
    prefixoCache: 'calc3di',
    versao: '0.4.0',
    chaveConfig: 'mundo3di-calculadora-config',
    extraCache: []
  };
})(self);
