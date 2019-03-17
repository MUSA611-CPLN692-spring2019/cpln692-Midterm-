var map = L.map('map', {
  center: [39.9822, -75.1339],
  zoom: 12

});
var Stamen_TonerLite = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
  attribution: '<a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &#124; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);

const slideDeck = [{
  id: 1,
  name: "first slide",
  html: `
  <h1>First Slide</h1>
  <p>Text for first slide</p>
  `,
  center: [39.9822, -75.1339],
  zoom : 12
},{
  id: 2,
  name: "second slide",
  html: `
  <h1>Second Slide</h1>
  <p>Text for second slide</p>
  `,
  center: [39.9821, -75.1340],
  zoom : 13
},{
  id: 3,
  name: "third slide",
  html: `
  <h1>Third Slide</h1>
  <p>Text for third slide</p>
  `,
  center: [39.9821, -75.1340],
  zoom : 13
}];

var slideSetup = function(slideDeck) {
  slideshow = {
    deck   : slideDeck,
    ids    : [],
    current: -1
  };

  for (let n = 0; n < slideshow.deck.length; n++) {
    let slide = slideshow.deck[n];
    slideshow.ids.push(String(slide.id));
    $('.content').append(`
      <div class="slide n${n}">${slide.html}</div>
    `);
    $('.bar').before(`
      <div class="control n${n} hide">${slide.id}</div>
    `);
  };
}
var slideControl = function(index) {
  let i = typeof index === 'number',    // e.g. 0, 1, 2
      x = typeof index === 'string';    // e.g. left, next

  // do control action (change current slide)
  let newslide = slideshow.current;
  if (i) {
    newslide = index;
  } else if (x) {
      switch (index.charAt(0)) {
        case 'l': case 'p': case 'b': case '<':
          newslide -= 1;
          break;
        case 'r': case 'n': case 'f': case '>':
          newslide += 1;
          break;
      }
  } else {
    newslide = 0;
  }

  // fix negative or too large indices
  if (newslide < 0) {newslide = 0}
  if (newslide > slideshow.deck.length - 1) {newslide = slideshow.deck.length - 1;}

  // adjust slide and control
  if (slideshow.current !== newslide) {
    $('.slide,.control').removeClass('active');
    $('.n'+newslide).addClass('active');

    $('.control').removeClass('hide');
    switch (slideshow.newslide) {
      case 0: $('.control.left').addClass('hide'); break;
      case (slideshow.deck.length-1):
        $('.control.right').addClass('hide'); break;
    }

    slideshow.current = newslide;
  }

}

var slideshow;
slideSetup(slideDeck);
$('.sidebar-container').one('click',function(){
  slideControl();
  $('.loading').remove();
  $('.left.control').click(function(){slideControl('left')});
  $('.right.control').click(function(){slideControl('right')});
  for (let n = 0; n < slideshow.deck.length; n++) {
    $('.control.n'+n).click(function(){slideControl(n)});
  }
});
