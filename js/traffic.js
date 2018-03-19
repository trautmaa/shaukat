// $( function() {
//   $( "#slider" ).slider({
//     min: 1,
//     max: 50
//
//   });
// });
//

var value = 10;

$("#slider").slider(
{
            value:1,
            min: 0,
            max: 20,
            step: 1,
            slide: function( event, ui ) {
                count = ui.value;
                currentAvatarCount = $('.avatar').length;
                $(".avatar").remove();
                for(var i=0; i < count; i++){
                    $("#pen").append("<div class='avatar'></div>");
                }
            }
}
);
//

// $( function() {
//   $( "#slider" ).slider();
// } );
