$(".menu").click(function () {
    $(this).next(".submenu").slideToggle(400);
});



/* i tried really hard on this part to get the articles to switch*/

let selection = ("story0.txt")
$("#stories").val(selection);
$("#story").load(selection);


$("#stories").change(function () {
    let novel = $(this).attr("id");
    $("#story").load(novel);
});







let clicks = 0;
            $("#increment").click(function () {
                clicks++;
                $("#currentcount").html(clicks);
            })
