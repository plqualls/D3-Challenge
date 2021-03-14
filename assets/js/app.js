// @TODO: YOUR CODE HERE!
//Setting svg and chart dimensions
//Set svg dimensions
let svgWidth = 960;
let svgHeight = 620;

//Setting borders in svg
let margin = {
    top: 20,
    right: 40,
    bottom: 200,
    left: 100
};

//Calculating height and width for chart
let width = svgWidth - margin.right - margin.left;
let height = svgHeight - margin.top - margin.bottom;

//append a div classed chart to the scatter element
let chart = d3.select("#scatter").append("div").classed("chart", true);

//append an svg element to the chart with appropriate height and width
let svg = chart.append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

//append an svg group
let chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

//Specifying x and y axis
let chosenXAxis = "poverty";
let chosenYAxis = "healthcare";

//function used for updating x-scale upon clicking on axis label
function xScale(censusData, chosenXAxis) {
    //create scales
    var xLinearScale = d3.scaleLinear()
        .domain([d3.min(censusData, d => d[chosenXAxis]) * 0.8,
            d3.max(censusData, d => d[chosenXAxis]) * 1.2])
        .range([0, width]);

    return xLinearScale;
}

