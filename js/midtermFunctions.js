//User derived functions for Midterm Project

var aquireData = function(datUrl) {
  var downloadData = $.ajax(datUrl).done((dat) => {
    console.log(dat);
    parsedData = dat;
  })
};

var cngTitle = (obTitle) => {
  $('#Title').text(obTitle);
}

var cngText = (obText) => {
  $('#slideText').text(obText);
}

var updateMap = () => {

}

var buildSlide = (slideObject) => {
  cngTitle(slideObject.title);
  cngText(slideObject.text);
  updateMap();
  if(slideNum > 0) {$("#bck").show();} else {$("#bck").hide();}
  if(slideNum < 4) {$("#nxt").show();} else {$("#nxt").hide();}


}
