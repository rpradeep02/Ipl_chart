
fetch('https://rpradeep02.github.io/json-data/json/ipl_data.json')
    .then(response => response.json())
    .then(chartData);



function chartData(data) {
    umpireNationality(data.umpires);
    return;
}

function umpireNationality(umpires) {
  const chart = Object.entries(umpires);
Highcharts.chart("umpire_nationality", {
  chart: {
    type: "column"
  },
  title: {
    text: "umpires nationality"
  },
  xAxis: {
    type: "category"
  },
  yAxis: {
    min: 0,
    title: {
      text: "Nationality Count"
    }
  },  
  series: [
    {
      name: "Nationality",
      data: chart
    }
  ]
});
}


