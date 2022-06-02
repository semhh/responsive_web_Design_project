$( document ).ready(function() {
    let endpoint = 'https://api.linkpreview.net'
    let apiKey = '5b578yg9yvi8sogirbvegoiufg9v9g579gviuiub8'
  

    $("#right_buttons_1").click(function () {

      $.ajax({
        url: endpoint + "?key=" + apiKey + " &q=" + $( this ).text(),
         type:"get",
         dataType: 'text',  
         error: function(data){
         //debugger;
           alert('Failed to load resource: the server responded with a status of 403 ()');
         },
         success:function(data) {
           alert(data);
           $("#lead_text").html(data)
         }
     });

    });

  });