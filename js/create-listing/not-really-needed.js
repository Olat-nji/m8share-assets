function removeDiv(item) {

    $(item).closest('.lastlast').hide('slow', function() {
        $(item).closest('.lastlast').remove();
    });
}

function addDiv() {

    item = $("#item-cat").clone().appendTo("#props").show('slow');
    $('html, body').animate({
        scrollTop: $(item).offset().top-10
    }, 100);
    height=$(item).prop('scrollHeight')+$("#cardy").prop('scrollHeight')
    $("#cardy").height(height);
}