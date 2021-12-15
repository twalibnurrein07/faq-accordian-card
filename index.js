
$(".dropdown-toggle").on("click",function(){
  console.log("clicked");
  $(".dropdown-toggle").css("font-weight","bolder");
  $(".dropdown-menu").html("No more than 2GB.All files in your account must fit your alloted space.");
})
