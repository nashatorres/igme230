/* Don't use <script> tags in a linked js file! */

$(".menuitem").click(function () {
    $(".submenu").slideToggle(400);
});

let content = ("content1.txt") // sets default verse element
$("#choose-content").val(content); // changes menu option to default
$("#content").load(content); // retrieves only default element
$("#choose-content").change(function () {
    verse = $(this).val();
    $("#content").load(verse);
});
