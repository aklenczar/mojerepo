<!DOCTYPE html>
<html>
<head>
    <title>jQM Complex Demo</title>
    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0"/>
    <link rel="stylesheet" href="css/jquery.mobile-1.0rc1.min.css" />
    <link rel="stylesheet" href="css/styles.css" />
    <script src="js/jquery.js"></script>
    <script src="js/jquery.mobile-1.0rc1.min.js"></script>
    <script src="js/employeelist.js"></script>
    <script src="js/employeedetails.js"></script>
    <script src="js/reportlist.js"></script>
    <script src="js/index.js"></script>

</head>
<body>
    <div data-role="page" id="login" data-theme="a">
        <div data-role="header" data-theme="b">
            <h3>Login Page</h3>
        </div>
  
        <div data-role="content">
            <form id="check-user" class="ui-body ui-body-a ui-corner-all" data-ajax="false">
                <fieldset>
                    <div data-role="fieldcontain">
                        <label for="username">Enter your username:</label>
                        <input type="text" value="" name="username" id="username"/>
                    </div>                                
                    <div data-role="fieldcontain">                                    
                        <label for="password">Enter your password:</label>
                        <input type="password" value="" name="password" id="password"/>
                    </div>
                    <input type="button" data-theme="b" name="submit" id="submit" value="Submit">
                </fieldset>
            </form>                            
        </div>
  
        <div data-theme="a" data-role="footer" data-position="fixed">
  
        </div>
    </div>
    <div data-role="page" id="second">
        <div data-theme="b" data-role="header">
            <h3>Welcome Page</h3>
        </div>
  
        <div data-role="content">
 
        </div>
    </div>
</body>
</html>