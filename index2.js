let cur = document.querySelector(".cursor")
document.addEventListener("mousemove", function(dets) {
    cur.style.left = dets.x + "px"
    cur.style.top = dets.y + "px"

})
let curblur = document.querySelector(".blur")
document.addEventListener("mousemove", function(dets) {
    curblur.style.left = dets.x - 250 + "px"
    curblur.style.top = dets.y - 250 + "px"

})
gsap.to(".nav ", {
    backgroundColor: 'black',
    height: '150px',
    duration: 0.5,
    scrollTrigger: {
        trigger: ".nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1

    }

})
gsap.to(".main", {
    backgroundColor: "black",
    scrollTrigger: {
        trigger: ".main",
        scroller: "body",
        // markers: true,
        start: "top -25%",
        end: "top -75%",
        scrub: 2

    }
})