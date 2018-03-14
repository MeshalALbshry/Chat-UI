$(document).ready(function(){
    $("#btn-send").click(function(){
        var input = $("#input-massage").val()
        $("#msg").append('<li class="me">'+input+'</li>');
        $("#msg").append('<li class="him">Hello</li>');
    })
});


