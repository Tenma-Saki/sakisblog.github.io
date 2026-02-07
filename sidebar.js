// 推荐阅读模块 - 直接通过document.writeln输出
(function() {
    // 构建推荐阅读的HTML结构
    const recommendReadingHTML = `
<div class="col-lg-4">
  <div class="widget-blocks">
    <div class="row">
      <div class="col-lg-12 col-md-6">
        <div class="widget">
          <h2 class="section-title mb-3">推荐阅读</h2>
          <div class="widget-body">
            <div class="widget-list">
              <article class="card mb-4">
                <div class="card-image">
                  <div class="post-info"> <span class="text-uppercase">MAKINO STREAM</span>
                  </div>
                  <img loading="lazy" decoding="async" src="https://gh-proxy.org/https://raw.githubusercontent.com/Tenma-Saki/sakisblog.github.io/refs/heads/main/images/author.png" alt="Post Thumbnail" class="w-100">
                </div>
                <div class="card-body px-0 pb-1">
                  <h3><a class="post-title post-title-sm" href="article.html"></a>关于我</h3>
                  <p class="card-text">田麻小溪是谁？是那个天天摸鱼的键盘手吗？</p>
                  <div class="content"> <a class="read-more-btn" href="about.html">阅读全文</a>
                  </div>
                </div>
              </article>
              <a class="media align-items-center" href="airirobo.html">
                <img loading="lazy" decoding="async" src="https://gh-proxy.org/https://raw.githubusercontent.com/Tenma-Saki/sakisblog.github.io/refs/heads/main/images/post/airirobo/airirobo.png" alt="Post Thumbnail" class="w-100">
                <div class="media-body ml-3">
                  <h3 style="margin-top:-5px">如何认领多功能QQ群机器人 - Momoi Airi</h3>
                  <p class="mb-0 small">包含战舰世界水表查询、Unibot、表情包制作等超多功能！……</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    `;

    // 核心：直接使用document.writeln输出HTML
    document.writeln(recommendReadingHTML);
})();