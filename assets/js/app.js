(function () {
  const accentPalette = {
    emerald: { color: "#2f6f5f" },
    amber: { color: "#8a6a35" },
    clay: { color: "#8c5a4d" },
    aqua: { color: "#356f78" }
  };

  const formatLabels = {
    texto: "Texto",
    video: "Video",
    projeto: "Projeto",
    tinkercad: "Tinkercad"
  };

  const escapeHTML = (value) =>
    String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#39;");

  const formatDate = (isoDate) => {
    const date = new Date(`${isoDate}T12:00:00`);
    return new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric"
    }).format(date);
  };

  const getAccentStyle = (accent) => {
    const colors = accentPalette[accent] || accentPalette.emerald;
    return `--accent:${colors.color};`;
  };

  const slugToHref = (slug) => `post.html?slug=${encodeURIComponent(slug)}`;

  const isExternalUrl = (url) => /^https?:\/\//i.test(url);

  const sortPosts = (posts) =>
    [...posts].sort((left, right) => new Date(right.date) - new Date(left.date));

  const getUniqueValues = (posts, key) =>
    [...new Set(posts.map((post) => post[key]).filter(Boolean))].sort((a, b) => a.localeCompare(b, "pt-BR"));

  const renderTitle = (post, compact) => {
    const title = escapeHTML(post.title);
    const href = slugToHref(post.slug);

    if (compact) {
      return `<h3 class="post-title"><a href="${href}">${title}</a></h3>`;
    }

    return `<h2 class="post-title"><a href="${href}">${title}</a></h2>`;
  };

  const renderCard = (post, options = {}) => {
    const compact = Boolean(options.compact);
    const excerpt = compact ? "" : `<p class="post-excerpt">${escapeHTML(post.excerpt)}</p>`;
    const readLabel = compact ? "Abrir" : "Ler mais";

    return `
      <article class="post-card${compact ? " is-compact" : ""}" style="${getAccentStyle(post.accent)}">
        ${renderTitle(post, compact)}
        ${excerpt}
        <div class="post-card-footer">
          <span class="post-meta">${escapeHTML(formatDate(post.date))}</span>
          <a class="post-link" href="${slugToHref(post.slug)}">${readLabel}</a>
        </div>
      </article>
    `;
  };

  const renderSpecs = (block) => `
    <section class="content-section">
      ${block.title ? `<p class="section-kicker">${escapeHTML(block.title)}</p>` : ""}
      <div class="specs-grid">
        ${(block.items || [])
          .map(
            (item) => `
              <article class="spec-item">
                <span>${escapeHTML(item.label)}</span>
                <strong>${escapeHTML(item.value)}</strong>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;

  const renderCallout = (block) => `
    <section class="content-section">
      <article class="callout" data-tone="${escapeHTML(block.tone || "info")}" style="${getAccentStyle(block.accent || "emerald")}">
        <h3>${escapeHTML(block.title)}</h3>
        <p>${escapeHTML(block.content)}</p>
      </article>
    </section>
  `;

  const renderProject = (block) => `
    <section class="content-section">
      <article class="project-card" style="${getAccentStyle(block.accent || "emerald")}">
        <div>
          ${block.kicker ? `<p class="section-kicker">${escapeHTML(block.kicker)}</p>` : ""}
          <h3>${escapeHTML(block.title)}</h3>
          <p>${escapeHTML(block.summary)}</p>
        </div>
        ${(block.technologies || []).length
          ? `<div class="project-technologies">${(block.technologies || [])
              .map((technology) => `<span class="project-technology">${escapeHTML(technology)}</span>`)
              .join("")}</div>`
          : ""}
        ${(block.links || []).length
          ? `<div class="project-links">${(block.links || [])
              .map((link) => {
                const target = isExternalUrl(link.url) ? ' target="_blank" rel="noreferrer"' : "";
                return `<a class="project-link" href="${escapeHTML(link.url)}"${target}>${escapeHTML(link.label)}</a>`;
              })
              .join("")}</div>`
          : ""}
      </article>
    </section>
  `;

  const renderLinks = (block) => `
    <section class="content-section">
      <article class="links-block">
        ${block.title ? `<p class="links-title">${escapeHTML(block.title)}</p>` : ""}
        <div class="links-list">
          ${(block.items || [])
            .map((item) => {
              const target = isExternalUrl(item.url) ? ' target="_blank" rel="noreferrer"' : "";
              return `<a href="${escapeHTML(item.url)}"${target}>${escapeHTML(item.label)}</a>`;
            })
            .join("")}
        </div>
      </article>
    </section>
  `;

  const renderEmbed = (block) => {
    const title = block.title ? `<p class="embed-title">${escapeHTML(block.title)}</p>` : "";
    const description = block.description ? `<p class="embed-description">${escapeHTML(block.description)}</p>` : "";

    if (!block.src) {
      const helper = block.helperText || "Adicione a URL de incorporacao para ativar esta area.";

      return `
        <section class="content-section">
          <article class="embed-card">
            ${title}
            <div class="placeholder-shell">
              <div>
                <strong>${escapeHTML(block.placeholderTitle || "Espaco pronto para incorporacao")}</strong>
                <p>${escapeHTML(helper)}</p>
              </div>
            </div>
            ${description}
          </article>
        </section>
      `;
    }

    return `
      <section class="content-section">
        <article class="embed-card">
          ${title}
          <div class="embed-shell">
            <iframe
              src="${escapeHTML(block.src)}"
              title="${escapeHTML(block.title || "Conteudo incorporado")}"${block.embedKind === "youtube" ? " allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen" : ""}
              loading="lazy"
              referrerpolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
          ${description}
        </article>
      </section>
    `;
  };

  const renderVideo = (block) => {
    const title = block.title ? `<p class="embed-title">${escapeHTML(block.title)}</p>` : "";
    const description = block.description ? `<p class="embed-description">${escapeHTML(block.description)}</p>` : "";

    if (!block.src) {
      const helper = block.helperText || "Coloque um arquivo MP4 em assets/media e informe o caminho no campo src.";

      return `
        <section class="content-section">
          <article class="embed-card">
            ${title}
            <div class="placeholder-shell">
              <div>
                <strong>${escapeHTML(block.placeholderTitle || "Video local")}</strong>
                <p>${escapeHTML(helper)}</p>
              </div>
            </div>
            ${description}
          </article>
        </section>
      `;
    }

    return `
      <section class="content-section">
        <article class="embed-card">
          ${title}
          <div class="video-shell">
            <video controls preload="metadata" ${block.poster ? `poster="${escapeHTML(block.poster)}"` : ""}>
              <source src="${escapeHTML(block.src)}" type="${escapeHTML(block.mimeType || "video/mp4")}" />
              Seu navegador nao suporta reproducao de video.
            </video>
          </div>
          ${description}
        </article>
      </section>
    `;
  };

  const renderFigureMarkup = (block) => `
    <figure class="content-figure">
      <img src="${escapeHTML(block.src)}" alt="${escapeHTML(block.alt || block.caption || "Imagem da postagem")}" loading="lazy" />
      ${block.caption ? `<figcaption>${escapeHTML(block.caption)}</figcaption>` : ""}
    </figure>
  `;

  const renderFigure = (block) => {
    if (!block.src) {
      return "";
    }

    return `
      <section class="content-section">
        ${renderFigureMarkup(block)}
      </section>
    `;
  };

  const renderGallery = (block) => `
    <section class="content-section">
      ${block.title ? `<p class="section-kicker">${escapeHTML(block.title)}</p>` : ""}
      <div class="gallery-grid">
        ${(block.images || []).filter((image) => image.src).map((image) => renderFigureMarkup(image)).join("")}
      </div>
    </section>
  `;

  const renderBlock = (block) => {
    switch (block.type) {
      case "heading":
        return `<section class="content-section"><h2>${escapeHTML(block.content)}</h2></section>`;
      case "paragraph":
        return `<section class="content-section"><p>${escapeHTML(block.content)}</p></section>`;
      case "list":
        return `
          <section class="content-section">
            ${block.title ? `<h2>${escapeHTML(block.title)}</h2>` : ""}
            <ul>${(block.items || []).map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul>
          </section>
        `;
      case "quote":
        return `
          <section class="content-section">
            <blockquote class="quote-block" style="${getAccentStyle(block.accent || "emerald")}">
              <p>${escapeHTML(block.content)}</p>
              ${block.author ? `<footer>${escapeHTML(block.author)}</footer>` : ""}
            </blockquote>
          </section>
        `;
      case "callout":
        return renderCallout(block);
      case "specs":
        return renderSpecs(block);
      case "embed":
        return renderEmbed(block);
      case "video":
        return renderVideo(block);
      case "project":
        return renderProject(block);
      case "links":
        return renderLinks(block);
      case "image":
        return renderFigure(block);
      case "gallery":
        return renderGallery(block);
      default:
        return "";
    }
  };

  const renderArticle = (post) => `
    <article class="article-card" style="${getAccentStyle(post.accent)}">
      <div class="article-body">
        ${post.blocks.map((block) => renderBlock(block)).join("")}
      </div>
    </article>
  `;

  const getPostBySlug = (slug) => (window.BLOG_POSTS || []).find((post) => post.slug === slug);

  const getBlogStats = (posts) => ({
    total: posts.length,
    categories: getUniqueValues(posts, "category").length,
    formats: getUniqueValues(posts, "format").length
  });

  window.BlogApp = {
    formatLabels,
    escapeHTML,
    formatDate,
    getAccentStyle,
    getBlogStats,
    getPostBySlug,
    getUniqueValues,
    renderArticle,
    renderCard,
    slugToHref,
    sortPosts
  };
})();
