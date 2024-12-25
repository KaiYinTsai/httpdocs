
var construct = function () {
    // if(location.hash =="#mainpage" ||location.hash =="#contactus"){
    //     location.hash =="";
    //     window.location ="";
    // }

    $(function () {
        var url = window.location.href;
        var hash = url.split("#").pop();
        // console.log("index param:" + url + " hash:" + hash);
        $("#body").hide();
        $('#menu').load("./application/core/view/menu.html");
        $('#banner').load("./application/core/view/banner.html");
        $('#footer').load("./application/core/view/footer.html");
        $('#contactus').load("./application/core/view/contactus.html", function () {
            var sc = document.createElement("script");
            sc.src = "./application/core/controller/pageRouter.js";
            $("body").append(sc);
            var sc1 = document.createElement("script");
            sc1.src = "./application/js/smtp.js";
            $("body").append(sc1);
        });
        if (hash != url) {
            baseUrl = "./application/core/view/" + hash + ".html";
            $("#mainpage").load(baseUrl);
        }
        /* $('#mainpage').load("./application/core/view/"+hash+".html",function () {  
                             var     sc =  document.createElement("script");
                                     sc.src= "./application/js/index.js";
                                     $("body").append(sc);
                             var     sc1 =  document.createElement("script");
                                     sc1.src= "./application/js/smtp.js";
                                     $("body").append(sc1);
                                     });*/
    });


    $("document").ready(function () {
        $("#wait").hide();
        $("#body").show();
    });

}

var test = function (dev) {
    alert(dev);
}
