$(document).ready(function(){
    $(".btn").on("click"  , function(){
        var value  = $("#search").val().toLowercase();
        $(".card .card-title .card-title").filter(function(){
            $(this).toggle($(this).text().toLowercase().indexOf(value) > -1);
        })

    })
})
// document.write(value)