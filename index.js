

$("#about").click(function(e){
    var disp = $(".about").css('display')
    if(disp == 'block'){
        $(".about").css('display','none');
    }
    else{
        $(".resume").css('display','none')
        $(".contact").css('display','none');
        $(".portfolio").css('display','none')
        $(".teaching").css('display','none')

        $(".about").css('display','block')
    }
});

$("#teaching").click(function(e){
    var disp = $(".teaching").css('display')
    if(disp == 'block'){
        $(".teaching").css('display','none');
    }
    else{
        $(".about").css('display','none');
        $(".resume").css('display','none')
        $(".contact").css('display','none');
        $(".portfolio").css('display','none')

        $(".teaching").css('display','block')

    }
});

$("#portfolio").click(function(e){
    var disp = $(".portfolio").css('display')
    if(disp == 'block'){
        $(".portfolio").css('display','none');
    }
    else{
        $(".about").css('display','none');
        $(".resume").css('display','none')
        $(".contact").css('display','none');
        $(".teaching").css('display','none')

        $(".portfolio").css('display','block')

    }
});


$("#resume").click(function(e){
    var disp = $(".resume").css('display')
    if(disp == 'block'){
        $(".resume").css('display','none');
    }
    else{
        $(".about").css('display','none');
        $(".contact").css('display','none');
        $(".portfolio").css('display','none')
        $(".teaching").css('display','none')

        $(".resume").css('display','block')
    }
});

$("#contact").click(function(e){
    var disp = $(".contact").css('display')
    if(disp == 'block'){
        $(".contact").css('display','none');
    }
    else{
        $(".about").css('display','none');
        $(".resume").css('display','none')
        $(".portfolio").css('display','none')
        $(".teaching").css('display','none')


        $(".contact").css('display','block')
    }
});