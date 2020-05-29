
$( document ).ready(function() {

  // CHIAMATA AJAX PER POSTARE
  $.ajax({
    url: "getPaganti.php",
    method: "GET",
    success: function(data){



      for (var i = 0; i < data.length; i++) {
        $("#name").append("<li data-id="+ data[i].id + ">" + data[i].name + "</li>");
        $("#lastname").append("<li data-id="+ data[i].id + ">" + data[i].lastname+ "</li>");
        $("#address").append("<li data-id="+ data[i].id + ">" + data[i].address + "</li>");
        $("#cestino").append("<li data-id="+ data[i].id + ">" + "<i class='delete fas fa-trash-alt'></i>"+ "</li>");

        // console.log(data[i].status);
      }

      // $("#status li").each(function(){
      //   var statusHtml = $(this).html();
      //   console.log(statusHtml);
      //   if (statusHtml === "accepted"){
      //     $(this).addClass("green");
      //   } else if (statusHtml === "rejected") {
      //     $(this).addClass("red");
      //   } else {
      //     $(this).addClass("grey");
      //   }


      // });
    },
    error: function(error){
      console.log(error);
    },
  }); // fine chiamata ajax

  $("#cestino").on("click",".delete", cancellaRiga );


  // CHIAMATA AJAX PER CANCELLARE
  function cancellaRiga(){
    // console.log("ciao");
    var mestesso = $(this);
    var id_mestesso = mestesso.parent().data("id");

    console.log(id_mestesso);
    $.ajax({
      url: "deletePagantibyId.php",
      method: "POST",
      data: {
        "id": id_mestesso,
      },
      success: function(data){
        $('[data-id='+ id_mestesso + ']').remove();

      },
      error: function(error){
        console.log(error);
      },
    }); // fine chiamata ajax


  }


});
