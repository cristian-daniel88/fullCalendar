let colorTask= 
    {
        low: 'green',
        normal: 'black',
        critical: 'red'
    };
    
let arrayExample = [
      {
        start: '2014-11-10',
        end: '2014-11-15',
        display: '',
        title:'Task 1.1: short description',
        color: colorTask['normal']
      },
      {
        start: '2014-11-14',
        end: '2014-11-20',
        display: '',
        title:'Task 1.2: short description',
        color:"green"
      },
]

document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      initialDate: '2014-11-10',
    //   dateClick: function(info) { 
    //     alert(info.dateStr);  
    //   },
    // right: "dayGridMonth,timeGridWeek,timeGridDay"
    
    headerToolbar: {
        left: "today prev next",
        center: "title",
        right: "dayGridMonth timeGridWeek"
    },
  

      events: arrayExample
    });
    calendar.render();
  });

  document.addEventListener('click', function (e) {
      if (e.target.innerText.split(':')[0].split(' ')[0] == 'Task') {
        console.log(e.target.innerText.split(':')[0]);
        
    }
    
  })