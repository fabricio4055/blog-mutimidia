(function () {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug") || "";
  const post = window.BlogApp.getPostBySlug(slug);
  const headerElement = document.getElementById("post-header");
  const bodyElement = document.getElementById("post-body");
  const postInfoElement = document.getElementById("post-info");
  const relatedPostsElement = document.getElementById("related-posts");
  const relatedSectionElement = document.getElementById("related-section");

  if (!post) {
    document.title = "Postagem nao encontrada | Laboratorio de Midias";
    headerElement.innerHTML = `
      <article class="article-header" style="${window.BlogApp.getAccentStyle("clay")}">
        <p class="eyebrow">Erro</p>
        <h1>Postagem nao encontrada</h1>
        <p class="article-intro">O link acessado nao corresponde a uma postagem disponivel no blog.</p>
      </article>
    `;
    bodyElement.innerHTML = "";
    postInfoElement.innerHTML = `
      <h2>Navegacao</h2>
      <p class="sidebar-note">Volte para a pagina inicial e escolha uma postagem existente.</p>
    `;
    relatedSectionElement.hidden = true;
    return;
  }

  document.title = `${post.title} | Laboratorio de Midias e Tecnologias`;

  headerElement.innerHTML = `
    <article class="article-header" style="${window.BlogApp.getAccentStyle(post.accent)}">
      <p class="eyebrow">${window.BlogApp.escapeHTML(post.category)}</p>
      <h1>${window.BlogApp.escapeHTML(post.title)}</h1>
      <p class="article-meta-line">
        ${window.BlogApp.escapeHTML(window.BlogApp.formatDate(post.date))} - ${window.BlogApp.escapeHTML(post.readingTime)} - ${window.BlogApp.escapeHTML(window.BlogApp.formatLabels[post.format] || post.format)}
      </p>
      <p class="article-intro">${window.BlogApp.escapeHTML(post.intro || post.excerpt)}</p>
    </article>
  `;

  bodyElement.innerHTML = window.BlogApp.renderArticle(post);

  postInfoElement.innerHTML = `
    <h2>Sobre esta postagem</h2>
    <ul class="sidebar-list">
      <li>
        <span>Categoria</span>
        <strong>${window.BlogApp.escapeHTML(post.category)}</strong>
      </li>
      <li>
        <span>Formato</span>
        <strong>${window.BlogApp.escapeHTML(window.BlogApp.formatLabels[post.format] || post.format)}</strong>
      </li>
      <li>
        <span>Leitura</span>
        <strong>${window.BlogApp.escapeHTML(post.readingTime)}</strong>
      </li>
    </ul>
  `;

  const relatedPosts = window.BlogApp
    .sortPosts(window.BLOG_POSTS || [])
    .filter((candidate) => candidate.slug !== post.slug && (candidate.category === post.category || (candidate.tags || []).some((tag) => (post.tags || []).includes(tag))))
    .slice(0, 4);

  if (!relatedPosts.length) {
    relatedPostsElement.innerHTML = `<p class="sidebar-note">Nenhuma postagem relacionada encontrada.</p>`;
    return;
  }

  relatedPostsElement.innerHTML = relatedPosts
    .map((relatedPost) => window.BlogApp.renderCard(relatedPost, { compact: true }))
    .join("");
})();
