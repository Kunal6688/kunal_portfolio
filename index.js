var light = true;

$(document).ready(function() {
    // Ensure video plays on page load
    $("#background-video")[0].play();
});

$(".theme").click(function() {
    if (light) {
        $(".back-video").attr("src", "video.mp4");
        $(".head").css("color", "white");
        $(".head-text").css("color", "white");
        $(".project_link").css("color", "white");
        $(".bi-brightness-high").attr("fill", "white");
        $(".bi-chevron-right").attr("fill", "white");
        
        $("#background-video")[0].play(); // Ensure video plays on theme toggle
        
        light = false;
    } else {
        $(".back-video").attr("src", "lightVideo.mp4");
        $(".head").css("color", "black");
        $(".head-text").css("color", "black");
        $(".project_link").css("color", "black");
        $(".bi-brightness-high").attr("fill", "black");
        $(".bi-chevron-right").attr("fill", "black");

        $("#background-video")[0].play(); // Ensure video plays on theme toggle

        light = true;
    }
});
