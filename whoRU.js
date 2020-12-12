$( function () {
    $( '#pw' ).keyup( function () {
        $( '#check' ).html( '' );
    } );

    $( '#pwc' ).keyup( function () {

        if ( $( '#pw' ).val() != $( '#pwc' ).val() ) {
            $( '#check' ).html( '비밀번호 일치하지 않음<br><br>' );
            $( '#check' ).attr( 'color', '#f82a2aa3' );
        } else {
            $( '#check' ).html( '비밀번호 일치함<br><br>' );
            $( '#check' ).attr( 'color', '#199894b3' );
        }

    } );
} );
function check() {

    alert( document.getElementById( "email" ).value );

    var email = document.getElementById( "email" ).value;

    var exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

    if ( exptext.test( email ) == false ) {


        alert( "이 메일형식이 올바르지 않습니다." );

        document.addjoin.email.focus();

        return false;

    }
    else {
        
    }

}