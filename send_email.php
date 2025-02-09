<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = "hi@aksanazachri.my.id"; // Ganti dengan email tujuan
    $subject = "New Contact Form Submission";
    $body = "Name: $name\nEmail: $email\nMessage:\n$message";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('Email berhasil dikirim!'); window.location.href='index.html';</script>";
    } else {
        echo "<script>alert('Gagal mengirim email.'); window.location.href='index.html';</script>";
    }
} else {
    echo "Invalid request method.";
}
?>
