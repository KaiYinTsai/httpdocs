var baseUrl;

$(".nav-item a,#banner_btn").on("click", function (e) {

    e.preventDefault();//防止頁面跳轉

    var sId = $(this).data("id");  //獲取data-id的值
    var location = $(this).attr("href");

    if (location != "#")
        scroll(location);


    if (sId == "contactus") {
        return;
    }

    if (sId == "navbarDropdown")
        return;
    window.location.hash = sId;  //設置錨點
    // console.log(sId);
    // if (sId == "vayyar") {
    //     loadProvider(sId);
    //     return;
    // }

    // loadInner(sId);

});

function loadInner(sId) {
    var sid = sId;

    // console.log("loadinner");
    baseUrl = "./application/core/view/" + sid + ".html";

    $("#mainpage").load(baseUrl); //載入相對應的內容

}

function loadProvider(sId) {
    // console.log("loaprovider");
    baseUrl = "./application/core/view/provider/" + sId + "/" + sId + ".html";
    $("#mainpage").load(baseUrl); //載入相對應的內容
}
/* 
$(function() {
    $(".nav-item a, #top, banner_btn").on("click",function(){

    var sId = $(this).data("id");
    if (sId =="navbarDropdown")
        return;
        console.log(sId);//print id at console
    window.location.hash = sId;
    loadInner(sId);
        
    });

    function loadInner(sId){

        var sId = window.location.hash;
        var path, i;
        switch(sId){
            case "#iotwifi":path = "./application/core/view/iotwifi.html"; i = 0; break;
            case "#iotlora":path = "./application/core/view/iotlora.html"; i = 1; break;
        }
        $("#mainpage").load(path);

    
    }
})
*/
/*****************監聽url變動*****************/
window.addEventListener('hashchange', function (event) {

    // console.log(event);

    var sId = window.location.hash.split('#');
    switch (sId[1]) {
        case 'aboutus': loadInner(sId[1]); return;
        case 'iotwifi': loadInner(sId[1]); return;
        case 'iotlora': loadInner(sId[1]); return;
        case 'nbiot': loadInner(sId[1]); return;
        case 'wirelessrouter': loadInner(sId[1]); return;
        case 'odm': loadInner(sId[1]); return;
        case 'actualcase': loadInner(sId[1]); return;
        case 'coretechology': loadInner(sId[1]); return;
        case 'vayyar': loadProvider(sId[1]); return;
        case 'merryiot': loadInner(sId[1]); return;
        case 'contactus': return;

        //
        case 'nckuBcLabDataCollectionPage': loadInner(sId[1]); return;
    }
    // loadInner(sId[1]);
})

$('#top').on('click', function () {

    scroll('#headerline');

})


//動畫捲動
function scroll(page) {

    $('html, #body').animate({
        scrollTop: $(page).offset().top
    }, 100);

}



$('.banner_btn').on('click', function () {

    var id = $(this).attr("id");
    $("#mainpage").load("./application/core/view/mainpage.html", function () {

        $("#productinfo").load("./application/core/view/product/" + id + "/" + id + ".html");

        $("#productname").append(id);


    });


})


$('#Browan').on('click', function () {

    window.open("https://www.browan.com/product/XP/VJ");

})

