$(document).ready(function(){
    $('#gallery-grid-1').hide();
    $('#gallery-grid-2').hide();
    $('#gallery-grid-3').hide();
    $('#gallery-grid-4').hide();
    $('#gallery-grid-5').hide();
    $('#gallery-grid-6').hide();
    $("#mycarousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');                    
        }
    });

    $("#openLoginModal").click(function () {
        $('#loginModal').modal('show')
    })

    $("#openReserveModal").click(function () {
        $('#reservetablemodal').modal('show')
    })

    $('#img-button').click(function() {
        $('#filter-box').hide();
        // var target = '#' + $(this).data('target');
        // $(target).show();
        $('#gallery-grid-1').show();
    })

    $('#img-button-1').click(function() {
        $('#filter-box').hide();
        // var target = '#' + $(this).data('target');
        // $(target).show();
        $('#gallery-grid-2').show();
    })

    $('#img-button-2').click(function() {
        $('#filter-box').hide();
        // var target = '#' + $(this).data('target');
        // $(target).show();
        $('#gallery-grid-3').show();
    })

    $('#img-button-3').click(function() {
        $('#filter-box').hide();
        // var target = '#' + $(this).data('target');
        // $(target).show();
        $('#gallery-grid-4').show();
    })

    $('#img-button-4').click(function() {
        $('#filter-box').hide();
        // var target = '#' + $(this).data('target');
        // $(target).show();
        $('#gallery-grid-5').show();
    })

    $('#img-button-5').click(function() {
        $('#filter-box').hide();
        // var target = '#' + $(this).data('target');
        // $(target).show();
        $('#gallery-grid-6').show();
    })

    $('#galleryModal-1').on('show.bs.modal', function (e) {
        $('#filter-box').hide();
        $('#galleryImage-1').attr("src",$(e.relatedTarget).data("large-src"));
     });

     $('#galleryModal-2').on('show.bs.modal', function (e) {
        $('#filter-box').hide();
        $('#galleryImage-2').attr("src",$(e.relatedTarget).data("large-src"));
     });

     $('#galleryModal-3').on('show.bs.modal', function (e) {
        $('#filter-box').hide();
        $('#galleryImage-3').attr("src",$(e.relatedTarget).data("large-src"));
     });

     $('#galleryModal-4').on('show.bs.modal', function (e) {
        $('#filter-box').hide();
        $('#galleryImage-4').attr("src",$(e.relatedTarget).data("large-src"));
     });

     $('#galleryModal-5').on('show.bs.modal', function (e) {
        $('#filter-box').hide();
        $('#galleryImage-5').attr("src",$(e.relatedTarget).data("large-src"));
     });

     $('#galleryModal-6').on('show.bs.modal', function (e) {
        $('#filter-box').hide();
        $('#galleryImage-6').attr("src",$(e.relatedTarget).data("large-src"));
     });


     $("#openLoginModal").click(function () {
        $('#loginModal').modal('show')
    })

    $(".hBack").on("click", function(e){
        $('#filter-box').show();
        $('#gallery-grid-1, #gallery-grid-2,#gallery-grid-3, #gallery-grid-4, #gallery-grid-5, #gallery-grid-6').hide();
    });
    

    // for plugins
    $( "#date" ).datepicker({
        inline: true
    });

    $(".dropdown").dropdown({
  label: "Select an Item"
});
    NiceSelect.bind(document.getElementById("mySelect"), {
  searchable: true
}); 
    $(".email").emailautocomplete();

});

