// Tamino Martinius - All rights reserved

// Copyright © 2013 Tamino Martinius (http://zaku.eu)
// Copyright © 2013 Particleslider.com (http://particleslider.com

// Terms of usage: http://particleslider.com/legal/license

var init = function () {
  var isMobile = navigator.userAgent &&
    navigator.userAgent.toLowerCase().indexOf('mobile') >= 0;
  var isSmall = window.innerWidth < 1000;

  var ps = new ParticleSlider({
    ptlGap: isMobile || isSmall ? 3 : 1,
    ptlSize: isMobile || isSmall ? 3 : 2,
    width: 1e9,
    height: 1e9,
    mouseForce: 400,
  });

  /*var gui = new dat.GUI();
  gui.add(ps, 'ptlGap').min(0).max(5).step(1).onChange(function(){
    ps.init(true);
  });
  gui.add(ps, 'ptlSize').min(1).max(5).step(1).onChange(function(){
    ps.init(true);
  });
  gui.add(ps, 'restless');
  gui.addColor(ps, 'color').onChange(function(value){
    ps.monochrome = true;
    ps.setColor(value);
      ps.init(true);
  });*/


  (window.addEventListener
    ? window.addEventListener('click', function () { ps.init(true) }, false)
    : window.onclick = function () { ps.init(true) });
}

var initParticleSlider = function () {
  var psScript = document.createElement('script');
  (psScript.addEventListener
    ? psScript.addEventListener('load', init, false)
    : psScript.onload = init);
  psScript.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/23500/ps-0.9.js';
  psScript.setAttribute('type', 'text/javascript');
  document.body.appendChild(psScript);
}

(window.addEventListener ? window.addEventListener('load', initParticleSlider, false) : window.onload = initParticleSlider);

document.querySelector('.outer-nav--return').addEventListener('click', ()=>{
  // debugger;
  let particleSlider = document.querySelector('#particle-slider');
  particleSlider.querySelectorAll('canvas').forEach(canvasElement => {
    canvasElement.remove();
  });
  let canvas=document.createElement("canvas");
  canvas.classList.add('draw');
  particleSlider.appendChild(canvas);
  setTimeout(()=>{
    var init = function () {
      var isMobile = navigator.userAgent &&
        navigator.userAgent.toLowerCase().indexOf('mobile') >= 0;
      var isSmall = window.innerWidth < 1000;
    
      var ps = new ParticleSlider({
        ptlGap: isMobile || isSmall ? 3 : 1,
        ptlSize: isMobile || isSmall ? 3 : 2,
        width: 1e9,
        height: 1e9,
        mouseForce: 400,
      });
      
      (window.addEventListener
        ? window.addEventListener('click', function () { ps.init(true) }, false)
        : window.onclick = function () { ps.init(true) });
    }
    
    var initParticleSlider = function () {
      var psScript = document.createElement('script');
      (psScript.addEventListener
        ? psScript.addEventListener('load', init, false)
        : psScript.onload = init);
      psScript.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/23500/ps-0.9.js';
      psScript.setAttribute('type', 'text/javascript');
      document.body.appendChild(psScript);
    }
    
    (window.addEventListener ? window.addEventListener('load', initParticleSlider, false) : window.onload = initParticleSlider);
  }, 1000);
})