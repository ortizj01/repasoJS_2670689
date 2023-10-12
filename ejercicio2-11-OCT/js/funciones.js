const lista1 = ['uno', 'dos', 'tres', 'cuatro'];
const lista2 = ['js1', 'js2', 'js3'];
const lista3 = ['html1', 'html2', 'html3', 'html4'];
const lista4 = ['j1', 'j2'];

//obtener elementos DOM
const documentoInput = document.getElementById('dato');
const btnBuscar = document.getElementById('btnBuscar');

btnBuscar.addEventListener('click', async () => {
    const documento = documentoInput.value;

    const resultados = await Promise.all([ //ejecuta simultaneamente la busqueda del documento en las listas utilizando la función bDEL
        buscarDocumentoEnLista(documento, lista1),
        buscarDocumentoEnLista(documento, lista2),
        buscarDocumentoEnLista(documento, lista3),
        buscarDocumentoEnLista(documento, lista4)
    ]);

    resultados.forEach((resultado, i) => {
        if (resultado) {
            console.log(`Documento encontrado en la lista ${i + 1}`);
        } else {
            console.log(`Documento no encontrado en la lista ${i + 1}`);
        }
    });
});


async function buscarDocumentoEnLista(documento, lista) {
    return new Promise((resolve) => {
        setTimeout(() => {
            for (let i = 0; i < lista.length; i++) {
                if (documento === lista[i]) {
                    resolve(true); 
                    return;
                }
            }
            resolve(false);
        }, 2000); 
    });
}
