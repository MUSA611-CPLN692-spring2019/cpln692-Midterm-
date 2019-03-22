/* =====================
  Set up our map
===================== */
var map = L.map('map', {
  center: [37.7749, -122.4194],
  zoom: 12
});
var Stamen_TonerLite = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);


// Take note of our use of jQuery here: $(document).ready(functionToCallWhenReady)
// This is a popular pattern that you'll run into in programs that run jQuery. It says not to run
// the function passed to `ready` until the HTML document is fully loaded and all scripts have
// been interpreted. It is, therefore, an example of asynchronous behavior.

/* ===================================================================
                            MY CODE HERE
=================================================================== */

// Datasets to use
var data_neigh = "https://raw.githubusercontent.com/angelicakim28/cpln692-MidtermData/master/neighborhoods_sf/neighborhoods_sf.geojson";
var data_rest = "https://raw.githubusercontent.com/angelicakim28/cpln692-MidtermData/master/restaurants_sf/mygeodata_merged.json";
var data_popos = "https://raw.githubusercontent.com/angelicakim28/cpln692-MidtermData/master/popos_sf/sf_popos.json";


// Some functions
var parseData = function(data) {
  var computedValue = JSON.parse(data);
  console.log("data parsed");
  return computedValue;
};

var removeMarkers = function(markers) {
  console.log("markers removed");
  return _.each(markers, function(i) {return map.removeLayer(i);});
};

//Global Variables
var featureGroup_out=[];
var computedValue_out=[];
var pastmarkers=[];


//Testing ajax calls and data manipulation for each slide before adding to buildslide function

//slide_0 - explore sf neighborhoods
    // $(document).ready(function() {
    //   $.ajax(data_neigh).done(function(data) {
    //     var parsedData = JSON.parse(data).features;
    //     console.log(parsedData[0].properties.name);
    //     for (i=0; i<parsedData.length; i++) {
    //       featureGroup = L.geoJson(parsedData[i]).bindPopup(parsedData[i].properties.name).addTo(map);
    //       featureGroup_out.push(featureGroup);
    //     }
    //   });
    // });

//slide_1 - show all michelin star restaurants in sf
    // $.ajax(data_rest).done(function(ajaxResponseValue){
    //   // array of objects into json
    //   var computedValue = JSON.parse(ajaxResponseValue).features;
    //   console.log(computedValue);
    //   //Check
    //   console.log('michelin star restaurant computed');
    //   //make markers and map function to all points and add to map
    //   var makeMarkers = (loc) => {
    //         console.log(loc);
    //     return L.marker([loc.geometry.coordinates[1],loc.geometry.coordinates[0]]).bindPopup(loc.properties.Name).addTo(map);
    //   };
    //   var allMarkers = _.map(computedValue, makeMarkers);
    //   featureGroup_out=allMarkers;
    // });

//slide_2 - use filter to filter by number of stars restaurant
    // $.ajax(data_rest).done(function(ajaxResponseValue){
    //   // array of objects into json
    //   var computedValue = JSON.parse(ajaxResponseValue).features;
    //   computedValue_out = computedValue;
    //   $('#filter_rest_button').click(function() {
    //     console.log('removing markers');
    //     removeMarkers(pastmarkers);
    //     console.log('reset restaurants list');
    //     computedValue=computedValue_out;
    //     computedValue=_.filter(computedValue,function(loc){
    //       console.log('filtering');
    //       return loc.properties.description == $('#star_filter_input').val();
    //   });
    //     var makeMarkers = (loc) => {
    //       console.log(loc);
    //       return L.marker([loc.geometry.coordinates[1],loc.geometry.coordinates[0]]).bindPopup(loc.properties.Name).addTo(map);
    //     };
    //     var allMarkers = _.map(computedValue, makeMarkers);
    //     pastmarkers=allMarkers;
    //   });
    // });


//slide_3 - explore POPOS locations in San Francisco
    // $.ajax(data_popos).done(function(ajaxResponseValue){
    //   // array of objects into json
    //   var computedValue = JSON.parse(ajaxResponseValue);
    //   console.log(computedValue);
    //   //Check parsing
    //   console.log('first POPOS computed');
    //   console.log(computedValue[0].NAME);
    //   //make markers function for POPOS locations
    //   var makeMarkersP = (lat_cds, lng_cds, position) => {
    //     console.log('make marker function');
    //     return L.marker([lat_cds,lng_cds]).bindPopup(computedValue[position].NAME).addTo(map);
    //   };
    //   for (i=0; i<computedValue.length; i++) {
    //     var d = JSON.parse(computedValue[i].the_geom.replace("(","[").replace(")","]"));
    //     var position = i;
    //     var popos_lat = d[0];
    //     var popos_lng = d[1];
    //     console.log([popos_lat,popos_lng]);
    //     console.log('hello popos coordinates');
    //     makeMarkersP(popos_lat,popos_lng,position);
    //     var allMarkers = _.map(computedValue, makeMarkersP(popos_lat,popos_lng,position));
    //   }
    // });

//slide_4 - filtered POPOS
    // $.ajax(data_popos).done(function(ajaxResponseValue){
    //   // array of objects into json
    //   var computedValue = JSON.parse(ajaxResponseValue);
    //   console.log(computedValue);
    //   //Check parsing
    //   console.log('first Urban Garden POPOS computed');
    //   console.log(computedValue[0].YEAR);
    //   //removeMarkers(pastmarkers);
    //   computedValue_out=computedValue;
    //   computedValue=_.filter(computedValue,function(loc){
    //     console.log(computedValue[0]);
    //     console.log(computedValue[1]);
    //     console.log(computedValue[2]);
    //     return loc.TYPE == 'Urban Garden';
    //   });
    //   //make markers function for POPOS locations
    //   var makeMarkersP = (lat_cds, lng_cds, position) => {
    //     console.log('make marker function');
    //     return L.marker([lat_cds,lng_cds]).bindPopup(computedValue[position].NAME).addTo(map);
    //   };
    //   for (i=0; i<computedValue.length; i++) {
    //     var d = JSON.parse(computedValue[i].the_geom.replace("(","[").replace(")","]"));
    //     var position = i;
    //     var popos_lat = d[0];
    //     var popos_lng = d[1];
    //     console.log([popos_lat,popos_lng]);
    //     console.log('hello urban garden popos coordinates');
    //     featureGroup_out.push(makeMarkersP(popos_lat,popos_lng,position));
    //   }
    // });



  var slides = [
    {title:"San Francisco Neighborhoods", text:"San Francisco tops among the largest and most populous cities in California. It prides itself on its unique style, from its steep hills, mix of Victorian and modern architecture, minority-majority population, touristic attractions, very nice weathers and proximity to the largest social media and tech industries in the country. Each neighborhood has a characteristic of its own, many of which are historical neighborhoods, while others are well known for having other traits such as strong sense of community, beautiful views, progressive vibes, colorful murals and others. <br><br> Click on each neighborhood to explore the its name and location on the San Francisco map.", color:"red"},
    {title:"Michelin Star Awarded Restaurants", text:"One of the greatest advantages of a culturally diverse city like San Francisco is the opportunity to experience different types of cusines from around the world. The abundance of local restaurants makes this city particularly special, as it allows people to have a unique experience during their time here. Michelin Stars are awarded every year for restaurants that show outstanding performance on food quality, creativity, mastery and service, among other criteria. As such, these coveted stars are only awarded to a select few, which makes these restaurants extra special and highly respected. <br><br> To the right you can see all the restaurants that have been rated 1 or 2 or 3 Michelin Stars. Click on the markers to see which restaurants proudly own at least one Michelin Star!", color:"blue"},
    {title:"Select Your Restaurant", text:"Whether it is for a special occasion or simply for the experience of eating at a Michelin Star restaurant, you can easily search up the restaurants based on the star ratings they have. <br><br> Select a number (1, 2 or 3) and click on the 'Filter!' button to view the restaurants based on the number of stars it has been awarded.", color:"green"},
    {title:"POPOS, San Francisco's Hidden Gems", text:"In addition to a wide range of food selections in the San Francisco, the city also has a number of Privately-Owned-Public-Open-Spaces, known as POPOS. They are designed in many different forms, such as plazas, atriums, building lobbies, rooftop gardens, terraces, small parks, and others. As a development requirement since 1985, these spaces were created in an effort to provide a place for people to relax, hang out and catch a break from their busy schedules in the city - as such, many of them are concentrated in the Financial District area. <br><br> Click on the markers to see where POPOS can be found. Note, many location names are the address themselves.", color:"yellow"},
    {title:"POPOS - Terraces in the City", text:"Just as the name suggests, these places are privately owned, and although accessible by the general public, many people oftentimes do not know of, or are hesitant to enter these places. In particular, atriums, indoor parks, rooftop gardens and terraces in many business buildings are known to be hidden gems of the city. <br><br> Interested in visiting a POPOS Terrace and getting a nice view of the city? Zoom in to the map to see where you can visit a terrace POPOS next time!", color:"blue"}
  ];


//Slide Counter
  var currentSlide = 0;

// Preparing for button shows
  var plusOne = () => {
    currentSlide += 1;
  };

  var minusOne = () => {
    currentSlide -= 1;
  };

  var hideFirst = () => {
	   if (currentSlide==0) {
		    $('#previous_button').hide();
    } else if (currentSlide < 5){
		    $('#previous_button').show();
    }
  };

  var hideLast = () => {
	   if (currentSlide==4) {
		    $('#next_button').hide();
    } else if (currentSlide < 5) {
		    $('#next_button').show();
    }
  };

  var show_star_input = () => {
    if (currentSlide==2) {
      $('#star_filter_input').show();
      $('#filter_rest_button').show();
    } else if (currentSlide != 2) {
      $('#star_filter_input').hide();
      $('#filter_rest_button').hide();
    }
  };


// Functions to build slides
  console.log('hi');
  var addTitle = (title) => {
    $('.sidebar').prepend(`<h1 class='title'>${title}</h1>`);
  };

  var addText = (text) => {
    $('.sidebar').prepend(`<p class='text'>${text}</p>`);
  };

  var setColor = (color) => {
    $('#map').css('color',color);
  };

  var cleanSlide = () => {
    $('.title').remove();
    $('.text').remove();
    removeMarkers(pastmarkers);
    removeMarkers(featureGroup_out);
  };


// Building a Slide
  var buildSlide = (slideObject) => {
    //slide set ups
    cleanSlide();
    addText(slideObject.text);
    addTitle(slideObject.title);
    //check what ajax call to run depending on what slide
    if (currentSlide == 0) {
      map.setView([37.7749, -122.4194], zoom = 12);
      $(document).ready(function() {
        $.ajax(data_neigh).done(function(data) {
          var parsedData = JSON.parse(data).features;
          console.log(parsedData[0].properties.name);
          for (i=0; i<parsedData.length; i++) {
            featureGroup = L.geoJson(parsedData[i]).bindPopup(parsedData[i].properties.name).addTo(map);
            featureGroup_out.push(featureGroup);
          }
        });
      });
    } else if (currentSlide == 1) {
      map.setView([37.7749, -122.4194], zoom = 8);
      $.ajax(data_rest).done(function(ajaxResponseValue){
        // array of objects into json
        var computedValue = JSON.parse(ajaxResponseValue).features;
        console.log(computedValue);
        //Check
        console.log('michelin star restaurant computed');
        //make markers and map function to all points and add to map
        var makeMarkers = (loc) => {
              console.log(loc);
          return L.marker([loc.geometry.coordinates[1],loc.geometry.coordinates[0]]).bindPopup(loc.properties.Name).addTo(map);
        };
        var allMarkers = _.map(computedValue, makeMarkers);
        featureGroup_out=allMarkers;
      });
    } else if (currentSlide == 2){
      map.setView([37.7749, -122.4194], zoom = 12);
          $.ajax(data_rest).done(function(ajaxResponseValue){
          // array of objects into json
          var computedValue = JSON.parse(ajaxResponseValue).features;
          computedValue_out = computedValue;

          $('#filter_rest_button').click(function() {
            console.log('removing markers');
            removeMarkers(pastmarkers);
            console.log('reset restaurants list');
            computedValue=computedValue_out;
            computedValue=_.filter(computedValue,function(loc){
              console.log('filtering');
              return loc.properties.description == $('#star_filter_input').val();
          });
            var makeMarkers = (loc) => {
              console.log(loc);
              return L.marker([loc.geometry.coordinates[1],loc.geometry.coordinates[0]]).bindPopup(loc.properties.Name).addTo(map);
            };
            var allMarkers = _.map(computedValue, makeMarkers);
            pastmarkers=allMarkers;
          });
        });
      } else if (currentSlide == 3) {
        map.setView([37.7911, -122.3891], zoom = 14);
        $.ajax(data_popos).done(function(ajaxResponseValue){
          // array of objects into json
          var computedValue = JSON.parse(ajaxResponseValue);
          console.log(computedValue);
          computedValue_out = computedValue;
          //Check parsing
          console.log('first POPOS computed');
          console.log(computedValue[0].NAME);
          //make markers function for POPOS locations
          var makeMarkersP = (lat_cds, lng_cds, position) => {
            console.log('make marker function');
            return L.marker([lat_cds,lng_cds]).bindPopup(computedValue[position].NAME).addTo(map);
          };
          for (i=0; i<computedValue.length; i++) {
            var d = JSON.parse(computedValue[i].the_geom.replace("(","[").replace(")","]"));
            var position = i;
            var popos_lat = d[0];
            var popos_lng = d[1];
            console.log([popos_lat,popos_lng]);
            console.log('hello popos coordinates');
            featureGroup_out.push(makeMarkersP(popos_lat,popos_lng,position));
          }
        });
      } else if (currentSlide == 4) {
        map.setView([37.7911, -122.3891], zoom = 14);
        $.ajax(data_popos).done(function(ajaxResponseValue){
            // array of objects into json
            var computedValue = JSON.parse(ajaxResponseValue);
            console.log(computedValue);
            //Check parsing
            console.log('first Urban Garden POPOS computed');
            console.log(computedValue[0].YEAR);
            //removeMarkers(pastmarkers);
            computedValue_out=computedValue;
            computedValue=_.filter(computedValue,function(loc){
              console.log(computedValue[0]);
              console.log(computedValue[1]);
              console.log(computedValue[2]);
              return loc.TYPE == 'Sun Terrace' | loc.TYPE == 'View Terrace';
            });
            //make markers function for POPOS locations
            var makeMarkersP = (lat_cds, lng_cds, position) => {
              console.log('make marker function');
              return L.marker([lat_cds,lng_cds]).bindPopup(computedValue[position].NAME).addTo(map);
            };
            for (i=0; i<computedValue.length; i++) {
              var d = JSON.parse(computedValue[i].the_geom.replace("(","[").replace(")","]"));
              var position = i;
              var popos_lat = d[0];
              var popos_lng = d[1];
              console.log([popos_lat,popos_lng]);
              console.log('hello urban garden popos coordinates');
              featureGroup_out.push(makeMarkersP(popos_lat,popos_lng,position));
            }
        });
    }
  };

// Being page by building slide_0
  buildSlide(slides[0]);

// When previous and next buttons show
  $('#previous_button').click(function () {
                              console.log(currentSlide);
                              minusOne();
                              hideFirst();
                              hideLast();
                              show_star_input();
                              buildSlide(slides[currentSlide]);
                              console.log(currentSlide);
                            }
                          );

  $('#next_button').click(function(){
                          console.log(currentSlide);
                          plusOne();
                          hideFirst();
                          hideLast();
                          show_star_input();
                          buildSlide(slides[currentSlide]);
                          console.log(currentSlide);
                        }
                      );


//Dataset sources:
// popos: https://data.sfgov.org/Culture-and-Recreation/Privately-Owned-Public-Open-Spaces/65ik-7wqd
// neigh: https://data.sfgov.org/Geographic-Locations-and-Boundaries/SF-Find-Neighborhoods/pty2-tcw4
// mich: https://sf.eater.com/2018/11/29/18118127/michelin-restaurants-san-francisco-stars-2019
