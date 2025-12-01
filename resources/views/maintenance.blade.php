<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Under Maintenance</title>

    <style>
        body {
            margin: 0;
            padding: 0;
            background: #f4f4f4;
            font-family: "Inter", sans-serif;
            color: #333;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            text-align: center;
        }

        .wrapper {
            max-width: 450px;
            padding: 30px;
        }

        .icon-box {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            background: #e0e7ff;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 25px;
        }

        .icon {
            font-size: 60px;
            color: #3b5bdb;
        }

        h1 {
            font-size: 28px;
            font-weight: 700;
        }

        p {
            font-size: 15px;
            margin-top: 10px;
            opacity: 0.8;
            line-height: 1.6;
        }

        .footer {
            margin-top: 30px;
            font-size: 13px;
            opacity: 0.5;
        }
    </style>

    <!-- Bootstrap Icon (CDN) -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
</head>

<body>

<div class="wrapper">
    <div class="icon-box">
        <i class="bi bi-tools icon"></i>
    </div>

    <h1>We're Working On It</h1>
    <p>
        Our website is currently undergoing scheduled maintenance.
        We’re upgrading the system to serve you better.  
        Please check back soon — we’ll be online again shortly.
    </p>

    <div class="footer">
        © {{ date('Y') }} PT GLS NUSARAYA — All Rights Reserved.
    </div>
</div>

</body>
</html>
