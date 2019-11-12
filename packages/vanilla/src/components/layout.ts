export function Layout(children) {
  return `
    <section>
      <header>
        <nav>
          <a href="#" onclick="onClick('/')">Home</a>
          <a href="#" onclick="onClick('/movies')">Movies</a>
        </nav>
      </header>
      ${children}
    </section>
  `;
}
