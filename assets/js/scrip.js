// js



// jQuery
$(document).ready(function(){


    
   $( "#enviarcorreo" ).tooltip({
      position: {
        my: "center bottom-20",
        at: "center top",
        using: function( position, feedback ) {
          $( this ).css( position );
          $( "<div>" )
            .addClass( "arrow" )
            .addClass( feedback.vertical )
            .addClass( feedback.horizontal )
            .appendTo( this );
        }
      }
    });


    $("#enviarcorreo").click(function(){
      alert("El correo fue enviado correctamente");
      })


    $("#ingredientes").dblclick(function(){
       $("#ingredientes").css({"color":"red"});
    })

    
    $("#preparacion").dblclick(function(){
        $("#preparacion").css({"color":"red"});
     })

        
      $("#receta1").click(function(){
        $("#contenidoreceta1").toggle();
        $("#contenidoreceta2").toggle();
        $("#contenidoreceta3").toggle();
      });

      $("#receta2").click(function(){
        $("#contenidoreceta1").toggle();
        $("#contenidoreceta2").toggle();
        $("#contenidoreceta3").toggle();
      });

      $("#receta3").click(function(){
        $("#contenidoreceta1").toggle();
        $("#contenidoreceta2").toggle();
        $("#contenidoreceta3").toggle();
      });

})