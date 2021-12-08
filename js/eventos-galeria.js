    fotosOffbeat=[];
    fotosPeluqueria=[];
    fotosComponentes=[];

    const aparecerImagen = (imagen) => {
        
        const PELUQUERIA = 'portafolioPeluqueria';
        const OFFBEAT = 'portafolioOffbeat';
        const COMPONENTES = 'componentesycards';
        const descripcion = document.querySelector('.agregar-texto p');
        const encabezado = document.querySelector('.agregar-texto h1');
        const textoLight = document.querySelector('.agregar-texto');
        const contenedorLight = document.querySelector('.imagen-light');
        const imagenGrande = document.querySelector('.imagenGaleria');
        imagenGrande.src = imagen.getAttribute('src');
        var tipo = imagen.getAttribute('trabajo');
        imagenGrande.classList.add('showImage')
        contenedorLight.classList.add('show');        
        textoLight.classList.add('showImage');  
        if (tipo == PELUQUERIA) {
            descripcion.innerHTML = fotosPeluqueria[imagen.getAttribute('numero')].descripcion;
            encabezado.innerHTML = fotosPeluqueria[imagen.getAttribute('numero')].titulo;
           
        } else if (tipo == OFFBEAT) {
            descripcion.innerHTML = fotosOffbeat[imagen.getAttribute('numero')].descripcion;
            encabezado.innerHTML = fotosOffbeat[imagen.getAttribute('numero')].titulo;
            
        } else if (tipo==COMPONENTES){
            descripcion.innerHTML = fotosComponentes[imagen.getAttribute('numero')].descripcion;
            encabezado.innerHTML = fotosComponentes[imagen.getAttribute('numero')].titulo;
        }

    }

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
            const imagenGrande = document.querySelector('.imagenGaleria');    
            if (e.target !== imagenGrande) {                    
                const textoLight = document.querySelector('.agregar-texto');
                const contenedorLight = document.querySelector('.imagen-light');                
                contenedorLight.classList.remove('show');            
                textoLight.classList.remove('showImage');
                imagenGrande.classList.remove('showImage')
            }
        });
        sectionGaleria.appendChild(sectionImagen);
        const icon = document.createElement('i');
        icon.classList.add('fas');
        icon.classList.add('fa-times');
        icon.classList.add('close');
        sectionImagen.appendChild(icon);
        const container = document.createElement('div');
        container.classList.add('container');
        const texto = document.createElement('div');
        texto.classList.add('agregar-texto');
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
                const trabajos = data;
                trabajos.forEach(trabajo => {
                    generarArticulo(trabajo);
                });
                let objetoFotos;
                let trabajo;
                let limite = 0;
                const PELUQUERIA = 'portafolioPeluqueria';
                const OFFBEAT = 'portafolioOffbeat';
                const COMPONENTES = 'componentesycards';
                const imagenesPeluqueria = document.querySelectorAll('#portafolioPeluqueria .img-galeria');
                const imagenesOffbeat = document.querySelectorAll('#portafolioOffbeat .img-galeria');
                const imagenesComponentes = document.querySelectorAll('#componentesycards .img-galeria');
                for (var j = 0; j <= data.length - 1; j++) {
                    trabajo = data[j].trabajo;
                    objetoFotos = data[j].fotos;
                                      
                    if (trabajo == PELUQUERIA) {//cargo fotos en pluqueria 
                        
                        fotosPeluqueria = objetoFotos;
                        if (objetoFotos.length > imagenesPeluqueria.length) {
                            limite = imagenesPeluqueria.length - 1;
                        }
                        else {
                            limite = objetoFotos.length - 1;
                        }
                       
                        for (var i = 0; i <= limite; i++) {
                            imagenesPeluqueria[i].setAttribute('src', objetoFotos[i].src);
                            imagenesPeluqueria[i].setAttribute('numero', i);
                            imagenesPeluqueria[i].setAttribute('trabajo', trabajo);
                            
                        }
                    }
                    else if(trabajo == OFFBEAT) //cargo fotos en offbeat
                    {            
                          
                        fotosOffbeat = objetoFotos;
                        if (objetoFotos.length > imagenesOffbeat.length) {
                            limite = imagenesOffbeat.length - 1;
                        }
                        else {
                            limite = objetoFotos.length - 1;
                        }
                        
                        for (var i = 0; i <= limite; i++) {
                            imagenesOffbeat[i].setAttribute('src', objetoFotos[i].src);
                            imagenesOffbeat[i].setAttribute('numero', i);
                            imagenesOffbeat[i].setAttribute('trabajo', trabajo);
                            
                        }
                    }else if (trabajo==COMPONENTES){
                        fotosComponentes = objetoFotos;
                        if (objetoFotos.length > fotosComponentes.length) {
                            limite = fotosComponentes.length - 1;
                        }
                        else {
                            limite = objetoFotos.length - 1;
                        }
                        
                        for (var i = 0; i <= limite; i++) {
                            imagenesComponentes[i].setAttribute('src', objetoFotos[i].src);
                            imagenesComponentes[i].setAttribute('numero', i);
                            imagenesComponentes[i].setAttribute('trabajo', trabajo);
                            
                        }
                    }
                }

            })

    }



