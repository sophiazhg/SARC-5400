function _1(md){return(
md`# Data in D3`
)}

function _randNums(count)
{
  let data = [];
  for (let i=0; i<count; i++) {
    data.push(Math.round(Math.random()*500))
  }
  return data;
}


function _count(){return(
15
)}

function _4(circles){return(
circles.filter(d => d > 300).style("fill", "orange")
)}

function _numsSVG(width,htl){return(
htl.html`<svg width=${width} height="200" viewBox="0 0 ${width} 200">
  
</svg>`
)}

function _svg(d3,numsSVG){return(
d3.select(numsSVG)
)}

function _text(svg,randNums){return(
svg.selectAll("text") // Selects any existing text elements (begans w none)
  .data(randNums)// Returns & indentations are purely for human readability
  .join("text")
    .transition().duration(1000)
    .text(d => d) // Creates for loop inside join statement (for each data element -> do these things; d rep individuals row or num)
    .style("text-anchor", "middle")
    .attr("x", d => d) // Where's this thing in x
    .attr("y", (d,i) => 15 + i*10)
)}

function _8(md){return(
md`## Generating Other Items (like what's needed in land guzzler)`
)}

function _circles(svg,randNums){return(
svg.selectAll("All")
  .data(randNums)
  .join("circle")
    .transition().duration(1000)
    .style("fill", "none")
    .style("stroke", "steelblue")
    .attr("r", d => d/10)
    .attr("cx", d => d)
    .attr("cy", (d,i) => 15 + i*10)
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("randNums")).define("randNums", ["count"], _randNums);
  main.variable(observer("count")).define("count", _count);
  main.variable(observer()).define(["circles"], _4);
  main.variable(observer("numsSVG")).define("numsSVG", ["width","htl"], _numsSVG);
  main.variable(observer("svg")).define("svg", ["d3","numsSVG"], _svg);
  main.variable(observer("text")).define("text", ["svg","randNums"], _text);
  main.variable(observer()).define(["md"], _8);
  main.variable(observer("circles")).define("circles", ["svg","randNums"], _circles);
  return main;
}
