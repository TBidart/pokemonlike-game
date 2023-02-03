const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d')
canvas.width = 1024
canvas.height = 576

c.fillStyle = 'white'
c.fillRect(0, 0, canvas.width, canvas.height);
c.drawImage('pokemon\img\mapaPokemon.png');

  const image = new Image()
  image.src = 'pokemon\img\mapaPokemon.png'
  console.log(image)

  image.onload = () => {
    c.drawImage(image, 0, 0) 
  }
