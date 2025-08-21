# Massage Alternativa

Site estático para divulgação e agendamento de serviços de massagem. Projeto simples, rápido e focado em conteúdo, com HTML, CSS e JavaScript puro.

- Produção: https://www.massagealternativa.com/
- Página principal local: abra `index.html`

## Visão geral

O site apresenta:
- Seções "Sobre", "Tratamentos", "Horário" e "Contato".
- Links diretos para WhatsApp e Instagram.
- Endereço clicável com abertura no Google Maps.
- Tabela de horários e políticas de atendimento.
- Base visual leve com animações e responsividade.

Métricas:
- Google Analytics 4 (`gtag.js`) já embutido.
- Umami configurado (script externo).

Opcional:
- Código para buscar avaliações do Google Places (requer configurar a API corretamente).

## Stack e dependências

- HTML estático em `index.html`
- CSS em `assets/css/main.css` (inclui Font Awesome e Google Fonts)
- JavaScript em `assets/js/*.js`:
  - `jquery.min.js`
  - `browser.min.js`
  - `breakpoints.min.js`
  - `util.js`
  - `main.js` (navegação entre seções com hash + animações)
- Ícones: Font Awesome (via `assets/css/fontawesome*.css` e `assets/webfonts/`)
- Analytics: Google Analytics 4 e Umami
- Deploy: Vercel (arquivo `vercel.json`)

## Estrutura de pastas

- `index.html`: página principal e conteúdo.
- `assets/css/`: estilos. O arquivo principal é `main.css`.
- `assets/js/`: scripts do template e lógica de navegação (`main.js`).
- `assets/sass/`: origem Sass do tema (opcional para quem quiser ajustar no código-fonte).
- `images/`: imagens usadas no site (logo, fotos do espaço, etc.).
- `vercel.json`: config silenciosa de GitHub para deploy no Vercel.
- `license.md`: licença pessoal do projeto.

## Como rodar localmente

Opção rápida (sem servidor):
- Baixe/clone o repositório.
- Abra o arquivo `index.html` no navegador.

Opção com servidor estático (recomendado para testes de rota/hash):
- Com Node instalado, por exemplo:
  - `npx serve`
  - `npx http-server`
- Acesse a URL local exibida no terminal.

Não há build passo-a-passo: é site estático.

## Customização

- Textos e seções: edite `index.html`.
- Imagens: troque arquivos em `images/` e ajuste os `src` no `index.html`.
- Cores, tipografia e espaçamentos: edite `assets/css/main.css`.
- Ícones sociais: use classes Font Awesome já incluídas em `index.html` (ex.: `fa-instagram`, `fa-whatsapp`).
- Plano de fundo: definido em `assets/css/main.css` em `#bg:after` (imagem `images/forestBlurred.JPG`).
- Logo: `images/logo.png` (ajustado em `#header .logo` no HTML/CSS).

Dica: `main.js` controla a transição entre seções via hash (`#sobre`, `#tratamentos`, `#horario`, `#contato`). Se criar novas seções, siga o mesmo padrão de `<article id="...">` e adicione o link no `<nav>`.

## Métricas e integrações

- Google Analytics 4: configurado com ID `G-RQRS91ZVN3` no `index.html`. Substitua pelo seu se necessário.
- Umami: script em `https://umami.yuricunha.com/script.js` com `data-website-id="17e2e801-0a86-4808-988c-4d86c4132332"`. Troque/remova se não for usar.

### Avaliações do Google (opcional)

Existe um script `buscarAvaliacoes()` no `index.html` que usa Google Places API para renderizar reviews. Para funcionar corretamente:
- Inclua a biblioteca `places` no carregamento:
  ```
  https://maps.googleapis.com/maps/api/js?key=SEU_API_KEY&callback=initMap&libraries=places&v=weekly
  ```
- Defina `placeId` da empresa (já há um valor de exemplo).
- Garanta que a chave tem permissões de Places API e restrições de uso adequadas.

Observação: hoje a tag está com `libraries=` vazio; ajuste para `libraries=places` se for ativar esse recurso.

## Acessibilidade e SEO

- Estrutura semântica básica com headings e navegação por âncoras.
- Títulos e meta viewport já configurados.
- Adicione/otimize:
  - `<meta name="description" ...>` no `<head>`.
  - `alt` descritivo em todas as imagens (algumas já têm).
  - Open Graph/Twitter Cards se desejar melhor prévia em redes sociais.

## Notas de segurança/UX

- O `index.html` bloqueia menu de contexto e alguns atalhos de teclado (F12, Ctrl+Shift+I/J/C, Ctrl+U). Isso desencoraja inspeção/cópia, mas pode prejudicar acessibilidade e DX. Remova se não quiser essa restrição.
- Links de WhatsApp e telefone estão em `index.html`:
  - Agendamento: `https://api.whatsapp.com/send?phone=5511940156754...`
  - Telefone/WhatsApp em “Contato”.

## Deploy

Vercel (recomendado):
- Conecte o repositório ao Vercel.
- Framework: "Other" (site estático).
- Diretório de saída: raiz (o `index.html` está na raiz).
- `vercel.json` atual só silencia integrações GitHub; ajuste se precisar headers/redirecionamentos.

Outras opções:
- GitHub Pages (branch `main`/`docs`).
- Qualquer CDN/host estático (Netlify, Cloudflare Pages, S3 + CloudFront, etc.).

## Licença

Este projeto usa "Yuri Cunha - Personal License" (veja `license.md`).
- Permitido: usar como inspiração e aprender.
- Restrições: não copiar trechos substanciais sem crédito.
- Distribuição de modificações: permitida com manutenção dos termos e atribuição.

## Autor

- Nome: Yuri Cunha
- Site: https://yuricunha.com/
- GitHub: https://github.com/isyuricunha
- Twitter: https://twitter.com/isyuricunha
- LinkedIn: https://linkedin.com/in/isyuricunha

## Contribuições

Sugestões, issues e PRs são bem-vindos. Abra uma issue em:
https://github.com/isyuricunha/massage-alternativa/issues

## Pontos de atenção e próximos passos

- Ajustar `libraries=places` e a chave da Google Maps API, caso as avaliações sejam usadas.
- Incluir `meta description` e OG tags para SEO.
- Revisar bloqueios de teclado/menu contexto pensando em acessibilidade.
- Otimizar imagens (compressão/formatos modernos) se necessário.
