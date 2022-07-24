var ctx = document.getElementById("chart").getContext("2d");

/*** Градиент ***/

var gradient1 = ctx.createLinearGradient(0, 0, 0, 230);
gradient1.addColorStop(0.7, 'rgba(126, 71, 242, 0.9)');
gradient1.addColorStop(1, 'rgba(255, 255, 255, 0.9)');

var gradient2 = ctx.createLinearGradient(0, 0, 0, 250);
gradient2.addColorStop(0.7, 'rgba(86, 179, 191, 0.9)');
gradient2.addColorStop(1, 'rgba(255, 255, 255, 0.9)');

/***************/



var data = {

    labels: [
        '01.06',
        '02.06',
        '03.06',
        '04.06',
        '05.06',
        '06.06',
        '07.06',
        '08.06',
        '09.06',
        '10.06',
        '11.06',
        '12.06',
    ],

    datasets: 
    
    [{
        label:"pp",
        data: [70.0, 90.4, 56.2, 24.4, 34.2, 28.0, 67.2, 24.1, 89.0, 78.4, 19.1, 90.4],
        fillColor: gradient2, // Put the gradient here as a fill color
        strokeColor: "none",
        pointColor: "none",
        pointStrokeColor: "none",
    },
    {
        label: 'Заказы',
        data: [25.0, 32.4, 22.2, 39.4, 34.2, 22.0, 23.2, 80.1, 90.0, 18.4, 19.1, 17.4],
        fillColor: gradient1, // Put the gradient here as a fill color
        strokeColor: "none",
        pointColor: "none",
        pointStrokeColor: "none",
        
    }
    ]
};

var options = {
    responsive: true,
    pointBorderWidth: 1,
    pointWidth: 1,
    scaleBeginAtZero: true,
    tooltipFillColor: "#F6F1F1",
    tooltipFontStyle: "regular",
    tooltipColor: "black",
    tooltipBodyColor: "red",
    pointDot: false,
    scaleGridLineColor: "white",
    
    
}

var myLineChart = new Chart(ctx).Line(data, options);

options.legend = true
console.log(Chart.defaults.global.legend)
