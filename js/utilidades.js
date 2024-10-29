function crearNodo(nodo){
    var nodo = document.createElement(nodo)
    return nodo
}
function crearNodoConTexto(nodo,texto){
    var nodo = crearNodo(nodo)
    var nodoTexto = document.createTextNode(texto)
    nodo.appendChild(nodoTexto)
    return nodo
}
function crearAbreviacion(titulo,texto){
    var abbr = crearNodo("abbr")
    abbr.textContent = texto
    abbr.title = titulo
    return abbr
}

function crearNodoEnlace(nodo,texto,rutaEnlase,target){
    var nodo = crearNodo(nodo)
    var nodoTexto = document.createTextNode(texto)
    nodo.href = rutaEnlase
    nodo.target = target
    nodo.appendChild(nodoTexto)
    return nodo
}
function crearImagen(rutaImagen,textoAlt,ancho,alto){
    var nodoImgen = crearNodo("img")
    nodoImgen.src = rutaImagen
    nodoImgen.alt = textoAlt
    nodoImgen.width = ancho
    nodoImgen.height = alto
    adicionarNodoBody(nodoImgen)
}
function crearVideo(rutaVideo,textoAlt,rutaPoster,ancho,alto){
    var nodoVideo = crearNodo("video")
    nodoVideo.src = rutaVideo
    nodoVideo.alt = textoAlt
    nodoVideo.poster = rutaPoster
    nodoVideo.controls = true
    nodoVideo.muted = true
    nodoVideo.width = ancho
    nodoVideo.height = alto
    adicionarNodoBody(nodoVideo)
}

function adicionarNodoBody(nodo){
    document.body.appendChild(nodo)
}
function adicionarNodoContenedor(nodo , contenedor){
    contenedor.appendChild(nodo)
}
