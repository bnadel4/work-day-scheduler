$(function () {
  
  var day = dayjs().format('dddd, MMMM Do');
  $( "#currentDay" ).append( day );
  
  var now = dayjs().hour();

  $('.time-block').each(function(){
    var scheduleHour = parseInt($(this).attr('id').split('-')[1])
    if (scheduleHour < now) {
      $(this).addClass('past');
    } else if (scheduleHour === now) {
      $(this).removeClass('past');
      $(this).addClass('present');
    } else {
      $(this).removeClass('past');
      $(this).removeClass('present');
      $(this).addClass('future');
    }
  })  

  $('.saveBtn').on('click',function(){
    var blockTime = $(this).parent().attr('id');
    var blockDesc = $(this).siblings('.description').val();
    localStorage.setItem(blockTime, blockDesc);
  });
 
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));

});

