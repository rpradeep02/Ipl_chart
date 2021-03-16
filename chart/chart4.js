
fetch('https://rpradeep02.github.io/json-data/json/ipl_data.json')
    .then(response => response.json())
    .then(chartData);

  function chartData(data) {
    matchPerSeason(data.tot_season);
    return;
  }
  
  function matchPerSeason(tot_season) {
    for (let keys in tot_season) {
      chart = Object.keys(tot_season).map((name) => ({ name, data: tot_season[name] }));
    }  
    Highcharts.chart("total_season", {
      chart: {
        type: "column"
      },
      title: {
        text: "Total matches per Season"
      },
      xAxis: {
        categories: ["2008","2009","2010","2011","2012","2013","2014","2015","2016","2017"],
        title: {
            text: "Seasons"
        }

      },
      yAxis: {
        min: 0,
        title: {
          text: "matches"
        }
      },  
      series: chart
    });
  }
