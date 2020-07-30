import React from 'react';
import './App.css';

import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header />
      
      <div class="stage stage1">
          <span>stage1: Hey heres the description</span>
          {/* <!-- intro & first descripion --> */}
          {/* <!-- header big --> */}
          {/* <!-- start button --> */}
      </div>
      <div class="stage stage2">
          <span>stage2: Set the scene here's a little blurb that helps you get into the right mindset and think about what you're looking for</span>
          {/* <!-- header smaller -->
          <!-- set scene  -->
          <!-- blow out candle --> */}
          <div>

              <div class="holder">
                  {/* <!-- html/css for candle was taken and adapted from https://www.youtube.com/watch?v=W3HwYLZEoCI  --> */}
                  <div class="candle">
                      <div class="blinking-glow"></div>
                      <div class="thread"></div>
                      <div class="glow"></div>
                      <div class="flame"></div>
      
                  </div>
              </div>
          </div>
      </div>
      <div class="stage stage3">
          <span>stage3: descripion about </span>
          {/* <!-- pick 3 cards/ 3 cards layed out -->
          <!-- modal for each card -->
              <!-- modal had card title, picture, description -->
          <!-- modal  -->
          <!-- end button  --> */}
      </div>
      <div class="stage stage4">
          <span>stage4 </span>
          {/* <!-- so mote it be --> */}
      </div>
    </div>
    
  );
}

export default App;
