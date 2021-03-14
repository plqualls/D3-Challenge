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
var width = svgWidth - margin.right - margin.left;
var height = svgHeight - margin.top - margin.bottom;

//Append a div classed chart to the scatter element
let chart = d3.select("#scatter").append("div").classed("chart", true);

//Append a svg element to chart with height and width
let svg = chart.append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

//Append a svg group
let chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

//Specifying x and y axis
let chosenXAxis = "poverty";
let chosenYAxis = "healthcare";

//function for updating x-scale upon clicking axis label
function xScale(censusData, chosenXAxis) {
    //create scales
    let xLinearScale = d3.scaleLinear()
        .domain([d3.min(censusData, d => d[chosenXAxis]) * 0.8,
            d3.max(censusData, d => d[chosenXAxis]) * 1.2])
        .range([0, width]);

    return xLinearScale;
}

//function for updating y-scale upon clicking axis label
function yScale(censusData, chosenYAxis) {
    //create scales
    let yLinearScale = d3.scaleLinear()
        .domain([d3.min(censusData, d => d[chosenYAxis]) * 0.8,
            d3.max(censusData, d => d[chosenYAxis]) * 1.2])
        .range([height, 0]);

    return yLinearScale;
}

//function for updating xAxis upon clicking axis label
function renderAxesX(newXScale, xAxis) {
    let bottomAxis = d3.axisBottom(newXScale);

    xAxis.transition()
        .duration(1000)
        .call(bottomAxis);

    return xAxis;
}

//function for updating yAxis upon clicking axis label
function renderAxesY(newYScale, yAxis) {
    let leftAxis = d3.axisLeft(newYScale);

    yAxis.transition()
        .duration(1000)
        .call(leftAxis);

    return yAxis;
}


