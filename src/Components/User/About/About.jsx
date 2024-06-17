import React from "react";
import './About.css'
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div className="eg_about_page ">
        <div class="container">
          <div class="card About_card">
            <div className="inner_about">
            <div class="image-container">
              <img src="https://images.pexels.com/photos/4226256/pexels-photo-4226256.jpeg" alt="About Us" />
            </div>
            <div class="content">
              <h1>About Us</h1>
              <p>Front-end Developer & Designer</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Expedita natus ad sed harum itaque ullam enim quas, veniam
                accusantium, quia animi id eos adipisci iusto molestias
                asperiores explicabo cum vero atque amet corporis! Soluta illum
                facere consequuntur magni. Ullam dolorem repudiandae cumque
                voluptate consequatur consectetur, eos provident necessitatibus
                reiciendis corrupti!
              </p>
              <Link>
              <button className="btn_class">Explore More</button>
              </Link>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
