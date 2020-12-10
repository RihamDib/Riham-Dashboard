$(document).ready(function () {
  console.log("ready!");

  // register plugin
  gsap.registerPlugin(DrawSVGPlugin);
  var mainTL = gsap.timeline();
 

  function headerAnimation() {
    var tl = gsap.timeline()
      gsap.from('#line', {duration: 1, opacity: 0, y:350})
      gsap.from('#title', {duration: 1, opacity: 0, y:-300})
  
      tl.from(
        "#logo-inner-circle",
        {
          duration: 1,
          x: -1000,
          repeat: 0,
          transformOrigin: "center center",
        },
        "logo"
      );
      tl.from(
        "#logo-outer-circle",
        {
          duration: 1,
          x: 1000,
          repeat: 0,
          transformOrigin: "center center",
        },
        "logo"
      );

      tl.from(
        "#logo-path-2",
        {
          duration: 1,
          y: 1000,
          rotate: -660,
          repeat: 0,
          transformOrigin: "center center",
        },
        "logo"
      );
    
      tl.from("#logo-path-1", {
        duration: 5,
        drawSVG: "0%",
      });
  }


  function speedometerAnimation() {
    var tl = gsap.timeline()
    tl.from('#speedometer', {duration: 2, opacity: 0, delay: 3})
    tl.fromTo("#pointer", {rotation: 0}, {rotation: 120, duration: 4, transformOrigin: '87% 55%', ease: 'elastic(0.9, 0.2)'})
  }
  
  function carAnimation(){
    var tl = gsap.timeline()
    tl.from(['#road', "#car"], {duration: 2, opacity: 0, delay: 3})
    tl.to("#car", {duration: 2, x:750, y:-200, ease: "power2.out"})
    
  }

  mainTL.add(headerAnimation()).add(speedometerAnimation()).add(carAnimation());
});
