$(document).ready(function () {

    $("#btn-send").click(function () {
        var input = $("#input-message").val()
        $("#input-message").val('')
        $("#msg").append('<li class="message" id="me">' + input + '</li>');
        //Scroll down
        scrollDown()
    })

    
    var bordcast = "التعميم هو قانون منطقي يحلل تفسير الشامل بملاحظة المحدود. والفكرة تطرح ان في نطاق ما، او مجموعةعناصر لها خصائص مشتركة، فانه يمكن اعتماد نتيجة عامل واحد كنتيجة شامله للك    عندما يقوم العقل بالتعميم، فإنه يستخراج جوهر مفهوم على أساس تحليله من أوجه التشابه من العديد من الكائنات المنفصلة. فالتبسيط الناتج يسمح بالفكير بمستويات أعلى";
    var count = 0;
    setInterval(function(){
        $("#msg").append('<li class="message" id="him">' + 'السلام عليكم ' + count++ +'</li>');
        //Scroll down
        scrollDown()
    },7000)

    setInterval(function(){
        $("#msg").append('<li class="message" id="brodcast">' + bordcast +'</li>');
        //Scroll down
        scrollDown()
    },24000)

    //when click on user
    $('.user-item').click(function(){
        var userId = $(this).attr('id')
        console.log(userId)
        $('#text-who-talk').text(userId)
    })

});


