document.addEventListener("DOMContentLoaded", function () {

    const imagens = document.querySelectorAll(".gallery-card");

    imagens.forEach(function (imagem) {

        imagem.addEventListener("click", function () {

            const idModal = imagem.getAttribute("data-modal");
            const modal = document.getElementById(idModal);

            if (modal) {
                modal.classList.add("active");
                document.body.classList.add("modal-open");
            }

        });

    });


    // Botões de fechar
    const botoesFechar = document.querySelectorAll(".modal-close");

    botoesFechar.forEach(function (botao) {

        botao.addEventListener("click", function () {

            const modal = botao.closest(".image-modal");

            if (modal) {
                modal.classList.remove("active");
            }

            document.body.classList.remove("modal-open");

        });

    });


    // Fechar clicando no fundo escuro
    const modais = document.querySelectorAll(".image-modal");

    modais.forEach(function (modal) {

        modal.addEventListener("click", function (event) {

            if (event.target === modal) {

                modal.classList.remove("active");
                document.body.classList.remove("modal-open");

            }

        });

    });


    // Fechar apertando ESC
    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            modais.forEach(function (modal) {
                modal.classList.remove("active");
            });

            document.body.classList.remove("modal-open");

        }

    });

});