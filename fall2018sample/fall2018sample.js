/* Don't use <script> tags in a linked js file! */

$(".menubox").click(function () {
    $(this).find(".submenu").slideToggle();
});

let content = ("content1.txt") // sets default verse element
$("#choose-content").val(content); // changes menu option to default
$("#content").load(content); // retrieves only default element
$("#choose-content").change(function () { // can put click to replace change in order to have user click for event to happen
    verse = $(this).val();
    $("#content").load(verse);
});

