/* Don't use <script> tags in a linked js file! */

$(".menubox").click(function () {
    $(this).find(".submenu").slideToggle();
});

let content = ("content1.txt") // sets default verse element
$("#choose-content").val(content); // changes menu option to default
$("#content").load(content); // retrieves only default element
$("#choose-content").change(function () {
    verse = $(this).val();
    $("#content").load(verse);
});

$("#choose-content").change(function(){
    selection = $(this).val();
    $("#content").load(select);
});
