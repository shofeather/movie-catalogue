class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this.clickEvent = event;
    this.render();
  }

  render() {
    this.innerHTML = `
        <a href="#content" class="skip-link">Skip to Content</a>
            <a href="index.html" class="header-title">
            <img src="header.png"
            alt="Header">
            </a>
            <button id="hamburgerButton" aria-label="Nav Bar">☰</button>
            <nav class="nav">
              <ul class="nav-list">
                <li class="nav-item"><a href="#/">Home</a></li>
                <li class="nav-item"><a href="#/favorite">Favorite</a></li>
                <li class="nav-item"><a href="https://github.com/shofeather/" target="_blank">About</a></li>
              </ul>
            </nav>
      `;
  }
}

customElements.define('app-bar', AppBar);
