//User derived functions for Midterm Project

var aquireData = function(datUrl) {
  var downloadData = $.ajax(datUrl).done((dat) => {
    console.log(dat);
    parsedData = dat;
  })
};
