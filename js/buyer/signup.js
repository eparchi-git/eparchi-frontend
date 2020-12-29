function signup() {
    var data = {
        name : "name",
        mobileno : 'mobileno',
        email : 'email',
        passowrd : 'password',
        passwordconfirm : 'passwordconfirm'
    }

    $.post( "/api/v1/users/signup", data, function() {
        alert( "success" );
      })
        .done(function() {
          alert( "second success" );
        })
        .fail(function() {
          alert( "error" );
        })
        .always(function() {
          alert( "finished" );
        });
}