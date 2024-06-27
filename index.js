let items = document.querySelectorAll(".item");
var i = 0;
$(".next").click(function () {
    if (i >= items.length - 1)
        i = 0;
    else
        i++;
    nextDiv();

});
$(".prev").click(function () {
    if (i <= 0)
        i = items.length - 1;
    else
        i--;
    prevDiv();
});
function prevDiv() {
    if (i === items.length - 1) {
        items[i].style.display = "grid";
        items[0].style.display = "none";
    } else {
        items[i].style.display = "grid";
        items[i + 1].style.display = "none";
    }
}

function nextDiv() {
    if (i === 0) {
        items[i].style.display = "grid";
        items[items.length - 1].style.display = "none";
    } else {
        items[i - 1].style.display = "none";
        items[i].style.display = "grid";
    }
}
$(".show").click(function () {
    $(".sideBar nav ul").css("transform", "translateY(0)");
});
$(".close").click(function () {
    $(".sideBar nav ul").css("transform", "translateY(-100px)");
    
});


