$(function() {
    console.log("hello");
    $(".links").hover(function() {
        $(".mediaImg").addClass("blur");
        $(".mediaImg").addClass("zoom");
        $(".mediaImg").removeClass("sBlur");
        $(".mediaImg").removeClass("sZoom");
    }, function() {
        $(".mediaImg").removeClass("blur");
        $(".mediaImg").removeClass("zoom");
        $(".mediaImg").addClass("sBlur");
        $(".mediaImg").addClass("sZoom");
    });

    $(".video").hover(function() {
        $(".bImgVideos").addClass("zoomVideo");
        $(".bImgVideos").removeClass("sZoom");
    }, function() {
        $(".bImgVideos").removeClass("zoomVideo");
        $(".bImgVideos").addClass("sZoom");
    });
});