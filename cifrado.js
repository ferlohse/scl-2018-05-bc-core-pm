function cipher(){
    
    const cajaCcipher = document.getElementById('caja-cipher');
    let propmt = prompt('pon una palabra o frase sin espacios');
    let cifradas = ''; 
    
    for(var f = 0; f < propmt.length; f++){
    // var f=0 , la f va a representar cada letra de la palabra y empieza en 0
    //propmt.length , es el largo de las palabras
    //f++ , suma de a 1

      let formula = (propmt.toUpperCase().charCodeAt(f) - 65 + 33) % 26 + 65;
    //-65 primera letra del abcdario / 33 valor fijo / 26 total letras del abcdario / +65 es el ASCII letra cifrada
    //charcodeat ubica la posicion de la letra en numero
      let cifrado = String.fromCharCode(formula);
      
      cifradas+= cifrado; 
      
    }
    cajaCcipher.innerHTML = cifradas; 
  
   
  
}

function decipher(){
    
    const cajaDecipher = document.getElementById('caja-decipher');
    let caja = prompt('pon una palabra o frase sin espacio');
    let deCcipher = '';
  
    for(var v = 0; v < caja.length; v++){
      
        let formu = (caja.toUpperCase().charCodeAt(v) + 65 - 33) % 26 + 65;
      
        let decifradas = String.fromCharCode(formu);
        
        deCcipher+= decifradas;
    }
    cajaDecipher.innerHTML = deCcipher;
    
    
}
 





 
