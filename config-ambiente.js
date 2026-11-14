/* Configuração do ambiente — PRODUÇÃO.
   Cada ambiente tem o seu próprio arquivo: o de teste fica em ambientes/staging/.
   Não copie este arquivo de um ambiente para o outro (ambientes/montar.sh já cuida disso).
   - prefixoCache: o service worker só apaga caches que começam com este prefixo.
   - versaoCache: aumente sempre que alterar qualquer arquivo do app, para os celulares atualizarem.
   - chaveConfig: nome onde as configurações ficam salvas no aparelho. */
(function (root) {
  'use strict';
  root.AMBIENTE_3DI = {
    nome: 'producao',
    prefixoCache: 'calc3di',
    versaoCache: 'v0.3.0',   // lido pelo código da v3 (cache calc3di-v0.3.0); apaga o calc3di-v2
    versao: '0.3.0',
    chaveConfig: 'mundo3di-calculadora-config',
    extraCache: []
  };
})(self);
