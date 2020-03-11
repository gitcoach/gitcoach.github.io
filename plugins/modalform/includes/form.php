<?php
if ($_POST){
    if ($_POST['surname'] !== "") {
        http_response_code(400);die();
        // spam detection
    }
    $to = 'thomas@me.com'; // Email submissions are sent to this email

    // Create email
    $email_subject = "Neue Nachricht von ecomex München";
    $email_body = "Sie haben eine neue Nachricht von ecomex München erhalten. \n\n" .
       "Nachname: ".$_POST['lastname']." \n
        Telefon: ".$_POST['phone']." \n
        E-Mail: ".$_POST['mail']." \n\n\n";

    $email_body .= "Kostenträger\n\n";
    if($_POST['payment-privat']){
        $email_body .= "- Ich zahle selbst als Privatperson \n";
    }
    if($_POST['payment-funding']){
        $email_body .= "- Ich habe eine Förderzusage \n";
    }
    if($_POST['payment-company']){
        $email_body .= "- Meine Firma übernimmt die Kosten \n";
    }
    if($_POST['payment-company']){
        $email_body .= "- Meine Firma übernimmt die Kosten \n";
    }

    $email_body .= " \n\n\n";
    $email_body .= " Nachricht: \n".$_POST['message'];

    $email_body .= " \n ABG bestätigt: ". date('H:i d.m.Y',time());

    $headers = "MIME-Version: 1.0\r\nContent-type: text/plain; charset=UTF-8\r\n";
    $headers .= "From: thomas@me.com\n";
    $headers .= "Reply-To: ".$_POST['mail'];
    mail($to, $email_subject, $email_body, $headers); // Post message
}
return true;
?>