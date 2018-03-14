$(document).ready(function () {
    $("#btn-send").click(function () {
        var input = $("#input-message").val()
        $("#input-message").val('')
        $("#msg").append('<li class="message" id="me">' + input + '</li>');
        //Scroll down
        $('#messages').animate({
            scrollTop: $('#messages').get(0).scrollHeight}, 0);
    })

    var count = 0;
    setInterval(function(){
        $("#msg").append('<li class="message" id="him">' + 'Hello ' + count++ +'</li>');
        //Scroll down
        $('#messages').animate({
            scrollTop: $('#messages').get(0).scrollHeight}, 0);
    },7000)
});


