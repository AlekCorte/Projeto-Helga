document.addEventListener('scroll', function() {
    const elementos = document.querySelectorAll('.elemento-aparecer');
    const alturaDaTela = window.innerHeight;

    elementos.forEach(function(elemento) {
        const posicaoTopo = elemento.getBoundingClientRect().top;

        if (posicaoTopo < alturaDaTela) {
            elemento.classList.add('visivel');
        }
    });
});