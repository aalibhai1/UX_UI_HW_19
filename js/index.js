console.log("You index.js file is loaded correctly!");

/* nav bar*/
$('.nav_item').hover(function() {
    $(this).stop().animate({ fontSize : '24px' });
},
function() {
    $(this).stop().animate({ fontSize : '14px' });
});

/* button alert */
$( "button" ).click(function() {
    alert( "Button has not been configured yet!" );
  });