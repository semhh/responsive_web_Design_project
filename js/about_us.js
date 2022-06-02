function getJSON(jsonFileURL) {
    // $("#lead_text").html(jsonFileURL);
    // $("#about_title").html("../json_files/about_us_2.json".about_us[0]);

    $.ajax({
        url: jsonFileURL,
        dataType: "text",
        success: function (data) {
            console.log("success");
            var json = $.parseJSON(data);
            $("#about_title").html(json.about_us[0].title);
            $("#lead_text").html(json.about_us[0].text);
        }
    });

}

// $("#right_buttons").click(function(){$("#lead_text").html("asd");})

$(document).ready(function() {
    $("a").click(function () {
        var title = $(this).attr("title");        
        getJSON("../json_files/"+title+".json"); 
    });
    
}); // end ready