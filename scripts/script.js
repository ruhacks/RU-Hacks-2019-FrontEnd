google.charts.load("current", {packages:["timeline"]});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {

    var container = document.getElementById('example5.2');
    var chart = new google.visualization.Timeline(container);
    var dataTable = new google.visualization.DataTable();

    dataTable.addColumn({ type: 'string', id: 'Category' });
    dataTable.addColumn({ type: 'string', id: 'Name' });
    dataTable.addColumn({ type: 'string', role: 'longName' });
    dataTable.addColumn({ type: 'string', role: 'location'});
    dataTable.addColumn({ type: 'date', id: 'Start' });
    dataTable.addColumn({ type: 'date', id: 'End' });
    dataTable.addColumn({ type: 'string', role: 'description'});
    dataTable.addRows([
      [ 'Main Events', 'Early Registration', '', 'TDB', new Date(2019,5,17,16,00), new Date(2019,5,17,17,00), '' ],
      [ 'Main Events', 'Registration', '', 'TDB', new Date(2019,5,17,17,00), new Date(2019,5,17,23,00), '' ],
      [ 'Main Events', 'Opening Ceremony', '', 'TDB', new Date(2019,5,17,19,00), new Date(2019,5,17,20,30), '' ],
      [ 'Main Events', 'Team Formation', '', 'TDB', new Date(2019,5,17,21,00), new Date(2019,5,17,22,00), '' ],
      [ 'Main Events', 'Hacking Begins', '', 'TDB', new Date(2019,5,17,22,00), new Date(2019,5,19,9,00), '' ],
      [ 'Main Events', 'Project Submission', '', 'TDB', new Date(2019,5,19,8,30), new Date(2019,5,19,10,00), '' ],
      //[ 'Main Events', 'Room Allocation for Demos', '', 'TDB', new Date(2019,5,27,8,00), new Date(2019,5,27,10,00), '' ],
      [ 'Main Events', 'Project Demos to Judges', '', 'TDB', new Date(2019,5,19,11,00), new Date(2019,5,19,13,30), '' ],      
      [ 'Main Events', 'Closing Ceromony', '', 'TDB', new Date(2019,5,19,14,00), new Date(2019,5,19,16,00), '' ],
      [ 'Food', 'Dinner', '', 'TDB', new Date(2019,5,17,20,30), new Date(2019,5,17,23,30), '' ],
      [ 'Food', 'Midnight Snack', '', 'TDB', new Date(2019,5,18,00,00), new Date(2019,5,18,2,00), '' ],
      [ 'Food', 'Breakfast', '', 'TDB', new Date(2019,5,18,7,00), new Date(2019,5,18,9,00), '' ], 
      [ 'Food', 'Lunch', '', 'TDB', new Date(2019,5,18,13,00), new Date(2019,5,18,15,00), '' ], 
      [ 'Food', 'Dinner',  '', 'TDB', new Date(2019,5,18,19,00), new Date(2019,5,18,21,30), '' ], 
      [ 'Food', 'Midnight Snack', '', 'TDB', new Date(2019,5,19,00,00), new Date(2019,5,19,2,00), '' ],
      [ 'Food', 'Brunch', '', 'TDB', new Date(2019,5,19,9,00), new Date(2019,5,19,12,00), '' ],
      [ 'Activities', 'Hacker-Sponsor Mingle', '', 'TDB', new Date(2019,5,17,17,00), new Date(2019,5,17,19,00), '' ],
      [ 'Activities', 'Cup Stacking', 'Cup Stacking Challenge', 'TDB', new Date(2019,5,18,21,00), new Date(2019,5,18,21,00), 'Cup Stacking is a hackathon pastime that lets hackers engage in a fun activity with their friends and fellow hackers. In teams of two, the participants attempt to create the tallest tower of cups stacked on top of each other.' ],
      [ 'Activities', 'Networking Event', 'Networking Event', 'TDB', new Date(2019,5,18,18,30), new Date(2019,5,18,20,00), '' ],
      [ 'Workshops', 'Smart Contracts/Solidity', 'Introduction to Smart Contracts/Solidity Workshop <br> Presented by: ChainSafe Systems', 'TDB', new Date(2019,5,17,22,00), new Date(2019,5,17,23,00), '' ],
      [ 'Workshops', 'TDB','TDB', 'TDB', new Date(2019,5,17,23,00), new Date(2019,5,18,0,00), '' ],
      [ 'Workshops', 'Lighthouse Labs', 'Presented by: Lighthouse Labs', 'TDB', new Date(2019,5,18,10,00), new Date(2019,5,18,11,00), '' ],
      //[ 'Workshops', 'TDB', 'Open Source Tools <br> Presented by: Linux User Group (LUG)', 'TDB', new Date(2019,5,26,12,00), new Date(2019,5,26,13,00), 'Joins us in this workshop to go over using the Linux terminal, Kubernetes, and Docker and how these tools can help you along the development process.' ],
      [ 'Workshops', 'TDB', 'Presented by: TDB', 'TDB', new Date(2019,5,18,12,00), new Date(2019,5,18,13,00), '' ],
      [ 'Workshops', 'Introduction to Angular', 'Presented by: ', 'TDB', new Date(2019,5,18,15,00), new Date(2019,5,18,16,00), '' ],
      [ 'Workshops', 'BMO Workshop', 'Presented by: BMO', 'TDB', new Date(2019,5,18,17,00), new Date(2019,5,18,18,00), '' ],
      [ 'Workshops', 'FDM Group', '', 'TBD', new Date(2019,5,18,20,30), new Date(2019,5,18,21,00), '' ]]);
      [ 'Workshops', 'HackerEarth', 'Submitting to HackerEarth', 'TBD', new Date(2019,5,19,00,00), new Date(2019,5,19,01,00), 'We\'ll be showing everyone how to submit their project on HackerEarth' ];

    var options = { timeline: { colorByRowLabel: true}, width: 5000, height: 300, barLabelStyle: {
        fontSize: 80}
    };

    chart.draw(dataTable, options);

    google.visualization.events.addListener(chart, 'onmouseover', function(e) {
        setTooltipContent(dataTable,e.row);
    });

    google.visualization.events.addListener(chart, 'select', function() {
        setDescriptionArea(dataTable, chart.getSelection());
    });
}


function setTooltipContent(dataTable,row) {    
    var tooltip = document.getElementsByClassName("google-visualization-tooltip")[0];

    if (row != null) {
        var duration = Math.abs(dataTable.getValue(row, 4) - dataTable.getValue(row, 5))/ 36e5;
        var name = dataTable.getValue(row, 2) || dataTable.getValue(row, 1);
        var content = '<br><div class="custom-tooltip"><strong>' + name + '</strong>' +
            '<br><br><strong>Location:</strong> ' + dataTable.getValue(row, 3) + '<br>' +
            '<strong>Duration:</strong> '+ duration + ' Hour' + (duration > 1 ? 's' : '') +
            (dataTable.getValue(row, 6).trim() !== '' ? '<br><br>Click to get more info<br><br>' : '<br><br>') +
            '</div>'; //generate tooltip content
        tooltip.innerHTML = content;
        tooltip.style.height = 'auto';
    }
}

function setDescriptionArea(dataTable,selected) {
    var descContainer = document.getElementById('schedule-more-details');

    if (selected.length > 0 && selected[0].row != null) {
        var row = selected[0].row;
        var duration = Math.abs(dataTable.getValue(row, 4) - dataTable.getValue(row, 5))/ 36e5;
        var name = dataTable.getValue(row, 2).trim() || dataTable.getValue(row, 1);
        var content = '<br><div class="custom-tooltip"><strong>' + name + '</strong>' +
            '<br><br><strong>Location:</strong> ' + dataTable.getValue(row, 3) + '<br>' +
            '<strong>Duration:</strong> '+ duration + ' Hour' + (duration > 1 ? 's' : '') +
            (dataTable.getValue(row, 6).trim() !== '' ? '<br><strong>Description:</strong><br>' + dataTable.getValue(row, 6) : '') +
            '</div>'; //generate tooltip content
        descContainer.innerHTML = content;
    }
}