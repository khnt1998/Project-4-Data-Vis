function makeCanvas(visName){
    return canvas = d3.select(visName)
        .style("width", 900)
        .style("height", 500);
}

function addDefaultText(canvas, transformation, text){
    return canvas.append('text')
                      .attr('text-anchor', 'middle')
                      .attr('transform', transformation)
                      .style('font-family', 'Helvetica')
                      .style('font-size', 18)
                      .text(text);
}
