export const templateNavbar = `
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="/">Práctica 4</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home<span class="sr-only"></span></a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="#">Sign In<span class="sr-only"></span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Sign Up</a>
        </li>
      </ul>
    </div>
  </nav>`;
