import React from "react";

const NewsBullet = (props) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand bg-white" href="#">
          <span className="text-primary fw-4">FlameTech</span>Mag
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end "
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <button onClick={() => props.setCategory("general")}>
                General
              </button>
            </li>

            <li class="nav-item">
              <button onClick={() => props.setCategory("technology")}>
                Technology
              </button>
            </li>
            <li class="nav-item">
              <button onClick={() => props.setCategory("sport")}>Sport</button>
            </li>
            <li class="nav-item">
              <button onClick={() => props.setCategory("Business")}>
                Business
              </button>
            </li>
            <li class="nav-item">
              <button onClick={() => props.setCategory("science")}>
                Science
              </button>
            </li>
            <li class="nav-item">
              <button onClick={() => props.setCategory("Health")}>
                Health
              </button>
            </li>
            <li class="nav-item">
              <button onClick={() => props.setCategory("entertainment")}>
                Entertainment
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    // <div>
    //   <button onClick={() => props.setCategory("general")}>General</button>
    //   <button onClick={() => props.setCategory("technology")}>
    //     Technology
    //   </button>
    //   <button onClick={() => props.setCategory("sport")}>Sport</button>
    //   <button onClick={() => props.setCategory("Business")}>Business</button>
    //   <button onClick={() => props.setCategory("science")}>Science</button>
    //   <button onClick={() => props.setCategory("Health")}>Health</button>
    //   <button onClick={() => props.setCategory("entertainment")}>
    //     Entertainment
    //   </button>
    // </div>
  );
};

export default NewsBullet;
