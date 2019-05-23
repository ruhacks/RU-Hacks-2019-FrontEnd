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
      [ 'Main Events', 'Early Registration', '', 'Lower Ground (LG)', new Date(2019,5,17,17,00), new Date(2019,5,17,18,00), '' ],
      [ 'Main Events', 'Registration', '', 'Lower Ground (LG)', new Date(2019,5,17,18,00), new Date(2019,5,17,22,00), '' ],
      [ 'Main Events', 'Opening Ceremony', '', 'ENG103', new Date(2019,5,17,19,00), new Date(2019,5,17,20,30), '' ],
      [ 'Main Events', 'Team Formation', '', 'TDB', new Date(2019,5,17,21,00), new Date(2019,5,17,22,00), '' ],
      [ 'Main Events', 'Hacking Begins', '', 'Hacker Spaces', new Date(2019,5,17,22,00), new Date(2019,5,19,10,00), '' ],
      [ 'Main Events', 'Project Submission', '', 'HackerEarth', new Date(2019,5,19,8,30), new Date(2019,5,19,10,00), '' ],
      //[ 'Main Events', 'Room Allocation for Demos', '', 'TDB', new Date(2019,5,27,8,00), new Date(2019,5,27,10,00), '' ],
      [ 'Main Events', 'Project Demos to Judges', '', 'TDB', new Date(2019,5,19,11,00), new Date(2019,5,19,13,30), '' ],      
      [ 'Main Events', 'Closing Ceromony', '', 'ENG103', new Date(2019,5,19,14,00), new Date(2019,5,19,16,00), '' ],
      [ 'Food', 'Dinner', '', '2nd Floor', new Date(2019,5,17,20,30), new Date(2019,5,17,22,00), '' ],
      //[ 'Food', 'Midnight Snack', '', 'Lower Ground (LG)', new Date(2019,5,18,00,00), new Date(2019,5,18,2,00), '' ],
      [ 'Food', 'Breakfast', '', '2nd Floor', new Date(2019,5,18,8,00), new Date(2019,5,18,10,00), '' ], 
      [ 'Food', 'Lunch', '', '2nd Floor', new Date(2019,5,18,13,00), new Date(2019,5,18,15,00), '' ], 
      [ 'Food', 'Dinner',  '', '2nd Floor', new Date(2019,5,18,18,00), new Date(2019,5,18,20,00), '' ], 
      //[ 'Food', 'Midnight Snack', '', 'Lower Ground (LG)', new Date(2019,5,19,00,00), new Date(2019,5,19,2,00), '' ],
      [ 'Food', 'Breakfast', '', '2nd Floor', new Date(2019,5,19,9,00), new Date(2019,5,19,10,00), '' ],
      [ 'Activities', 'Games Room Opens', '', 'Lower Ground 24 (LG24)', new Date(2019,5,18,01,00), new Date(2019,5,18,06,00), '' ],
      [ 'Activities', 'Karaoke', '', 'Lower Ground 24 (LG24)', new Date(2019,5,18,02,00), new Date(2019,5,18,03,00), '' ],
      [ 'Activities', 'Whisper', '', 'Lower Ground 24 (LG24)', new Date(2019,5,18,03,00), new Date(2019,5,18,04,00), '' ],
      [ 'Activities', 'Board Games/Open Room', '', 'Lower Ground 24 (LG24)', new Date(2019,5,18,04,00), new Date(2019,5,18,05,00), '' ],
      [ 'Activities', 'Mafia', '', 'Lower Ground 24 (LG24)', new Date(2019,5,18,05,00), new Date(2019,5,18,06,00), '' ],
      [ 'Activities', 'Hacker-Sponsor Mingle', '', 'Lower Ground (LG)', new Date(2019,5,17,17,00), new Date(2019,5,17,19,00), '' ],
      [ 'Activities', 'Chess Tournament', '', 'Lower Ground 24 (LG24)', new Date(2019,5,18,10,00), new Date(2019,5,18,11,00), '' ],
      [ 'Activities', 'Cup Stacking', 'Cup Stacking Challenge', 'TDB', new Date(2019,5,18,16,00), new Date(2019,5,18,17,00), 'Cup Stacking is a hackathon pastime that lets hackers engage in a fun activity with their friends and fellow hackers. In teams of two, the participants attempt to create the tallest tower of cups stacked on top of each other.' ],
      [ 'Activities', 'Networking Event', 'Networking Event', 'Sears Atrium', new Date(2019,5,18,18,00), new Date(2019,5,18,20,00), '' ],
      [ 'Activities', 'Hello World Battle', 'Hello World Battle', 'TBD', new Date(2019,5,18,23,00), new Date(2019,5,19,00,00), '' ],
      [ 'Activities', 'Yoga', 'Yoga With Soumya', 'TDB', new Date(2019,5,18,21,30), new Date(2019,5,18,22,00), 'Come join our very own Soumya from RU Hacks for a small relaxing session.' ],
      [ 'Activities', 'More Games', 'Jackbox And other Board Games', 'Lower Ground 24 (LG24)', new Date(2019,5,19,00,00), new Date(2019,5,19,07,00), '' ],
      [ 'Workshops', 'Smart Contracts/Solidity', 'Introduction to Smart Contracts/Solidity Workshop <br> Presented by: ChainSafe Systems', 'ENG106', new Date(2019,5,17,22,00), new Date(2019,5,17,23,00), '' ],
      [ 'Workshops', 'Introduction to Angular Workshop','Introduction to Angular Workshop <br> Presented by: RU Hacks', 'ENG106', new Date(2019,5,17,23,00), new Date(2019,5,18,0,00), '' ],
      [ 'Workshops', 'JS Chatbot Workshop', 'JS Chatbot Workshop <br> Presented by: Lighthouse Labs', 'ENG106', new Date(2019,5,18,11,00), new Date(2019,5,18,12,00), '' ],
      [ 'Workshops', 'Multiple Database Change Package Release Automation Workshop', 'Multiple Database Change Package Release Automation Workshop <br> Presented by: BMO', 'ENG106', new Date(2019,5,18,12,00), new Date(2019,5,18,13,00), '' ],
      [ 'Workshops', 'DevOps Practices Workshop', 'DevOps Practices Workshop <br> Presented by: BMO', 'ENG106', new Date(2019,5,18,14,00), new Date(2019,5,18,15,00), '' ],
      [ 'Workshops', 'Submitting to HackerEarth', 'Need Help Submitting on HackerEarth? <br> Presented by: RU Hacks', 'Everywhere', new Date(2019,5,19,07,00), new Date(2019,5,19,09,00), 'Need help submitting your project or planning how to word it? The Devs Team will be around to assist you! Just shoot us a message!'],
      [ 'Workshops', 'The Freshest Workshop', 'The Freshest Workshop <br> Presented by: iTradeNetwork', 'ENG106', new Date(2019,5,18,15,00), new Date(2019,5,18,16,00), '' ],
      [ 'Workshops', 'Homebrew Programming for Nintendo 64 Workshop', 'Homebrew Programming for Nintendo 64 Workshop <br> Presented by: FDM Group', 'ENG106', new Date(2019,5,18,20,30), new Date(2019,5,18,21,30), '' ]]);
      

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