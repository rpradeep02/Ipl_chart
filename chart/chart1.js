
fetch('https://rpradeep02.github.io/json-data/json/ipl_data.json')
    .then(response => response.json())
    .then(chartData);

  
  
  function chartData(data) {
    teamsPerYear(data.teams);
    return;
  }
  
  function teamsPerYear(teams) {
    const chart = Object.entries(teams);
    Highcharts.chart("team_matches", {
      chart: {
        type: "column"
      },
      title: {
        text: "Runs scored by each team"
      },
      xAxis: {
        type: "category"
      },
      yAxis: {
        min: 0,
        title: {
          text: "Runs"
        }
      },  
      series: [
        {
          name: "Runs",
          data: chart
        }
      ]
    });
  }
  
