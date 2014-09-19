$(document).on('pageinit', '#login', function(){
    $(document).on('click', '#submit', function() { // catch the form's submit event
        if($('#username').val().length > 0 && $('#password').val().length > 0){
            // Send data to server through the ajax call
            // action is functionality we want to call and outputJSON is our data
                $.ajax({url: 'http://www.informatyk.tychy.pl/services/check.php',
                    data: {action : 'login', formData : $('#check-user').serialize()},
                    type: 'get',                 
                    async: 'true',
                    dataType: 'jsonp',
                    beforeSend: function() {
                        // This callback function will trigger before data is sent
                        $.mobile.loading('show', {theme:"a", text:"Please wait...", textonly:true, textVisible: true}); // This will show ajax spinner
                    },
                    complete: function() {
                        // This callback function will trigger on data sent/received complete
                        $.mobile.loading('hide'); // This will hide ajax spinner
                    },
                    success: function (result) {
                        if(result.status) {
                            user.name =  result.massage;
                            $.mobile.changePage("#second");                       
                        } else {
                            alert('Logon unsuccessful!');
                        }
                    },
                    error: function (request,error) {
                        // This callback function will trigger on unsuccessful action              
                        alert('Network error has occurred please try again!');
                    }
                });                 
        } else {
            alert('Please fill all necessary fields!');
        }         
        return false; // cancel original event to prevent form submitting
    });  
});
 
$(document).on('pagebeforeshow', '#second', function(){
    $.mobile.activePage.find('.ui-content').html('Welcome ' + user.name)
});
 
var user = {
    name : null
}