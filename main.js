//Import map

var map = L.map('map', {
        center: [35.2271, -80.8431],
        zoom: 12
      });
var Stamen_TonerLite = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
	      attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      	subdomains: 'abcd',
      	minZoom: 0,
      	maxZoom: 20,
      	ext: 'png'
      }).addTo(map);

// create the slides
var slides = [
  {title: "Welcome to Charlotte Restaurant Insider!",
  text: "CRI is here to give you recommendations on the best and worst restaurants in Charlotte, North Carolina, using Yelp's user-generated data. Click NEXT to continue."},
  {title: "Highest Reviewed Charlotte Restaurants",
  text: "The restaurants appearing on the map are those which have received 4 stars or greater from Yelp users, so they are probably good. "},
  {title: "Lowest Reviewed Charlotte Restaurants",
  text: "The restaurants appearing on the map are those which have received 2 stars or below from Yelp users, so they are probably worth avoiding."},
  {title: "Charlotte Restaurants Reviewed the Most Times",
  text: "The restaurants appearing on the map are those which have been reviewed by Yelp users over 1000 times, so they are probably well-visited."},
];

// first create order for the slides
var currentSlide = 0;

// adding text to #main
var addTitle = (title) => {
  $("#title").text(title)
};
var addText = (text) => {
  $("#main").text(text)
};

// removing the layers
var remove = () => {
  map.removeLayer(featureGroup)
};

// adding the respective data (filtered) for each of the respective slides
//var addData = () => {
//  featureGroup = L.geoJson
//}


//build the slides
var buildSlide = (slideObject) => {
  addTitle(slideObject.title)
  addText(slideObject.text)
};

buildSlide(slides[currentSlide]);

//hide the previous button on slide [0]
$("#previous").hide();

// define the next button
$("#next").click(() => {
  if(currentSlide <3){
    currentSlide = currentSlide +1
  };
  if(currentSlide ==3){
    $("#next").hide()
  };
});

// define the previous button
//$("#previous").click(() => {
//  if(currentSlide == 0) {
//    $("#previous").hide()
//  };
//  if(current)
// });


// 1. Function to map the array of restaurants

var r

var addMarker = (restaurant) => {
  r = restaurant;
  console.log(restaurant);
  console.log([restaurant.longitude, restaurant.latitude]);
  var marker = L.marker([restaurant.latitude, restaurant.longitude]);
  marker.addTo(map);
};


CLTrestos.forEach(function(restaurant) {addMarker(restaurant)});

// 2. Function to filter by a certain array, and put these arrays on a map

// first filter: reviews 4 stars or above

var fourStarsAbove = CLTrestos.filter(restaurant => restaurant.stars >= 4);
console.log(fourStarsAbove);

// second filter: reviews 2 stars or below

var twoStarsBelow = CLTrestos.filter(restaurant => restaurant.stars <= 2);
console.log(twoStarsBelow);

// third filter: restaurant with most reviews in Charlotte

var moreThanTwoThousand = CLTrestos.filter(restaurant => restaurant.review_count >= 1500);
console.log(moreThanTwoThousand);

// 3. Create arrays of the different map requests



// 4. Create a button to move from one array of map requests to the next
