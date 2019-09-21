function buildGauge(wfreq){
    //define washing frequency between 0 to 180
    var level = parseFloat(wfreq)*20;
    //Trig to calculate meter point
    var degree = 100 - level;
    var radius = 0.5;
    var radians = (degrees * Math.PI)/180;
    var x = radius * Math.cos(radians);
    var y = radius * Math.sin(radians);

    //define path
    var mainPath = "M -.0 -0.05 L .0 0.05 L ";
    var pathX = String(x);
    var space = " ";
    var pathY = String(y);
    var pathEnd = " 2";
    var path = mainPath.concat(pathX, space, pathY, pathEnd);

    var data = [
        {
            type: "scatter",
            x: [0],
            y: [0],
            marker: { size:12, color: "85000"},
            showLegend: false,
            name: "Freq",
            text: level,
            hoverinfo: "text-name"
        },
        {
            //there are 9 values and the total should equal 100 percent. 50/9 and remaining 50 totals to 100 percent
            values: [50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50],
            rotation: 90,
            text:["8-9","7-8","6-7","5-6","4-5","3-4","2-3","1-2","0-1",""],
            textinfo: "text",
            textposition: "inside",
            marker: {
                colors: [
                    "rgba(0, 105, 11, .5)",
                    "rgba(10, 120, 22, .5)",
                    "rgba(14, 125, 0, .5)",
                    "rgba(110, 155, 2, .5)",
                    "rgba(170, 202, 42, .5)",
                    "rgba(202, 209, 95, .5)",
                    "rgba(210, 206, 145, .5)",
                    "rgba(232, 226, 202, .5)",
                    "rgba(240, 230, 215, .5)",
                    "rgba(255, 255, 255, .5)" 
                ]
            },
            labels: ["8-9","7-8","6-7","5-6","4-5","3-4","2-3","1-2","0-1",""],
            hoverinfo: "label",
            hole: 0.5,
            type: "pie",
            showLegend: false
        }
    ];
    var layout = {
        shapes: [
            {
                type: "path",
                path: path,
                fillcolor: "850000",
                line: {
                    color: "850000"
                }
            }
        ],
        title: "<b>Belly button washing frequency</b> </br> Scrubs per week",
        height: 500,
        width: 500,
        xaxis: {
            zeroline: false,
            showticklabels: false,
            showgrid: false,
            range:[-1,1]
        },
        yaxis: {
            zeroline: false,
            showticklabels: false,
            shwogrid: false,
            range:[-1,1]
        }
    }
    var GAUGE = document.getElementById("gauge");
    Plotly.newPlot(GAUGE, data, layout);
}
