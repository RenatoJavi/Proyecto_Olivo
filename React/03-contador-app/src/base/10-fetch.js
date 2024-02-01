//crear una api en GIPHY Developers 
//https://developers.giphy.com/dashboard/
//solo copio la API y nada mas
//: copiar el Gif URL en Random EndPoint 
//https://api.giphy.com/v1/gifs/random?api_key=EjyfdPHlfoHZ4zTAeuzenmA2KVu781wI
const apiKey = 'EjyfdPHlfoHZ4zTAeuzenmA2KVu781wI'

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
    .then(api => {
        api.json()
            .then(({ data }) => {

                //console.log(data.images.original)
                const { url } = data.images.original;
                console.log(url);

                //ahora voy a crear en el HTML la imagem
                const img = document.createElement('img');
                img.src= url;
                //ahora pongo esa imagen en el html
                document.body.append(img);


            })
    })
    .catch(console.warn);