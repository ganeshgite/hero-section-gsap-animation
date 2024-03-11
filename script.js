// gsap code

var tl = gsap.timeline();
tl.to(".top-content", {
  rotateX: "90deg",
  opacity: 0,
  scrollTrigger: {
    scroller: "body",
    start: "5% 10%",
    top: "0%",
    trigger: ".part1 .top-content",
    markers: false,
    scrub: true,
  },
});
tl.to(".bottom-content", {
  rotateX: "-120deg",
  opacity: 0,
  transition: 0.1,
  scrollTrigger: {
    trigger: ".part1 .top-content",
    scroller: "body",
    start: "10% 15%",
    end: "100% 15%",
    markers: false,
    scrub: true,
  },
});

tl.to(".part1 .main-img ", {
  top: "30%",
  height: "100vh",
  width: "100%",
  scrollTrigger: {
    scroller: "body",
    start: "20% 10%",
    scrub: true,
    trigger: ".part1 .top-content",
    markers: false,
  },
});

tl.to(".part1 .main-img ", {
  top: "0%",

  scrollTrigger: {
    trigger: ".part1 .top-content p",
    scroller: "body",
    start: "40% 1%",
    scrub: true,
    markers: false,
  },
});
