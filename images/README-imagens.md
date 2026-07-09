# Guia de imagens e vídeos — Saúde Verde

A maior parte do site já usa os vídeos ambiente gerados no Flow (pasta `/videos`, com posters em `/images/posters`). O que ainda falta é apenas o seguinte:

| Item | Arquivo esperado | Especificação | Status |
|---|---|---|---|
| Produto 1/2/3 | `images/produto-1.jpg`, `produto-2.jpg`, `produto-3.jpg` | 600x600px (quadrado) | Pendente — seção Produtos ainda usa ícone SVG genérico |
| Open Graph | `images/og-cover.jpg` | 1200x630px | Pendente — referenciado no `<meta property="og:image">` do `<head>` |
| Endereço/Mapa | iframe do Google Maps | — | Pendente — quando houver endereço físico, adicionar `<iframe>` logo abaixo do vídeo na seção Contato (ver comentário no HTML) |

## Mapa de vídeos por seção

| Seção/elemento | Vídeo | Poster |
|---|---|---|
| Hero (fundo full-bleed) | `videos/hero.mp4` | `images/posters/hero.jpg` |
| Sobre Sandra Dalva (mídia em destaque) | `videos/sobre-sandra.mp4` | `images/posters/sobre-sandra.jpg` |
| Como posso te ajudar (fundo de seção) | `videos/beneficios-bg.mp4` | `images/posters/beneficios-bg.jpg` |
| Card "Ansiedade e estresse" | `videos/card-ansiedade.mp4` | `images/posters/card-ansiedade.jpg` |
| Card "Compulsões e vícios" | `videos/card-vicios.mp4` | `images/posters/card-vicios.jpg` |
| Card "Obesidade e equilíbrio corporal" | `videos/card-obesidade.mp4` | `images/posters/card-obesidade.jpg` |
| Tratamento "Fitoterapia" | `videos/fitoterapia.mp4` | `images/posters/fitoterapia.jpg` |
| Tratamento "Acompanhamento personalizado" | `videos/acompanhamento.mp4` | `images/posters/acompanhamento.jpg` |
| Como funciona o atendimento (fundo) | `videos/processo-bg.mp4` | `images/posters/processo-bg.jpg` |
| Depoimentos (fundo) | `videos/depoimentos-bg.mp4` | `images/posters/depoimentos-bg.jpg` |
| FAQ (mídia lateral, só desktop) | `videos/faq.mp4` | `images/posters/faq.jpg` |
| Contato (substitui o mapa) | `videos/contato.mp4` | `images/posters/contato.jpg` |
| Footer (fundo) | `videos/footer-bg.mp4` | `images/posters/footer-bg.jpg` |
| CTA intermediária (fundo, imagem estática) | — | `images/cta-band.jpg` (única seção sem vídeo — nenhum clipe foi gerado para ela) |

Todos os vídeos foram reprocessados (sem áudio, com `faststart`) para carregar rápido na web. Eles tocam/pausam automaticamente conforme entram e saem da tela (`js/app.js`), e respeitam `prefers-reduced-motion` e o modo de economia de dados do navegador — nesses casos, apenas o poster (primeira imagem do vídeo) é exibido, parado.

## Ícones

Todos os ícones do site são SVG inline (sem dependências externas), no estilo de linha fina (`stroke`), para manter leveza e consistência com a identidade natural. Para trocar algum ícone, edite diretamente o `<svg>` correspondente em `index.html` ou substitua por um ícone de uma biblioteca open-source de linha (ex.: Lucide, Feather) mantendo `stroke-width` entre 1.4 e 1.7 para manter o mesmo peso visual.
