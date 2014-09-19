$(document).on('pageinit', '#login', function(){ 
        $(document).on('click', '#submit', function() { // catch the form's submit event
            if($('#username').val().length > 0 && $('#password').val().length > 0){
                // Send data to server through the ajax call
                // action is functionality we want to call and outputJSON is our data
                    $.ajax({url: 'http://lokalizatorlekarza.pl/services/check.php',
                        data: {action : 'login', formData : $('#check-user').serialize()},
                        type: 'post',                  
                        async: 'true',
                                                dataType: 'json',
                        beforeSend: function() {
                            // This callback function will trigger before data is sent
                            $.mobile.showPageLoadingMsg(true); // This will show ajax spinner
                        },
                        complete: function() {
                            // This callback function will trigger on data sent/received complete
                            $.mobile.hidePageLoadingMsg(); // This will hide ajax spinner
                        },
                        success: function (result) {
                            if(result.status) {
                                $.mobile.changePage("#employeeListPage");                        
                            } else {
                                alert('Logowanie zakończone niepowodzeniem!');
                            }
                        },
                        error: function (request,error) {
                            // This callback function will trigger on unsuccessful action               
                            alert('Wystąpił problem z siecią. Spróbuj ponownie.!');
                        }
                    });                  
            } else {
                alert('Wpisz login oraz haslo.');
            }          
            return false; // cancel original event to prevent form submitting
        });   
});