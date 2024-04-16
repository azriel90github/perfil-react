
export function Menu() {
    return (
        <header>
          <nav>
            <div className="nav-menu-btn">
              <i className="bx bx-menu" onclick="myMenuFunction()" />
            </div>
            <div className="nav-menu" id="navMenu">
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#jornada">Jornada</a>
                </li>
                <li>
                  <a
                    className="port-nav"
                    style={{ color: "#e6e6e6" }}
                    href="#portofolio"
                  >
                    Portofolio
                  </a>
                </li>
                <li>
                  <a href="#servicos">Serviços</a>
                </li>
                <li>
                  <a href="#contacto">Contactos</a>
                </li>
              </ul>
            </div>
            <p>
              Workspace.Suélio
              <i className="bx bx-user" />
            </p>
          </nav>
</header>


    );
}