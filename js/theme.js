
    $(document).ready(function(){
        $("#black").click(function(){
            $("body , .offcanvas").css("background" , "black");
            $("li a , p , .navbar-toggler-icon").css("color" , "white");
            $(".nav-active").css("color" , "red");
            $("#black").css("display" , "none");
            $("#white").css("display" , "inline-block");
            $(".logo1").css("display" , "none");
            $(".logo2").css("display" , "inline-block");
            $(".card").css("border" , "1px solid black");
            $("label").css("color" , "red")
            $(".display-3").css("color" , "white")
            // $(".btn-outline-danger").css("background" , "rgb(142, 3, 3)")
            $(".btn-outline-danger").css("color" , "white")
            // $(".btn-outline-danger").css("border" , "none")
            $(".btn-danger").css("border" , "none")
            $(".btn-danger").css("background" , "rgb(142, 3, 3)")
            $(".btn-danger").css("color" , "white")
            $(".br").css("background" , "grey")
            $(".list li").css("color" , "white")
            // $(".list li:hover").css("color" , "red")
            
            
        })
        $("#white").click(function(){
            $("body , .offcanvas").css("background" , "white")
            $("li a , p").css("color" , "black")
            $(".nav-active").css("color" , "red")
            $("#white").css("display" , "none")
            $("#black").css("display" , "inline-block")
            $(".logo2").css("display" , "none")
            $(".logo1").css("display" , "inline-block")
            $(".card").css("border" , "1px solid white")
            $("label").css("color" , "black")
            $(".btn-outline-danger").css("color" , " RGBA(220, 53, 69)")
            $(".btn-outline-danger").css("border" , "1px solid RGBA(220, 53, 69)")

            $(".display-3").css("color" , "black")
            $(".btn-danger").css("border" , "none")
            $(".btn-danger").css("background" , " RGBA(220, 53, 69)")
            // $(".btn-danger").css("color" , "white"  )
            $(".br").css("background" , "rgb(224, 223, 223)")
            $(".list li").css("color" , "black")
        })
       $("p").click(function(){

           $(this).hide()
           // $(this).css("color" , "white")
       })
    })
