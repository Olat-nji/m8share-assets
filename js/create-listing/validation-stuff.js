
function change_step(step) {


    if (!validate(step)) {

        return step;

    }
    if (step == 3) {
        fireStepthree()
    }


    $('#step-' + step + '-next').trigger('click');
    if (step != 2) {
        $('html, body').animate({
            scrollTop: $("#listing-form").offset().top - 10
        }, 100);
    }

    // $(".multisteps-form__form").height($("#multisteps-form-"+step).prop('scrollHeight'));
}

function prev_step() {
    $('html, body').animate({
        scrollTop: $("#listing-form").offset().top - 10
    }, 100);
}


$.validator.setDefaults({

    highlight: function (element) {
        $(element).parent().addClass("is-invalid");
    },
    unhighlight: function (element) {
        $(element).parent().removeClass("is-invalid");
    }
    , invalidHandler: function (form, validator) {

        if (!validator.numberOfInvalids())
            return;

        $('html, body').animate({
            scrollTop: $(validator.errorList[0].element).offset().top - 10
        }, 100);
    },
    errorPlacement: function (error, element) {
        // your custom error placement logic

        error.appendTo(element.parent().parent());

    }
});

function validate(step) {

    var form = $('#multisteps-form-' + step)
    if (step == 1) {
        form.validate({
            rules: {
                address: {
                    required: true
                }
            }
        });
        var is=document.getElementById('latitude').value!='' && $("input[name='address'").valid();
        if(!is){
            new swal({
                title: "Please select a valid address",
                icon: "error",
                dangerMode: true})
        }
        return is

        
    }

    if (step == 3) {
        form.validate()
        return form.valid()

    }


    if (step == 5) {
        form.validate()
        return form.valid()
    }

    form.validate()
    return form.valid()
}









function fireStepthree() {
    // Livewire.emit('updateItemType', {
    //     data: $('#multisteps-form-3').serialize()
    // })
    // showLoadingSwal();

}

function validateAll(e = null) {

    if (myDropzone.getAcceptedFiles().length === 0) {
        if (e) e.preventDefault()


        new swal({
            title: "Please upload at least one image.",
            icon: "error",
            dangerMode: true,
        })
        return false;
    }

    for (var i = 1; i < 5; i++) {
        form = $('#multisteps-form-' + i)
        form.validate({
            ignore: ""
        });
        
        if (!form.valid()) {
            to = i - 1
            showStep(to)

            if (e) e.preventDefault()

            new swal({
                title: "Oops you have some errors",
                icon: "error",
                dangerMode: true,
            })
            return false;

        }
        return true
    }
    //   alert('sd')
    //   e.preventDefault()
    //   return;

    localStorage.removeItem('activeStep')
}


$('#multisteps-form-5').submit(validateAll)











function showLoadingSwal() {

    new swal({
        title: "Saving...",
        icon: "info",
        toast: true,
        position: 'top-end',
        timerProgressBar: true,
        showConfirmButton: false,
        width: 200,
        timer: 2000,
        padding: "0.5em",

    })
}


function showSuccessSwal() {


    new swal({
        title: "Saved",
        icon: "success",
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        width: 200,
        timer: 2000,
        padding: "0.5em"

    })
}  
