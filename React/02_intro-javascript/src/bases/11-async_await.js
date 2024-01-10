// async - await
const getIMAGEN = async () => {
    //return 'https://correo.epn.edu.ec';
    const apiKey = 'EjyfdPHlfoHZ4zTAeuzenmA2KVu781wI';
    const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

    const { data } = await respuesta.json();
    console.log(data);

    // const {data}= data.images.original;
    //console.log(datos);
    const { url } = data.images.original;
    console.log(url);

    const img = document.createElement('img');
    img.src = url;
    //ahora pongo esa imagen en el html
    document.body.append(img);

}



//console.log(getIMAGEN());
getIMAGEN();