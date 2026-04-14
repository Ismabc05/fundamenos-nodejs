const fs = require('fs');
const path = require('path'); // es un modulo que permite crear rutas seguras

async function transcribeAudio(audioFilePath, hfApiKey) {
  try {
    console.log("Enviando audio a Hugging Face...");

    const audioFile = fs.readFileSync(audioFilePath); //lee el mp3 y y lo guarda en buffer binario. Ejemplo (<Buffer ff fb 90 64 00 0f ... >)

    const response = await fetch( // le enviamos a la api el buffer binario
      'https://api-inference.huggingface.co/models/openai/whisper-large-v3',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${hfApiKey}`,
          'Content-Type': 'audio/mpeg',
        },
        body: audioFile,
      }
    );

    const textResponse = await response.text(); // guardamos la respues en texto plano por si hay errores ("{\"text\":\"Hola mundo\"}")
    console.log("RESPUESTA RAW:", textResponse);

    let data;
    try {
      data = JSON.parse(textResponse); // convertimos la respuesta en un objeto ({ text: "Hola mundo" })
    } catch {
      throw new Error("Respuesta no es JSON válido");
    }

    if (!response.ok) {
      throw new Error(`Error API: ${JSON.stringify(data)}`); // si la respuesta no es correcta, convertimos en texto para mostrarlo
    }

    const transcription = data.text || data[0]?.text; // si todo esta correcto guardamelo en esa variable

    const outputFilePath = path.join(
      path.dirname(audioFilePath), // obtiene la carpeta donde está el audio, en este caso es nodejs
      `${path.basename(audioFilePath, path.extname(audioFilePath))}_transcription.txt` // obtiene el nombre del archivo sin extension que es audio y le agrega _transcription.txt
    );

    fs.writeFileSync(outputFilePath, transcription || ""); // escribimos en el archivo de esa ruta la trancripcion
    console.log("Transcripción:", transcription);

    return transcription;

  } catch (error) {
    console.error("Error:", error.message);
  }
}

const audioPath = __dirname + '/audio.mp3'; //contiene la ruta de mi archivo mp3
const HF_API_KEY = 'TU_TOKEN'; // clave de acceso a la api de Huggingface

transcribeAudio(audioPath, HF_API_KEY);



// esta funcion recibe un archivo mp3, la manda a Hugging Face, obtiene el texto del mp3, crea un archivo y guarda en él el contenido