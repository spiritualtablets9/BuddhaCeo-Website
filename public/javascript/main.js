function expand(x)
{   console.log("called")
    document.getElementById(x).style.display="block";
}
function contract(x)
{
    document.getElementById(x).style.display="none";
}
$(document).ready(function(){
$('.navbar-nav .nav-item a').click(function(){
    $(this).closest('.nav-item').siblings().removeClass('active');
    $(this).closest('.nav-item').addClass('active');
})
var mybutton = document.getElementById("topButton");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
});

function setLocaleCookie(locale) {
  document.cookie="i18n_lang="+locale;
  window.location.reload();
  //window.location = window.location 
}
