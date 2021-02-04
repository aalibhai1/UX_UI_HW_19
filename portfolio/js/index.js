$('.nav_item').hover(function() {
    $(this).stop().animate({ fontSize : '24px' });
},
function() {
    $(this).stop().animate({ fontSize : '14px' });
});

/* button alert */
$( "button" ).click(function() {
    alert( "Page Coming Soon!" );
  });