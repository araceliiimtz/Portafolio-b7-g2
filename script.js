// alert("Hola mundo");

let app = document.getElementById('app');
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
typewriter
  .pauseFor(2500)
  .typeString('Araceli Martinez Faustino')
  .pauseFor(300)
  .deleteAll()
  .typeString('Desarrolladora FRONTEND JR')
  .pauseFor(1000)
  .start();

let frase = document.getElementById('frase');
let typewriterFrase = new Typewriter(frase, {
  loop: true,
  delay: 75,
});

typewriterFrase
  .typeString('Albert Einstein')
  .pauseFor(1000)
  .start();

async function copiarAlPortapapeles(texto) {
  try {
    await navigator.clipboard.writeText(texto);
    alert('Texto copiado al portapapeles');
  } catch (err) {
    console.error('Error al copiar:', err);
  }
}