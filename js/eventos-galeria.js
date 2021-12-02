
function iniciarGaleria() {
  /*  
    const PELUQUERIA = 'portafolioPeluqueria';
    const OFFBEAT = 'portafolioOffbeat';
    
    const RESUMENPELUQUERIAH2=document.querySelector("#peluqueria h2");
    const RESUMENPELUQUERIAP=document.querySelector("#peluqueria p");
    const RESUMENOFFBEATH2=document.querySelector("#offbeat h2");
    const RESUMENOFFBEATP=document.querySelector("#offbeat p");
    const imagenesPeluqueria = document.querySelectorAll('#portafolioPeluqueria .img-galeria');
    const imagenesOffbeat = document.querySelectorAll('#portafolioOffbeat .img-galeria');    
    
    
    
    const descripcion = document.querySelector('.agregar-texto p');
    const encabezado = document.querySelector('.agregar-texto h1');
    var fotosPeluqueria;
    var fotosOffbeat;
   */

    
    cargarFotos();
}
/*
    imagenesOffbeat.forEach(imagen => {
        imagen.addEventListener('click', () => {
            aparecerImagen(imagen)

        })
    })

    imagenesPeluqueria.forEach(imagen => {
        imagen.addEventListener('click', () => {
            aparecerImagen(imagen)

        })
    })
*/
  

    const aparecerImagen = (imagen) => {
        const textoLight = document.querySelector('.agregar-texto');
        const contenedorLight = document.querySelector('.imagen-light');
        const imagenGrande = document.querySelector('.imagenGaleria');
        imagenGrande.src = imagen.getAttribute('src');
        var tipo = imagen.getAttribute('trabajo');
        imagenGrande.classList.add('showImage')
        contenedorLight.classList.add('show');        
        textoLight.classList.add('showImage'); /* 
        if (tipo == PELUQUERIA) {
            descripcion.innerHTML = fotosPeluqueria[imagen.getAttribute('numero')].descripcion;
            encabezado.innerHTML = fotosPeluqueria[imagen.getAttribute('numero')].titulo;
        } else {
            descripcion.innerHTML = fotosOffbeat[imagen.getAttribute('numero')].descripcion;
            encabezado.innerHTML = fotosOffbeat[imagen.getAttribute('numero')].titulo;
        }
*/
    }
/*
const aparecerImagen = (imagen)=>{
    console.log(imagen);
}*/
    const generarArticulo=(trabajo)=>{
        const articulo = document.createElement('article');
        articulo.classList.add('trabajo');
        const divResumenTrabajo = document.createElement('div');
        divResumenTrabajo.classList.add('resumen-trabajo');
        divResumenTrabajo.setAttribute('id',trabajo.id);
        const h2 = document.createElement('h2');
        h2.innerText=trabajo.nombre;
        const p = document.createElement('p');
        p.innerText=trabajo.descripcion;
        divResumenTrabajo.appendChild(h2);
        divResumenTrabajo.appendChild(p);
        articulo.appendChild(divResumenTrabajo);
        const sectionGaleria = document.createElement('section');
        sectionGaleria.classList.add('galeria');
        const divContenedor = document.createElement('div');
        divContenedor.classList.add('contenedor');
        const divContenedorGaleria = document.createElement('div');
        divContenedorGaleria.classList.add('contenedor-galeria');
        divContenedorGaleria.setAttribute('id',trabajo.trabajo);
        trabajo.fotos.forEach(foto => {
            const img = document.createElement('img');
            img.setAttribute('src',foto.src);
            img.setAttribute('trabajo',trabajo.trabajo);
            img.setAttribute('numero',foto.id);
            img.classList.add('img-galeria');
            img.addEventListener('click',() => {
                aparecerImagen(img)    
            });
            divContenedorGaleria.appendChild(img);
        });
        divContenedor.appendChild(divContenedorGaleria);
        sectionGaleria.appendChild(divContenedor);
        articulo.appendChild(sectionGaleria);
        const sectionImagen = document.createElement('section');
        sectionImagen.classList.add('imagen-light');
        
        sectionImagen.addEventListener('click', (e) => {
            if (e.target !== imagenGrande) {
                contenedorLight.classList.remove('show');            
                textoLight.classList.remove('showImage');
                imagenGrande.classList.remove('showImage')
            }
        });
        const icon = document.createElement('i');
        icon.classList.add('fas');
        icon.classList.add('fa-times');
        icon.classList.add('close');
        sectionImagen.appendChild(icon);
        const container = document.createElement('div');
        container.classList.add('container');
        const texto = document.createElement('div');
        const h1 = document.createElement('h1');
        const pTexto = document.createElement('p');
        texto.appendChild(h1);
        texto.appendChild(pTexto);
        container.appendChild(texto);
        const imgGaleria = document.createElement('img');
        imgGaleria.classList.add('imagenGaleria');
        container.appendChild(imgGaleria);
        sectionImagen.appendChild(container);
        articulo.appendChild(sectionImagen);
        document.querySelector('.caja-portfolio').appendChild(articulo);
    }

    function cargarFotos() 
    {
        const RUTATRABAJOS = "json/trabajos.json";
        fetch(RUTATRABAJOS)
            .then(response => response.json())
            .then(data => {                
                console.log(data);
                const trabajos = data;
                trabajos.forEach(trabajo => {
                    generarArticulo(trabajo);
                    console.log(trabajo);                    
                });
                

            })

    }



