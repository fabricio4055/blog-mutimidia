(function () {
  const posts = window.BlogApp.sortPosts(window.BLOG_POSTS || []);

  const postsGridElement = document.getElementById("posts-grid");
  const emptyStateElement = document.getElementById("empty-state");
  const resultsCountElement = document.getElementById("results-count");

  const renderPosts = () => {
    postsGridElement.innerHTML = posts.map((post) => window.BlogApp.renderCard(post)).join("");
    emptyStateElement.hidden = posts.length > 0;
    resultsCountElement.textContent = `Mostrando todas as ${posts.length} postagens do blog.`;
  };

  renderPosts();
})();
