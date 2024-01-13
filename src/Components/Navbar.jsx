import React from 'react'
import Button from 'react-bootstrap/Button';
import eXStore from '../assets/eXStore.png';

function Navbar() {
  return (
    <div>
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container px-4 px-lg-5">
            <a class="navbar-brand" href="#!">
            <img src={eXStore} alt="Your Image Alt Text" />
            </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li class="nav-item"><a class="nav-link active" aria-current="page" href="#!">Games</a></li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Browse Games</a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#!">All Games</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="#!">Popular Games</a></li>
                                <li><a class="dropdown-item" href="#!">New Arrivals</a></li>
                            </ul>
                        </li>
                        <li class="nav-item"><a class="nav-link" href="#!">Store</a></li>
                        
                    </ul>
                    <form class="d-flex">
                        <Button variant="primary" style={{marginRight:"20%"}}>Signup</Button>
                        <button  class="btn btn-outline-light" type="submit">
                          Login
                            
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar