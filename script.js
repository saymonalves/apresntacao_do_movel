document.addEventListener("DOMContentLoaded", function () {


    /* =========================================
       ELEMENTOS
    ========================================= */

    const cards = document.querySelectorAll(".gallery-card");

    const modals = document.querySelectorAll(".image-modal");



    /* =========================================
       ABRIR IMAGEM
    ========================================= */

    cards.forEach(function (card) {

        card.addEventListener("click", function () {

            const modalId =
                card.getAttribute("data-modal");


            const modal =
                document.getElementById(modalId);


            if (!modal) {
                return;
            }


            /* Abre o modal */

            modal.classList.add("is-open");


            /* Impede a página de rolar */

            document.body.classList.add("modal-open");

        });

    });



    /* =========================================
       FECHAR MODAIS
    ========================================= */

    modals.forEach(function (modal) {


        const closeButton =
            modal.querySelector(".modal-close");



        /* -----------------------------------------
           BOTÃO X
        ----------------------------------------- */

        closeButton.addEventListener("click", function (event) {

            event.stopPropagation();

            fecharModal(modal);

        });



        /* -----------------------------------------
           CLICAR FORA DA IMAGEM
        ----------------------------------------- */

        modal.addEventListener("click", function (event) {

            /*
                Se clicou no fundo escuro,
                fecha o modal.

                Se clicou na imagem,
                não fecha.
            */

            if (event.target === modal) {

                fecharModal(modal);

            }

        });

    });



    /* =========================================
       ESC
    ========================================= */

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            const modalAberto =
                document.querySelector(".image-modal.is-open");


            if (modalAberto) {

                fecharModal(modalAberto);

            }

        }

    });



    /* =========================================
       FUNÇÃO PARA FECHAR
    ========================================= */

    function fecharModal(modal) {

        if (!modal) {
            return;
        }


        modal.classList.remove("is-open");


        document.body.classList.remove("modal-open");

    }

});