
  fetch('https://rpradeep02.github.io/json-data/json/ipl_data.json')
    .then(response => response.json())
    .then(chartData);

  
  function chartData(data) {
    rcbBatsman(data.rcb);
    return;
  }
  
  function rcbBatsman(rcb) {
    const chart = Object.entries(rcb);
    Highcharts.chart("rcb_batsman", {
      chart: {
        type: "column"
      },
      title: {
        text: "Rcb Batsman"
       
      },
      xAxis: {
        type: "category",
        labels: {
          style: {
            fontSize: '13px',
            fontFamily: 'Verdana, sans-serif'
          }
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: "Runs"
        }
      },  
      series: [
        {
          name: "Batsman score",
          data: chart
        }
      ],
      dataLabels: {
        enabled: true,
        rotation: -90,
        color: '#FFFFFF',
        align: 'right',
        format: '{point.y:.1f}', // one decimal
        y: 10, // 10 pixels down from the top
        style: {
            fontSize: '13px',
            fontFamily: 'Verdana, sans-serif'
        }
      }

    });
  }
  