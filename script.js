var tl = anime.timeline({ autoplay: false });
var tl2 = anime.timeline({ autoplay: false });
var names = anime.timeline({autoplay: false});

var pros = anime.timeline({autoplay: false});
var cons = anime.timeline({autoplay: false});

const addTransition = (relativeOffset, i = 1) => {
    if(i <= 3) {
      if (relativeOffset==pros) {
          addTransition(
            relativeOffset.add({
              targets: document.getElementsByClassName("prosLeft")[i-1],
              marginLeft: -50+"vw",
              easing: 'spring(1, 80, 10, 0)'
            }),
            i + 1
        )}
      else {
        addTransition(
            relativeOffset.add({
              targets: document.getElementsByClassName("consRight")[i-1],
              marginLeft: 0+"vw",
              easing: 'spring(1, 80, 10, 0)'
            }),
            i + 1
        )
      }
    }
}

function getScrollPercent() {
    var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
};
document.addEventListener('DOMContentLoaded', function() {
  addTransition(pros);
  addTransition(cons);
  anime({
    targets: ".headerText",
    marginTop: 5+"vh",
  });
  names.add({
    targets: "#names",
    left: 27+"vw",
    bottom: -60+"vh",
    easing: 'linear',
  });
  tl.add({
    targets: ".keyDiv1",
    marginLeft: -40+"vw",
    easing: 'linear'
  });
  tl.add({
    targets: ".keyDiv2",
    marginLeft: 40+"vw",
    easing: 'linear'
  });
  tl.add({
      targets: ".keyDiv3",
      marginLeft: -40+"vw",
      easing: 'linear'
    });
  tl2.add({
    targets: ".key1",
    opacity: 1,
    easing: "linear"
  });
  tl2.add({
    targets: ".key2",
    opacity: 1,
    easing: "linear"
  });
  tl2.add({
    targets: ".key3",
    opacity: 1,
    easing: "linear"
  });
  
  pros.play();
  cons.play();
}, false);
window.onscroll = function() {
  tl.seek(tl.duration * (getScrollPercent() * 0.01));
  tl2.seek(tl.duration * (getScrollPercent() * 0.01));
  if((getScrollPercent()/100 * window.innerHeight) >= (.50 * window.innerHeight))
  {names.play();}
}