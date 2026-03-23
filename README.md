# Laboratorio de Midias e Tecnologias

Blog estatico criado em HTML, CSS e JavaScript para publicar textos, videos, projetos no Tinkercad e registros academicos.

## Estrutura

- `index.html`: pagina inicial com destaque, filtros e grade de postagens.
- `post.html`: pagina individual de leitura.
- `assets/css/style.css`: identidade visual e responsividade.
- `assets/js/posts.js`: banco de dados simples com todas as postagens.
- `assets/js/app.js`: funcoes compartilhadas de renderizacao.
- `assets/js/main.js`: comportamento da home.
- `assets/js/post.js`: comportamento da pagina individual.
- `assets/media/`: pasta sugerida para videos e imagens locais.

## Como abrir

1. Abra `index.html` no navegador.
2. Se preferir, rode um servidor local simples com `python -m http.server` dentro da pasta do projeto.

## Como adicionar uma nova postagem

1. Abra `assets/js/posts.js`.
2. Duplique um objeto existente dentro de `window.BLOG_POSTS`.
3. Altere `slug`, `title`, `category`, `format`, `date`, `excerpt`, `intro`, `tags` e `blocks`.
4. Salve o arquivo e recarregue o navegador.

## Blocos suportados

### Texto simples

```js
{ type: "paragraph", content: "Seu texto aqui." }
```

### Lista

```js
{
  type: "list",
  title: "Pontos principais",
  items: ["Item 1", "Item 2", "Item 3"]
}
```

### Video incorporado

```js
{
  type: "embed",
  embedKind: "youtube",
  title: "Video da atividade",
  src: "https://www.youtube.com/embed/SEU_VIDEO",
  description: "Descricao opcional."
}
```

### Video local

```js
{
  type: "video",
  title: "Demonstracao",
  src: "assets/media/meu-video.mp4",
  mimeType: "video/mp4"
}
```

### Tinkercad

```js
{
  type: "embed",
  embedKind: "tinkercad",
  title: "Projeto no Tinkercad",
  src: "https://www.tinkercad.com/embed/SEU_PROJETO",
  description: "Protótipo interativo incorporado no blog."
}
```

### Projeto com links

```js
{
  type: "project",
  kicker: "Projeto",
  title: "Nome do projeto",
  summary: "Resumo do objetivo e do resultado.",
  technologies: ["Arduino", "HTML", "JavaScript"],
  links: [
    { label: "Repositorio", url: "https://github.com/seu-projeto" },
    { label: "Demo", url: "https://seu-site.com" }
  ]
}
```

## Sugestao de uso

- Troque os textos entre colchetes pelos seus dados pessoais e detalhes reais dos projetos.
- Coloque imagens e videos proprios em `assets/media`.
- Se quiser publicar online, voce pode subir esta pasta para GitHub Pages, Netlify ou Vercel sem backend.
