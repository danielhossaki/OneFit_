<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <title>ONE FIT | Profissionais</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- CSS -->
    <link rel="stylesheet" href="./assets/css/Profissionais.css">
    <link rel="stylesheet" href="./assets/css/footer.css">
</head>

<body>
    <div class="btn-home" onclick="irHome()">
        <svg viewBox="0 0 24 24" class="icon-home">
            <path d="M3 10L12 3L21 10V21H3V10Z" fill="none" stroke="gold" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
        </svg>
    </div>

    <section class="container mt-5">
        <h2 class="text-center mb-4" id="start">Nossos Profissionais</h2>


        <div class="row justify-content-center" id="profissionais-container"></div>
    </section>



    <?php include './components/footer.php'; ?>


    <!-- JS -->
    <script src="./assets/js/Profissionais.js"></script>

</body>

</html>