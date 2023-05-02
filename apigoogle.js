      // Load the API COVID-19 Database
      // const url = 'https://covid19.traffy.in.th/api/state-covid19';
      // const response = fetch(url);
      // const data = response.json();
      // const database = data.results;

      // Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});
      google.charts.load('current', {'packages':['line']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawPIEChart);
      google.charts.setOnLoadCallback(drawBARChart);
      google.charts.setOnLoadCallback(drawLINEChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.

      function drawPIEChart() {
        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Location');
        data.addColumn('number', 'AmountPUI');
        data.addRows([
        ['BKK', 738],
        ['DMK', 52],
        ['HKT', 8],
        ['CNX', 3],
        ['URT', 2],
        ['UBP', 2],
        ['UTP', 1],
        ['UTH', 1]
        ]);

        // Set chart options
        var options = {'title':'PUI at each airport on date',                  
                       'width':800,
                       'height':400,
                       'legend':'left',
                       
                     };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_pie'));
        chart.draw(data, options);

        // Import COVID-19 D          
        async function loadData (x){
    
          const url = 'https://covid19.traffy.in.th/api/state-covid19';
          const response = await fetch(url,{mode : 'no-cors'});
          const data = await response.json();
          const database = data.results;
          
          for (let x=0 ; x<database.length ; x++){
              const data_AllAirline = database[x].totalAirlinePUI;
              const data_BKKAirport = database[x].totalBKKAirportPUI;
              const data_DMKAirport = database[x].totalDMKAirportPUI;
              const data_HKTAirport = database[x].totalHKTAirportPUI;
              const data_CNXAirport = database[x].totalCNXAirportPUI;
              const data_URTAirport = database[x].totalURTAirportPUI;
              const data_UBPAirport = database[x].totalUBPAirportPUI;
              const data_UTPAirport = database[x].totalUTPAirportPUI;
              const data_UTHAirport = database[x].totalUTHAirportPUI;
              console.log(`${data_AllAirline}  ${data_BKKAirport}  ${data_DMKAirport} ${data_HKTAirport} ${data_CNXAirport} ${data_URTAirport} ${data_UBPAirport} ${data_UTPAirport} ${data_UTHAirport} `)
          }
          
      }
      
      loadData();
      }

      function drawBARChart() {
        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Location');
        data.addColumn('number', 'AmountPUI');
        data.addRows([
        ['BKK', 738],
        ['DMK', 52],
        ['HKT', 8],
        ['CNX', 3],
        ['URT', 2],
        ['UBP', 2],
        ['UTP', 1],
        ['UTH', 1]
        ]);

        // Set chart options
        var options = {'title':'PUI at each airport on date',                  
                       'width':800,
                       'height':400,
                       'legend':'left'
                     };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.BarChart(document.getElementById('chart_bar'));
        chart.draw(data, options);
      }

      function drawLINEChart() {

        var data = new google.visualization.DataTable();
        data.addColumn('number', 'Index');
        data.addColumn('number', 'newCases');
        data.addColumn('number', 'newRecovered');
        const x = 37.8
        
        data.addRows([
          [1,  37.8, 80.8],
          [2,  30.9, 69.5],
          [3,  25.4,   57],
          [4,  11.7, 18.8],
          [5,  11.9, 17.6],
          [6,   8.8, 13.6],
          [7,   7.6, 12.3],
          [8,  12.3, 29.2],
          [9,  16.9, 42.9],
          [10, 12.8, 30.9],
          [11,  5.3,  7.9],
          [12,  6.6,  8.4],
          [13,  4.8,  6.3],
          [14,  4.2,  6.2]
        ]);
  
        var options = {
          chart: {
            title: 'จำนวนผู้ติดเชื้อรายวัน และจำนวนผู้หายป่วย',
            subtitle: 'in millions of dollars (USD)'
          },
          width: 900,
          height: 500
        };
  
        var chart = new google.charts.Line(document.getElementById('chart_line'));
  
        chart.draw(data, google.charts.Line.convertOptions(options));
      }
      

      

  