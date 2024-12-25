
// $("iotwifi").on("click",function(){

//     $("#wifiii").append("<div class='col-lg-2' ><div class='card' style='width: 18rem;'>"+
//     "<img src='./public/images/EZM031.png' class='card-img-top' alt='IMG1'>"+
//     "<div class='card-body text-center'><h5 class='card-title'>Card title</h5>"+
//     " <p class='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>"+
//     "<a href='http://tw.yahoo.com' class='btn btn-primary'>Go somewhere</a></div></div></div>")

// });


    
// $('.product_btn').on('click',function(){

//     var id = $(this).attr("id");
//     window.location.hash = id;
//     console.log(window.location.hash);
//     $("#mainpage").load("./application/core/view/mainpage.html",function(){

//     $("#productinfo").load("./application/core/view/product/"+id+"/"+id+".html");

//         $("#productname").append(id);
        
//     });
 

// })

// $('#Browan').on('click',function(){

//     window.open("https://www.browan.com/product/XP/VJ");

//     })

    

$(".product_btn").on("click", function(e){

    var menu = window.location.hash;

    e.preventDefault();//防止頁面跳轉
    var sId = $(this).data("id");  //獲取data-id的值
    var location = $(this).attr("href");
    
    if(location!="#")
    scroll(location);
    
    window.location.hash = sId;  //設置錨點

    loadProduct(sId);
 });

 function loadProduct(sId){
    var sid = sId;
 var baseUrl = "./application/core/view/product/"+sid+"/"+sid+".html";

   
   $("#mainpage").load(baseUrl); //載入相對應的內容

}