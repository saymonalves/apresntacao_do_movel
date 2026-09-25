document.addEventListener("DOMContentLoaded", () => {

    // Todas as imagens clicáveis
    const cards = document.querySelectorAll(".gallery-card");

    // Todos os modais
    const modals = document.querySelectorAll(".image-modal");


    /* =========================================
       ABRIR IMAGEM
    ========================================= */

    cards.forEach((card) => {

        card.addEventListener("click", () => {

            const modalId = card.dataset.modal;

            const modal = document.getElementById(modalId);

            if (!modal) return;

            modal.classList.add("is-open");

            document.body.classList.add("modal-open");

        });

    });


    /* =========================================
       FECHAR PELO X
    ========================================= */

    modals.forEach((modal) => {

        const closeButton =
            modal.querySelector(".modal-close");


        closeButton.addEventListener("click", (event) => {

            event.stopPropagation();

            modal.classList.remove("is-open");

            document.body.classList.remove("modal-open");

        });


        /* =========================================
           FECHAR CLICANDO FORA DA IMAGEM
        ========================================= */

        modal.addEventListener("click", (event) => {

            if (event.target === modal) {

                modal.classList.remove("is-open");

                document.body.classList.remove("modal-open");

            }

        });

    });


    /* =========================================
       FECHAR COM ESC
    ========================================= */

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            const modalAberto =
                document.querySelector(".image-modal.is-open");

            if (modalAberto) {

                modalAberto.classList.remove("is-open");

                document.body.classList.remove("modal-open");

            }

        }

    });

});