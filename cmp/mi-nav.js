class MiNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<ul>
        <li>
          <a href="index.html">
            Inicio</a>
        </li>
        <li>
          <a href="speaking.html">
            Speaking</a>
        </li>
        <li>
          <a href="reading.html">
            Reading</a>
        </li>
        <li>
          <a href="listening.html">
            Listening</a>
        </li>
        <li>
          <a href="writing.html">
            Writing</a>
        </li>
      </ul>`;
    this.ul =
      this.querySelector("ul");
  }

}

customElements.define("mi-nav", MiNav);
