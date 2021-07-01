import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './Slider.css';
import music from './images/music.jpg'
import film from './images/movie2.jpg'
import documentary from './images/documentary2.jpg'

// const slideImages = [
//     'music.JPG',
//     'images/movie.jpg',
//     'images/documentary.jpg',
//   ];


const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
          <div className="each-slide">
          <div style={{'backgroundImage': `url(${music})`}}>
              <span>
              <h5 className="post-title"><span class="half-color" attribute="W">W</span>
                <span class="half-color" attribute="E">E</span>
                <span class="half-color" attribute="-">-</span>
                <span class="half-color" attribute="F">F</span>
                <span class="half-color" attribute="R">R</span>
                <span class="half-color" attribute="I">I</span><span> </span>Music Production</h5>
              </span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${film})`}}>
            <span>
              <h5 className="post-title"><span class="half-color" attribute="W">W</span>
                <span class="half-color" attribute="E">E</span>
                <span class="half-color" attribute="-">-</span>
                <span class="half-color" attribute="F">F</span>
                <span class="half-color" attribute="R">R</span>
                <span class="half-color" attribute="I">I</span><span> </span>Film Production</h5>
              </span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${documentary})`}}>
            <span>
              <h5 className="post-title"><span class="half-color" attribute="W">W</span>
                <span class="half-color" attribute="E">E</span>
                <span class="half-color" attribute="-">-</span>
                <span class="half-color" attribute="F">F</span>
                <span class="half-color" attribute="R">R</span>
                <span class="half-color" attribute="I">I</span><span> </span>Documentary</h5>
              </span>
            </div>
          </div>
        </Slide>
      </div>
    )
};
export default Slideshow;

