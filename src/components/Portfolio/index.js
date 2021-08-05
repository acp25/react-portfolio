import React from 'react';
import CodeQuiz from "../../assets/images/cqpic.PNG";
import NoteTaker from "../../assets/images/notepic.PNG";
import WeatherDashboard from "../../assets/images/wdpic.PNG";
import Tunescope from "../../assets/images/tspic2.PNG";
import FitnessTracker from "../../assets/images/ftpic.PNG";
import Crumbs from "../../assets/images/crumbpic.PNG";

function Portfolio() {
  return (
    <section class="portfolio">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4">
        <div class="col">
          <div class="card">
            <img
              src={Tunescope}
              alt="tunescope"
              class="card-img-top"
            />
            <div class="card-body">

              <a href="https://github.com/acp25/TUNESCOPE" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://nameless-cliffs-89877.herokuapp.com/explore" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>


        <div class="col">
          <div class="card">
            <img
              src={FitnessTracker}
              alt="Workout Tracker"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="https://github.com/acp25/workout-tracking" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://vast-chamber-38747.herokuapp.com/" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img
              src={Crumbs}
              alt="crumb"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="https://github.com/acp25/crumbs-food-app" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://acp25.github.io/crumbs-food-app" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>


        <div class="col">
          <div class="card">
            <img
              src={CodeQuiz}
              alt="quiz"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="https://github.com/acp25/Code-Quiz.git" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://acp25.github.io/Code-Quiz" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img
              src={NoteTaker}
              alt="Notes"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="https://github.com/acp25/note-taker" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://morning-shore-59393.herokuapp.com/" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img
              src={WeatherDashboard}
              alt="Coming Soon"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="https://github.com/acp25/weather-dashboard" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://acp25.github.io/weather-dashboard" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>


      </div>
    </section>


  );
}

export default Portfolio;
