function expand()
{   console.log("called")
    document.getElementsByClassName('toggleable')[0].style.display="block";
}
function contract()
{
    document.getElementsByClassName('toggleable')[0].style.display="none";
}