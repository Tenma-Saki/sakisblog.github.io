document.writeln("	<link rel=\'shortcut icon\' href=\'images/favicon.ico\' type=\'image/x-icon\'>");
document.writeln("	<link rel=\'icon\' href=\'images/favicon.ico\' type=\'image/x-icon\'>");
document.writeln("  ");
document.writeln("	<!-- # Google Fonts -->");
//document.writeln("	<link rel=\'preconnect\' href=\'https://fonts.googleapis.com\'>");
//document.writeln("	<link rel=\'preconnect\' href=\'https://fonts.gstatic.com\' crossorigin>");
//document.writeln("	<link href=\'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@100..900&display=swap\' rel=\'stylesheet\'>");
document.writeln("	<link href=\'https://fonts.font.im/css2?family=Noto+Sans+SC:wght@100..900&display=swap\' rel=\'stylesheet\'>");
document.writeln("	");
document.writeln("	<!-- # CSS Plugins -->");
document.writeln("	<link rel=\'stylesheet\' href=\'plugins/bootstrap/bootstrap.min.css\'>");
document.writeln("");
document.writeln("	<!-- # Main Style Sheet -->");
document.writeln("	<link rel=\'stylesheet\' href=\'css/style.css\'>");
document.writeln("</head>");
document.writeln("");
document.writeln("<body>");
document.writeln("");
document.writeln("<header class=\'navigation\'>");
document.writeln("  <div class=\'container\'>");
document.writeln("    <nav class=\'navbar navbar-expand-lg navbar-light px-0\'>");
document.writeln("      <a class=\'navbar-brand order-1 py-0\' href=\'index.html\'>");
document.writeln("        <img loading=\'prelaod\' decoding=\'async\' class=\'img-fluid\' src=\'images/logo.png\' alt=\'Reporter Hugo\'>");
document.writeln("      </a>");
document.writeln("      <div class=\'navbar-actions order-3 ml-0 ml-md-4\'>");
document.writeln("        <button aria-label=\'navbar toggler\' class=\'navbar-toggler border-0\' type=\'button\' data-toggle=\'collapse\'");
document.writeln("          data-target=\'#navigation\'> <span class=\'navbar-toggler-icon\'></span>");
document.writeln("        </button>");
document.writeln("      </div>");
document.writeln("      <form action=\'https://www.baidu.com/s\' method=\'get\' target=\'_blank\' class=\'search order-lg-3 order-md-2 order-3 ml-auto\'>");
document.writeln("        <input id=\'search-query\' name=\'wd\' type=\'search\' placeholder=\'搜索站内文章...\' autocomplete=\'off\'>");
document.writeln("		<input name=\'tn\' type=\'hidden\' value=\'bds\'>");
document.writeln("		<input name=\'cl\' type=\'hidden\' value=\'3\'>");
document.writeln("		<input name=\'ct\' type=\'hidden\' value=\'2097152\'>");
document.writeln("		<input name=\'si\' type=\'hidden\' value=\'blog.tenmasaki.top\'>");
document.writeln("      </form>");
document.writeln("      <div class=\'collapse navbar-collapse text-center order-lg-2 order-4\' id=\'navigation\'>");
document.writeln("        <ul class=\'navbar-nav mx-auto mt-3 mt-lg-0\'>");
document.writeln("		  <li class=\'nav-item\'>");
document.writeln("		   <a class=\'nav-link\' href=\'index.html\'>主页</a>");
document.writeln("          </li>");
document.writeln("          <li class=\'nav-item\'>");
document.writeln("		   <a class=\'nav-link\' href=\'about.html\'>关于我</a>");
document.writeln("          </li>");
document.writeln("          <li class=\'nav-item dropdown\'> ");
document.writeln("			<a class=\'nav-link dropdown-toggle\' href=\'articles.html\' role=\'button\'");
document.writeln("              data-toggle=\'dropdown\' aria-haspopup=\'true\' aria-expanded=\'false\'>");
document.writeln("              文章");
document.writeln("            </a>");
document.writeln("            <div class=\'dropdown-menu\'> ");
document.writeln("			  <a class=\'dropdown-item\' href=\'pjsk.html\'>啤酒烧烤</a>");
document.writeln("			  <a class=\'dropdown-item\' href=\'wows_devblog.html\'>WoWS开发日志(直营服)</a>");
document.writeln("              <a class=\'dropdown-item\' href=\'wows_comment.html\'>新船唠嗑</a>");
document.writeln("			  <a class=\'dropdown-item\' href=\'mc.html\'>Minecraft</a>");
document.writeln("			  <a class=\'dropdown-item\' href=\'#\'>更多板块开发中……</a>");
document.writeln("            </div>");
document.writeln("        </ul>");
document.writeln("      </div>");
document.writeln("    </nav>");
document.writeln("  </div>");
document.writeln("</header>");