import "./style.css";

document.querySelector("#app").innerHTML = `
  <div class="app-shell">
    <aside class="sidebar">
      <div class="brand">
        <div class="brand-mark">W</div>
        <div>
          <strong>WORK</strong>
          <span>DASHBOARD</span>
        </div>
      </div>

      <div class="sidebar-section">
        <small>NAVIGATION</small>
        <div class="nav-placeholder active"><span></span> Dashboard</div>
        <div class="nav-placeholder"><span></span> Menu Placeholder</div>
        <div class="nav-placeholder"><span></span> Menu Placeholder</div>
      </div>

      <div class="sidebar-bottom">
        <div class="nav-placeholder"><span></span> Settings</div>
      </div>
    </aside>

    <section class="workspace">
      <header class="topbar">
        <div class="topbar-left">
          <button class="mobile-menu" aria-label="Menu">☰</button>
          <div>
            <small>WORKSPACE</small>
            <h1>Dashboard</h1>
          </div>
        </div>
        <div class="topbar-right">
          <div class="search-placeholder">Search...</div>
          <div class="icon-placeholder">●</div>
          <div class="profile-placeholder"></div>
        </div>
      </header>

      <main class="content">
        <div class="page-head">
          <div>
            <span class="eyebrow">OVERVIEW</span>
            <h2>Workspace</h2>
            <p>Area utama untuk seluruh fitur kerja.</p>
          </div>
          <div class="date-placeholder">19 SEP 2026</div>
        </div>

        <section class="empty-grid">
          <div class="panel panel-large"></div>
          <div class="panel"></div>
          <div class="panel"></div>
          <div class="panel panel-wide"></div>
        </section>
      </main>
    </section>
  </div>
`;

const mobileMenu = document.querySelector(".mobile-menu");
const sidebar = document.querySelector(".sidebar");
mobileMenu.addEventListener("click", () => sidebar.classList.toggle("open"));
