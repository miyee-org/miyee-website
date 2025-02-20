<!DOCTYPE html>
<html lang="en">
    <head>
        <link rel="icon" href="https://i.postimg.cc/K3vP0g3m/Charlotte-First-Form.webp">
        <link rel="stylesheet" href="styles.css" type="text/css">
        <title>Contact</title>
    </head>
    <body>
        <h1><img src="contact.png"></h1>


        <form method="post" action="contact.php">

            <div id="projectwrap" >
                <div>Enter Name</div>
                <div><input type="text" name="name"></div>
                <div>Enter Message</div>
                <div>
                    <textarea name="message" rows="3" cols="30"></textarea>
                </div>

                <?php
                if(isset( $_POST['name']) ) {
                    $name = $_POST['name']
                    mail("5167364046@vtext.com", "-CONTACT PAGE-", $POST['message'], $name );

                    echo "<div>Message was successfully sent to miyee!</div>\n";

                }

                ?>

            </div>

        </form>

    </body>
</html>