function listarDatos(pageNumber, itemsPerPage) {
    fetch('https://www.datos.gov.co/resource/ceyp-9c7c.json')
        .then(response => response.json())
        .then(data => {
            const startIndex = (pageNumber - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            const currentPageData = data.slice(startIndex, endIndex);

            let resultado = '';

            for (let i of currentPageData) {
                resultado = resultado + '<tr><td>' + i.valor + '</td>' +
                    '<td>' + i.vigenciadesde + '</td>' +
                    '<td>' + i.vigenciahasta + '</td></tr>';
            }

            document.getElementById('contenido').innerHTML = resultado;
        })
        .catch(error => console.error('Error:', error));
}

document.addEventListener('DOMContentLoaded', function () {
    const itemsPerPage = 10;
    let currentPage = 1;

    // Llamar a la función para cargar la página inicial
    listarDatos(currentPage, itemsPerPage);

    document.getElementById('prev-page').addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            listarDatos(currentPage, itemsPerPage);
        }
    });

    document.getElementById('next-page').addEventListener('click', () => {
        currentPage++;
        listarDatos(currentPage, itemsPerPage);
    });
});
