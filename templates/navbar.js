export const templateNavbar = `
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="/">Práctica 4</a>
    
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Menu
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="/">Home</a>
          <a class="dropdown-item" href="/login.html">Log In</a>
          <a class="dropdown-item" href="/signup.html">Sign Up</a>
        </div>
      </div>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <a class="nav-link" href="/">Home<span class="sr-only"></span></a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="/login.html">Log In<span class="sr-only"></span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/signup.html">Sign Up</a>
        </li>
      </ul>
    </div>
  </nav>
`;
