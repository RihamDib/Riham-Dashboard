$(document).ready((function(){var a;console.log("ready!"),gsap.registerPlugin(DrawSVGPlugin),gsap.timeline().add((a=gsap.timeline(),a.from("#top-line",{duration:1,y:1e3}),a.from("#Path",{duration:.7,drawSVG:"0%"}),a.from("#Path-2",{duration:.7,drawSVG:"0%"}),a.from("#logo-oval",{duration:.5,x:-1e3,rotate:-660,repeat:0,transformOrigin:"center center"},"logo"),a.from("#logo-oval2",{duration:.5,x:1e3,rotate:-660,repeat:0,transformOrigin:"center center"},"logo"),a.from("#Path-3",{duration:.7,drawSVG:"0%"},"volkswagen"),a.from("#Path-4",{duration:.7,drawSVG:"0%"},"volkswagen"),a.from("#Path-5",{duration:.7,drawSVG:"0%"},"volkswagen"),a.from("#Path-6",{duration:.7,drawSVG:"0%"},"volkswagen"),a.from("#Path-7",{duration:.7,drawSVG:"0%"},"volkswagen"),a.from("#r",{duration:.7,drawSVG:"0%"},"volkswagen"),a.from("#c",{duration:.7,drawSVG:"0%"},"volkswagen"),a.from("#Oval",{duration:1,drawSVG:"0%"},"left"),a.from("#degrees",{duration:1,drawSVG:"0%"},"left"),a.from("#temperature",{duration:1,drawSVG:"0%"},"left"),a.from("#compass-dash",{duration:1,alpha:0},"left"),a.from("#N",{duration:1,alpha:0},"left"),a.from("#S",{duration:1,alpha:0},"left"),a.from("#E",{duration:1,alpha:0},"left"),a.from("#W",{duration:1,alpha:0},"left"),a)).add(function(){var a=gsap.timeline();return a.from("#map",{duration:1,alpha:0}),a.from("#Path-9",{duration:.7,alpha:0},"map"),a.from("#Path-28",{duration:.7,alpha:0},"map"),a.from("#Path-21",{duration:.7,alpha:0},"map"),a.from("#Path-20",{duration:.7,alpha:0},"map"),a.from("#Path-30",{duration:.7,alpha:0},"map"),a.from("#Path-8",{duration:1,drawSVG:"0%"},"map"),a.from("#Path-29",{duration:1,drawSVG:"0%"},"road"),a.from("#Path-14",{duration:1,drawSVG:"0%"},"road"),a.from("#Path-25",{duration:1,drawSVG:"0%"},"road"),a.from("#Path-24",{duration:1,drawSVG:"0%"},"road"),a.from("#Path-23",{duration:1,drawSVG:"0%"},"road"),a.from("#Path-22",{duration:1,drawSVG:"0%"},"road"),a.from("#Path-19",{duration:1,drawSVG:"0%"},"road"),a.from("#Path-18",{duration:1,drawSVG:"0%"},"road"),a.from("#Path-17",{duration:1,drawSVG:"0%"},"road"),a.from("#Path-16",{duration:1,drawSVG:"0%"},"road"),a.from("#Path-13",{duration:1,drawSVG:"0%"},"road"),a.from("#Path-10",{duration:1,drawSVG:"0%"},"road"),a.from("#Rectangle",{duration:1,drawSVG:"0%"},"road"),a}()).add(function(){var a=gsap.timeline();return a.from("#speed",{duration:.8,x:-1e3,rotate:-660,repeat:0,transformOrigin:"center center"}),a.from("#rmin",{duration:.9,x:-1e3,rotate:-660,repeat:0,transformOrigin:"center center"}),a.from("#fuel",{duration:1,x:-1e3,rotate:-660,repeat:0,transformOrigin:"center center"}),a}())}));