function _1(md){return(
md`# Land Guzzlers - D3
Instructions: Fork this file (see [ ... ] menu at top right > Fork) to make a copy for yourself. Please read all the way down first.`
)}

function _2(md){return(
md`---`
)}

function _svgContainer(htl){return(
htl.html`<svg width="1100" height="1100">
  <style>
    rect {stroke: white; stroke-width: 2px;}
    text {fill: white; font-family: 'Rajdhani', sans-serif;}
    .maintitle {font-size: 39px; fill: black;}
    .mainsubtitle {font-size: 18px; fill: black;}
    .title {text-anchor: end; font-size: 32px;}
    .subtext1, .subtext2, .subtext3 {text-anchor: end; font-size: 17px;}
    .footprint {font-size: 17px;}
    line {stroke: white; stroke-width: 2px;}
  </style>

  <text x="0" y="25" class="maintitle">Land guzzlers</text>
  <text x="0" y="47" class="mainsubtitle">The ecological footprints of our pets can make SUVs look positively eco-friendly</text>

  <!-- the rest is drawn by the data using D3 below -->
  
</svg>`
)}

function _4(md){return(
md`---------`
)}

function _5(md){return(
md`Now build instructions to calculate and build the objects, from data.  
Build a new statement set for each, join the graphic object type, and set and calculate attribute values from \`d\`.

**Note: hamster title and footprint text sizing may appear differently due to initial scaling choices**`
)}

function _6(d3,svgContainer,land_guzzlers,colors)
{
  let landguzzlersViz = d3.select(svgContainer)    // select the cell called svgContainer and make it a d3 object.

// creating rectangles
  landguzzlersViz.selectAll("rect")
    .data(land_guzzlers)            // the name of the data object (see table below)
    .join("rect")
      .attr("width", d => Math.sqrt(d["footprint"])*1000)  // calculating width from d
      .attr("height", d => Math.sqrt(d["footprint"])*1000)  // calculating height from d
      .attr("x", d => 0) 
      .attr("y", d => 1100 - (Math.sqrt(d["footprint"])*1000)) // total height (bottom left) minus height
      .style("fill", (d,i) => colors[i]);              // colors from array below in references

// making horizontal titles/headers
  landguzzlersViz.selectAll(".title")     // selectingAll objects of a class called .title for only those text
    .data(land_guzzlers.filter(d => d["title"] != "HAMSTER"))                  // same dataset (except HAMSTER)
    .join("text")                         // new object type created
      .attr("x", d => (Math.sqrt(d["footprint"])*1000) - 5)  // rect width minus 5
      .attr("y", d => (1100 - (Math.sqrt(d["footprint"])*1000)) + 30)  // rect y-position plus 30
      .text(d => d["title"])     // text from title in land_guzzlers
      .attr("class", "title");            // tag it with the style class 'title'

// making vertical footprint text
  landguzzlersViz.selectAll(".footprint")
    .data(land_guzzlers.filter(d => (d["title"] != "HAMSTER" && d["title"] != "VOLKSWAGEN GOLF")))
    .join("text")
      .attr("x", d => (Math.sqrt(d["footprint"])*1000) - 20)  // rect width minus 20
      .attr("y", d => (1100 - (Math.sqrt(d["footprint"])*1000)) + 40)  // rect y-position plus 35
      .text(d => "Eco-footprint: " + d["footprint"] + " hectares")
      .attr("transform", (d,i,nodes) => "rotate(90 " + nodes[i].getAttribute("x") + " " + nodes[i].getAttribute("y") + ")")
                          // ^^ OK, so you would not have gotten this one on your own easily.  See if you can figure it out.
                          // also compare this back against your manual SVG code for the rotate.  Similar?
      .attr("class", "footprint");        // tag it with the style class 'footprint'

// making horizontal subtitle1  
  landguzzlersViz.selectAll(".subtitle")     
    .data(land_guzzlers.filter(d => d["title"] != "HAMSTER"))
    .join("text")
      .attr("x", d => ((Math.sqrt(d["footprint"])*1000) - 10) - 30)
      .attr("y", d => ((1100 - (Math.sqrt(d["footprint"])*1000)) + 30) + 30)
      .text(d => d["subtitle"])
      .attr("class", "subtext1");

// making horizontal subtitle2  
  landguzzlersViz.selectAll(".subtitle2")     
    .data(land_guzzlers.filter(d => d["title"] != "HAMSTER"))
    .join("text")
      .attr("x", d => ((Math.sqrt(d["footprint"])*1000) - 10) - 30)
      .attr("y", d => ((1100 - (Math.sqrt(d["footprint"])*1000)) + 30) + 50)
      .text(d => d["subtitle2"])
      .attr("class", "subtext2");

// making horizontal subtitle3  
  landguzzlersViz.selectAll(".subtitle3")     
    .data(land_guzzlers.filter(d => d["title"] != "HAMSTER"))
    .join("text")
      .attr("x", d => ((Math.sqrt(d["footprint"])*1000) - 10) - 30)
      .attr("y", d => ((1100 - (Math.sqrt(d["footprint"])*1000)) + 30) + 70)
      .text(d => d["subtitle3"])
      .attr("class", "subtext3");

  
///// LINES ///// 
  
// horizontal lines
  landguzzlersViz.selectAll(".hLine")
    .data(land_guzzlers.filter(d => (d["title"] == "MEDIUM-SIZED DOG" || d["title"] == "TOYOTA LAND CRUISER")))
    .join("line")
      .attr("x1", d => (Math.sqrt(d["footprint"])*1000) - 290)
      .attr("x2", d => (Math.sqrt(d["footprint"])*1000) - 30)
      .attr("y1", d => ((1100 - (Math.sqrt(d["footprint"])*1000)) + 30) + 10)
      .attr("y2", d => ((1100 - (Math.sqrt(d["footprint"])*1000)) + 30) + 10)
      .attr("class",  "lineSep");

// vertical lines
  landguzzlersViz.selectAll(".vLine")
    .data(land_guzzlers.filter(d => (d["title"] == "MEDIUM-SIZED DOG" || d["title"] == "TOYOTA LAND CRUISER")))
    .join("line")
      .attr("x1", d => (Math.sqrt(d["footprint"])*1000) - 30)
      .attr("x2", d => (Math.sqrt(d["footprint"])*1000) - 30)
      .attr("y1", d => ((1100 - (Math.sqrt(d["footprint"])*1000)) + 30) + 10)
      .attr("y2", d => ((1100 - (Math.sqrt(d["footprint"])*1000)) + 30) + 80)
      .attr("class",  "lineSep");

  
///// HAMSTER /////

// making HAMSTER horizontal title/header
  landguzzlersViz.selectAll(".hamsterTitle")
    .data(land_guzzlers.filter(d => d["title"] == "HAMSTER"))
    .join("text")
      .attr("x", d => (Math.sqrt(d["footprint"])*1000) + 10)
      .attr("y", d => (1100 - (Math.sqrt(d["footprint"])*1000)) + 25)
      .text(d => d["title"])
      .style("text-anchor", "start")
      .attr("class", "title");

// making HAMSTER footprint text part 1 (horizontal)
  landguzzlersViz.selectAll(".hamsterFootprint")
    .data(land_guzzlers.filter(d => d["title"] == "HAMSTER"))
    .join("text")
      .text(d => "Eco-footprint:")
      .attr("x", d => (Math.sqrt(d["footprint"])*1000) + 10)
      .attr("y", d => (1100 - (Math.sqrt(d["footprint"])*1000)) + 45) 
      .attr("class", "footprint");

// making HAMSTER footprint text part 2 (horizontal)
    landguzzlersViz.selectAll(".hamsterFootprint2")
    .data(land_guzzlers.filter(d => d["title"] == "HAMSTER"))
    .join("text")
      .text(d => d["footprint"] + " hectares")
      .attr("x", d => (Math.sqrt(d["footprint"])*1000) + 10)
      .attr("y", d => (1100 - (Math.sqrt(d["footprint"])*1000)) + 65)  
      .attr("class", "footprint");
}


function _7(md){return(
md`To get you started, I'm giving you the basic **svgContainer** object already, including some starting styles and two static \`<text>\` objects.  

The code above starts with d3.select() to grab the svgContainer object, to then put other things into it.  

Each type of element (\`rect\`, \`title\`, \`subtext\`, etc.) is most easily constructed in it's own d3 \`selectAll().data().join()\` statement, each of which loops through the dataset for each graphic type.  Because this is \`join\`-ing the graphic object into the data table, this effectively embeds a forEach loop into each select-join to draw each graphic type across the entire set of data records.  For those who know databases, this is an left-join of data (left) and graphics (right), to create one unified new dataset of both, but removing any excess graphic objects that do not match data.`
)}

function _8(md){return(
md`### Hints and notes:`
)}

function _9(md){return(
md`- Hectare values are area of the squares.  Squares are rectangles.
- \`width x height = area\`
- squares have width = height
- thereby \`width = Math.sqrt(area)\`
- Math.sqrt() is javascript's square root function

- x,y 0,0 is at the left,top of the page.
- thus all y values get larger as you go DOWN the page
- and so if you're measuring from the bottom, you need to subtract to go up.

- lines: you can approximate the length.  It actually is built based on the length of the text title above, and we CAN get that, but it's a bit trickier.  If you're really interested, check out the getBBox() function in javascript.  For the rest of you, just estimate it.
  `
)}

function _10(md){return(
md`---`
)}

function _11(md){return(
md`### reference stuff:`
)}

function _colors(){return(
["#a5620b","#c29657","#cc1f5e","#a71949","#f7991d","#231f20"]
)}

function _land_guzzlers(__query,FileAttachment,invalidation){return(
__query(FileAttachment("land_guzzlers.csv"),{from:{table:"land_guzzlers"},sort:[],slice:{to:null,from:null},filter:[],select:{columns:null}},invalidation)
)}

function _14(htl){return(
htl.html`<link href="https://fonts.googleapis.com/css?family=Rajdhani" rel="stylesheet">`
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  function toString() { return this.url; }
  const fileAttachments = new Map([
    ["land_guzzlers.csv", {url: new URL("./files/c1a8ee9adff873233e6077d25cc49624bf51a9ba81c2598bc490cae6adcffa30880c91fab66d6ce8e76ccc2692c503f6aafa0b41dbff641484b57f4576c0ccf3.csv", import.meta.url), mimeType: "text/csv", toString}]
  ]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], _1);
  main.variable(observer()).define(["md"], _2);
  main.variable(observer("svgContainer")).define("svgContainer", ["htl"], _svgContainer);
  main.variable(observer()).define(["md"], _4);
  main.variable(observer()).define(["md"], _5);
  main.variable(observer()).define(["d3","svgContainer","land_guzzlers","colors"], _6);
  main.variable(observer()).define(["md"], _7);
  main.variable(observer()).define(["md"], _8);
  main.variable(observer()).define(["md"], _9);
  main.variable(observer()).define(["md"], _10);
  main.variable(observer()).define(["md"], _11);
  main.variable(observer("colors")).define("colors", _colors);
  main.variable(observer("land_guzzlers")).define("land_guzzlers", ["__query","FileAttachment","invalidation"], _land_guzzlers);
  main.variable(observer()).define(["htl"], _14);
  return main;
}
