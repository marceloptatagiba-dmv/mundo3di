# Calculadora Mundo 3DI

App web instalável (PWA) para calcular o preço de peças impressas em 3D. Funciona no iPhone e no Android, sem loja de aplicativos. Depois do primeiro acesso, funciona também sem internet.

## Como o preço é calculado

| Etapa | Fórmula |
|---|---|
| Material | peso (g) × preço do rolo (R$/kg) ÷ 1000 |
| Impressão | tempo (min) × valor da hora (R$/h) ÷ 60 |
| Custo base | Material + Impressão |
| Perda/Refugo | Custo base × perda % (padrão 5%) |
| Custo total | Custo base + Perda/Refugo |
| Valor a cobrar | Custo total × (1 + margem %) — padrão 100% |

Padrões das configurações: rolo R$ 150,00/kg, hora R$ 2,25/h, perda 5%. Cada celular guarda as próprias configurações.

## Arquivos

| Arquivo | Para que serve |
|---|---|
| `index.html` | Telas e visual |
| `calc.js` | Regras de cálculo |
| `app.js` | Funcionamento das telas, configurações salvas, botão copiar |
| `manifest.webmanifest` | Nome, ícone e cores do app instalado |
| `sw.js` | Guarda os arquivos no celular para funcionar offline |
| `icons/`, `img/`, `fonts/` | Ícones, logo e fonte Montserrat (inclusa, sem depender da internet) |
| `teste-calculo.js` | Teste das fórmulas: `node teste-calculo.js` |

## Publicar (precisa ser feito uma vez)

O app precisa estar num endereço **https** para poder ser instalado e funcionar offline. Duas opções gratuitas:

**Netlify Drop (mais simples)**
1. Acesse https://app.netlify.com/drop e entre com uma conta gratuita.
2. Arraste a pasta `calculadora-3di` inteira para a página.
3. Use o endereço gerado (dá para trocar o nome em *Site configuration*).

**GitHub Pages**
1. Crie um repositório no GitHub e envie o conteúdo desta pasta (os arquivos na raiz do repositório).
2. Em *Settings → Pages*, escolha *Deploy from a branch*, branch `main`, pasta `/ (root)`.
3. O endereço fica `https://<usuario>.github.io/<repositorio>/`.

## Instalar no celular

- **iPhone:** abra o endereço no **Safari** → botão Compartilhar → **Adicionar à Tela de Início**.
- **Android:** abra no **Chrome** → toque em **Instalar** no aviso do app, ou menu ⋮ → **Instalar app**.

Depois de instalado, abra uma vez com internet. A partir daí funciona em modo avião.

## Atualizar o app

1. Altere os arquivos.
2. Em `sw.js`, aumente a versão: `calc3di-v1` → `calc3di-v2`.
3. Publique de novo. Os celulares recebem a atualização na próxima vez que abrirem o app com internet (às vezes é preciso fechar e abrir de novo).

## Testar no computador

Na pasta do projeto: `python -m http.server 8000` e abra http://localhost:8000.
