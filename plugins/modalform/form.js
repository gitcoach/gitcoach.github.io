var request;

// Bind to the submit event of our form
$("#contact").submit(function(event){

    // Prevent default posting of form - put here to work in case of errors
    event.preventDefault();

    // Abort any pending request
    if (request) {
        request.abort();
    }
    // setup some local variables
    var $form = $(this);

    // Let's select and cache all the fields
    var $inputs = $form.find("input, select, button, textarea");

    // Serialize the data in the form
    var serializedData = $form.serialize();

    // Let's disable the inputs for the duration of the Ajax request.
    // Note: we disable elements AFTER the form data has been serialized.
    // Disabled form elements will not be serialized.
    $inputs.prop("disabled", true);

    // Fire off the request to /form.php
    request = $.ajax({
        url: "includes/form.php",
        type: "post",
        data: serializedData
    });

    // Callback handler that will be called on success
    request.done(function (response, textStatus, jqXHR){
        // Log a message to the console
        $("#submit").html('<div class="alert alert-success" role="alert">\n' +
            'Vielen Dank für Ihre Anfrage, wir werden uns in Kürze bei Ihnen melden.' +
            '</div>');
    });

    // Callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown){
        // Log the error to the console
        $("#submit").prepend('<div style="margin-bottom: 20px;" class="alert alert-danger" role="alert">\n' +
            'Es ist ein Fehler aufgetreten, bitte versuchen Sie den Kontakt erneut.' +
            '</div>');
    });

    // Callback handler that will be called regardless
    // if the request failed or succeeded
    request.always(function () {
        // Reenable the inputs
        $inputs.prop("disabled", false);
    });
});

$("#kontakt1").on("click",function(){
    $("#message").val("This is some serious text");
});