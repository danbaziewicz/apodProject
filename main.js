$('#submit').click(function (e) {
    var dataEscolhida = $('#data').val();
    e.preventDefault();
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=e1uudfOhtIE94bLqNJFW2v4qV96NdHnmMm9JWf6t&date=${dataEscolhida}`,
        success: function (resp) {
            showScreen(resp)
        },
        error: function (erro) {
            showError(erro);
        }
    })
})

$('#data').keydown(function (event) {
    if (event.which == 13) {
        $('#submit').click();
    }
})

function showScreen(resp) {
    if (resp.media_type == 'video') {
        $('.introFlex').css('display', 'none');
        $('.itemsBox').css('display', 'flex');
        $('.errorBoxFlex').css('display', 'none');
        $('.textBoxDesc').css("display", "flex");
        $('.video').css("display", "flex");
        $('.divImg').css("display", "none");
        $('#titleVid').text(resp.title).css('textAlign', 'center');
        $('#textBoxDesc').text(resp.explanation);
        $('#vid').attr("src", resp.url);
        $('#currentDate').text(resp.date);
    } else {
        $('.introFlex').css('display', 'none');
        $('.itemsBox').css('display', 'flex');
        $('.errorBoxFlex').css('display', 'none');
        $('.textBoxDesc').css("display", "flex");
        $('.divImg').css("display", "flex");
        $('.video').css("display", "none");
        $('#titleImg').text(resp.title).css('textAlign', 'center');
        $('#textBoxDesc').text(resp.explanation);
        $('#img').attr("src", resp.url);
        $('#currentDate').text(resp.date);
    }
}

function showError(erro) {
    $('.introFlex').css('display', 'none');
    $('.itemsBox').css('display', 'flex');
    $('.textBoxDesc').css("display", "none");
    $('.video').css("display", "none");
    $('.divImg').css("display", "none");
    $('.errorBoxFlex').css('display', 'flex');
    $('#errorMsg').text(erro.responseJSON.msg);
}