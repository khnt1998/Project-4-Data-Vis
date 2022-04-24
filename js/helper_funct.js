function makeCanvas(visName){
    return canvas = d3.select(visName)
        .style("width", 1125)
        .style("height", 600);
}

function addDefaultText(canvas, transformation, text){
    return canvas.append('text')
                      .attr('text-anchor', 'middle')
                      .attr('transform', transformation)
                      .style('font-family', 'Helvetica')
                      .style('font-size', 18)
                      .text(text);
}

function plotLine(canvas, data, xScale, yScale, color, country){
    // Creates Tooltip
    var div = d3.select("body").append("div")
         .attr("class", "tooltip")
          .style("opacity", 0);

    return canvas.append("path")
              .datum(data)
              .attr("class", country)
              .attr("fill", "none")
              .attr("stroke", color)
              .attr("stroke-width", 2)
              .attr("transform", "translate(56, 7)")
              .attr("d", d3.line()
                    .x(function(d) { return xScale(d.YR) })
                    .y(function(d) { return yScale(d.VALUE) })
              )
              .on("mouseover", function(d){
                d3.select(this)
                   .transition()
                   .duration(100)
                   .style("stroke-width", "4px")
                   .style("stroke", color);
                div.transition()
                    .duration('100')
                    .style("opacity", 1);
                div.html("Rate: " +  d.VALUE)
                              .style("left", (d3.event.pageX + 10) + "px")
                              .style("top", (d3.event.pageY - 15) + "px");

              })
              .on("mouseout", function() {
                 d3.select(this)
                    .transition()
                    .style("stroke-width", "2px")
                 div.transition()
                    .duration('100')
                    .style("opacity", 0);

              });
}

function makeRect(canvas, x, y, width, height, fill){
    return canvas.append("rect")
              .attr("x", x)
              .attr("y", y)
              .attr("width", width)
              .attr("height",height)
              .style("fill", fill);
}

function makeLegendRect(canvas, x, y, fill, country){
    return canvas.append("rect")
               .attr("class", country + "box")
              .attr("x", x)
              .attr("y", y)
              .attr("width", 20)
              .attr("height",20)
              .style("fill", fill)
              .on("click", function(d){
                    console.log("clicked", country)
                    canvas.selectAll("." + country)
                    .attr("opacity", 0)
                    canvas.selectAll("." + country + "box")
                    .attr("opacity", 0)
              });
}
