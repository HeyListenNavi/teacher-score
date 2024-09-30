class Header extends HTMLElement {
    constructor() {
        super();
        this.outerHTML = `
            <nav class="navbar bg-primary shadow-sm">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">
                        <img src="/assets/logo-placeholder.png" alt="Logo" height="60px" class="d-inline-block align-text-top">
                    </a>
                    <button class="btn btn-light fw-bold" type="button">Registra tu escuela</button>
                </div>
            </nav>
        `;
    }
}

customElements.define("header-component", Header);