$(document).ready(function()
{
    // preload the image for each link
    $("#current_project a").each(function()
    {
        var swappedImage = new Image();
        swappedImage.src = $(this).attr('href');
    });

    // set up the event handlers for each link
    $("#current_project a").click(function(evt)
    {
        //swap image
        var imageURL = $(this).attr("href");
        $("#current_project_main_image").attr("src", imageURL);

        //swap caption
        var caption = $(this).attr("title");
        $("#current_project_caption").text(caption);

        //cancel the default action of the link
        evt.preventDefault(); //jQuery cross-browser method
    }); //end click

    //move focus to first thumbnail
    $("li:first-child a").focus();

}); //end ready

$(document).ready(function()
{
    // preload the image for each link
    $("#former_project a").each(function()
    {
        var swappedImage = new Image();
        swappedImage.src = $(this).attr('href');
    });

    // set up the event handlers for each link
    $("#former_project a").click(function(evt)
    {
        //swap image
        var imageURL = $(this).attr("href");
        $("#former_project_main_image").attr("src", imageURL);

        //swap caption
        var caption = $(this).attr("title");
        $("#former_project_caption").text(caption);

        //cancel the default action of the link
        evt.preventDefault(); //jQuery cross-browser method
    }); //end click

    //move focus to first thumbnail
    $("li:first-child a").focus();

}); //end ready