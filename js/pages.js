/*
THIS FILE IS USED TO STORE PAGE-SPECIFIC DATA
*/

// MAP PROPERTIES
var centers = [];
centers[0] = {
  x: 39.9042,
  y: 116.4074,
  zoom: 11
};
centers[1] = {
  x: 40.0780,
  y: 116.4394,
  zoom: 13
};
centers[2] = {
  x: 39.9542,
  y: 116.4074,
  zoom: 12
};
centers[3] = {
  x: 39.9042,
  y: 116.4074,
  zoom: 11
};
centers[4] = {
  x: 39.9042,
  y: 116.4074,
  zoom: 11
};

// TEXT
// First paragraph
bodytext = [];

bodytext[0] = "The data here is a sample of 1000 home sales in Beijing in the year 2017. Let's take a look at the biggest homes, most expensive homes, and the extent of subway lines in the city.";
bodytext[1] = 'Here are all of the homes bigger than 100 square meters. Those that are at least 140 square meters (considered "big" by mortgage and tax purposes) colored in blue.';
bodytext[2] = 'Here are all of the homes prices, colored by 4 quartiles based on price per square meter.';
bodytext[3] = 'Here are all of the homes that are on subway lines.';
bodytext[4] = 'Use these options to set your own criteria and filter the data.';

// second paragraph
bodytext2 = [];
bodytext2[0] = "First, have a look at all of the data."
bodytext2[1] = "Some of them are concentrated in this area in the north.";
bodytext2[2] = "Very clearly, inner city homes outprice the suburbs, which is different than some US cities where the more expensive homes are in the suburbs. Also, it's quite clear that the north outprices the south.";
bodytext2[3] = "We can see that the city center is well-served by subway, with a few lines going into the suburbs in all directions.";
bodytext2[4] = "You can filter by price per square meter, total size, and if the area is served by subway.";

// TITLE
titletext = [];

titletext[0] = "Home Sales in Beijing, 2017";
titletext[1] = 'Biggest Homes by Area';
titletext[2] = 'Expensive Homes by Unit Price';
titletext[3] = 'Subway Extent';
titletext[4] = 'Custom Filter';


// FUNCTION FOR FILTERING DATA FOR EACH PAGE
// Stored in an object, each property is a function for a page.

var filterdata = {
  0: function(list) {
    var sample = [];
    _.each(list, function(o) {
      o['color'] = 'blue';
      sample.push(o);
    });
    return sample;
  },
  1: function(list) {
    var sample = [];
    _.each(list, function(o) {
      if (o.square > 140) {
        o['color'] = 'blue';
        sample.push(o)
      } else if (o.square > 100) {
        o['color'] = 'gray';
        sample.push(o);
      };
    });
    return sample;
  },
  2: function(list) {
    var sample = [];
    _.each(list, function(o) {
      if (o.price > 78202) {
        o['color'] = "#234d20"
      } else if (o.price > 60887) {
        o['color'] = "#77ab59"
      } else if (o.price > 48179) {
        o['color'] = "#c9df8a"
      } else {
        o['color'] = "#f0f7da"
      };
      sample.push(o);
    });
    return sample;
  },
  3: function(list) {
    var sample = [];
    _.each(list, function(o) {
      if (o.subway > 0) {
        o['color'] = '#800000';
      } else {
        o['color'] = "#FFE4E1";
      }
      sample.push(o);
    });
    return sample;
  },
  4: function(list) {
    var sample = [];
    // Used to store user's input
    var selection = {
      selectprice: $('#cbox-input1').prop('checked'),
      lowprice: $('#lowerprice').val(),
      upperprice: $('#upperprice').val(),
      selectsize: $('#cbox-input2').prop('checked'),
      lowarea: $('#lowerarea').val(),
      upperarea: $('#upperarea').val(),
      subway: $('#subwaydrop').val(),
    };

    _.each(list, function(o) {
      o['color'] = 'blue';
      var checks = 0;

      if (selection.selectprice == true) {
        if (o.price >= selection.lowprice && o.price <= selection.upperprice) {
          checks++;
        }
      } else {
        checks++;
      }

      if (selection.selectsize == true) {
        if (o.square >= selection.lowarea && o.square <= selection.upperarea) {
          checks++;
        }
      } else {
        checks++;
      }

      if (selection.subway == 0) {
        checks++;
      } else if (selection.subway == 1 && o.subway == 1) {
        checks++;
      } else if (selection.subway == 2 && o.subway == 0) {
        checks++;
      }

      if (checks == 3) {
        sample.push(o);
      }
    });
    return sample;
  },
};
