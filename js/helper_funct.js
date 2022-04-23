function makeCanvas(visName){
    return canvas = d3.select(visName)
        .style("width", 1200)
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

function plotLine(canvas, data, xScale, yScale, color){
    return canvas.append("path")
              .datum(data)
              .attr("fill", "none")
              .attr("stroke", color)
              .attr("stroke-width", 1.5)
              .attr("transform", "translate(56, 7)")
              .attr("d", d3.line()
                    .x(function(d) { return xScale(d.YR) })
                    .y(function(d) { return yScale(d.VALUE) })
              )
}

function makeRect(canvas, x, y, width, height, fill){
    return canvas.append("rect")
              .attr("x", x)
              .attr("y", y)
              .attr("width", width)
              .attr("height",height)
              .style("fill", fill);
}

function makeLegendRect(canvas, x, y, fill){
    return canvas.append("rect")
              .attr("x", x)
              .attr("y", y)
              .attr("width", 30)
              .attr("height",30)
              .style("fill", fill);
}
