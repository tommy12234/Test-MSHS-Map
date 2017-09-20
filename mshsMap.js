import "raphael-min.js";

var MAP_WIDTH  = 760;
var MAP_HEIGHT = 645;

var mapContainer = document.getElementById("map");
var paper = new Raphael(mapContainer, MAP_WIDTH, MAP_HEIGHT);

var style = {
    fill: "#02c200",
    stroke: "#000000",
    "stroke-width": 1,
    "stroke-linejoin": "miter",
    cursor: "pointer"
};

var shapes = {};
regions["rectangle1"] = paper.rect(100, 100, 20, 20);
regions["border"] = paper.rect(0, 0, MAP_WIDTH, MAP_HEIGHT);

for(var shapeName in shapes){
    shapes[shapeName].attr(style);
}