$("document").ready(function(){
        $('.seasons a').click(function(e){//find all a tags inside class of seasons
            e.preventDefault();//stop default submission
            var season = $(this).attr("href");//contents of href attribute of this element
            alert(season);

            season = season.toLowerCase();

            switch (season){
                 
                case "spring":
                    $("#logo").attr("src", "images/spring.gif");
                    //#2B7129
                    $("html").css("background-color", "#2B7129");
                    $("#wear").attr("src", "images/spring-wear.jpg");
                    $("#message").text("Springin' into Spring!");
                break;

                case "summer":
                    $("#logo").attr("src", "images/summer.gif");
                    //#EBA52B
                    $("html").css("background-color", "#EBA52B");
                    $("#wear").attr("src", "images/summer-wear.jpg");
                    $("#message").text("Sunny Summer, the best!");
                break;

                case "fall":
                    $("#logo").attr("src", "images/fall.gif");
                    //#A81124
                    $("html").css("background-color", "#A81124");
                    $("#wear").attr("src", "images/fall-wear.jpg");
                    $("#message").text("Fallin' for fall!");
                break;

                case "winter":
                    $("#logo").attr("src", "images/winter.gif");
                    //#005393
                    $("html").css("background-color", "#005393");
                    $("#wear").attr("src", "images/winter-wear.jpg");
                    $("#message").text("Cold like your soul!");
                break;

                default:
                    $("#logo").attr("src", "images/four-seasons.gif");
                    
                    $("html").css("background-color", "#ccc");
                    $("#wear").attr("src", "images/four-seasons.gif");
                    $("#message").text("Default");
                break;
                    //alert ("You didn't hit a case!");

            }



        });
    }); 