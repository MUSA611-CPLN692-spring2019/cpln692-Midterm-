/* ================================
Slide Model and corresponding data to be read later
================================ */

class Slide {
  constructor(title, textList) {
    this.title = title;
    this.text = textList;
  }
  filter() {
    return;
   }
}

slide1p1 = "In January 2018, developer Related Companies revealed updated plans for a long-delayed mixed-use development across the street from Downtown LA’s Walt Disney Concert Hall. Designed by Frank Gehry, project - called The Grand - intends to bring shops, a movie theater, and a 20-story, 314-room hotel to the site.";
slide1p2 = "In recent trends of growth management, mixed-use development has become a popular approach to increase density and revitalize urban sites while offering services and high quality of life. Another essential benefit is the walkability of the design: Everything you need within a 20-minute walking radius. This walkable neighborhood is then connected via public transit to the broader city in a form well-known as transit-oriented developments (TODs). Yet, as 'green-washing' has proven, TODs and mixed-use developments can be a politically ploy - a deceiving misnomer - for what is actually just business-as-usual. This story map will assess the project's accessibility to certain services and amenities in order to qualify it as a successful TOD.";

slide2p1 =  "First and foremost is the accessibility of the site to transit.";
slide2p2 = "Here we see that within a half-mile radius, there are indeed a plethora of transit stations nearby.";

slide3p1 = "We now look at a slightly larger scale - within a mile - to see where residents could find groceries.";
slide3p2 = "Again, we see that the project is certainly within a large number of grocery stores within reasonable walking distance, and they are located in different directions and neighborhoods, offering opportunities to visit diverse places.";

slide4p1 = "The quintessential gem of a neighborhood is the park. Without it, urban environments can feel like a concrete jungle.";
slide4p2 = "The Grand is within a mile of many different parks of different scales, presenting potential for pet owners to reside in this development despite the higher density living situation.";

slide5p1 = "A major calling of the city is its culture. Certainly in Los Angeles, there is no shortage of entertainment and educational value. We look at the host of museums near The Grand.";
slide5p2 = "Within a mile, there are 14 different museums to visit. Residents of Gehry's new project will have more than sufficient access to these cultural institutions, in addition to the previous services we have assessed. Overall, it seems that this project seems to be a positive example of smart growth in the city.";

/* ================
Slide Deck creation
==================*/
slide1 = new Slide("A New Vision for LA", [slide1p1, slide1p2]);
slide2 = new Slide("Transit Accessibility", [slide2p1, slide2p2]);
slide3 = new Slide("Nearby Groceries", [slide3p1, slide3p2]);
slide4 = new Slide("Nearby Parks", [slide4p1, slide4p2]);
slide5 = new Slide("Nearby Museums", [slide5p1, slide5p2]);

var slideDeck = [slide1, slide2, slide3, slide4, slide5];
var currSlide = 0;
