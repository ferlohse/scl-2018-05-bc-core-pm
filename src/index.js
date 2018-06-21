 
    function cipher(){
        
        const offset= parseInt(document.getElementById("caja").value);
        const text= document.getElementById("cajatexto").value;
        let respuesta= window.cipher.encode (offset, text);
        document.getElementById('caja-decipher').innerHTML= respuesta;
    }
    function decipher(){
        
        const offset= parseInt(document.getElementById("caja").value);
        const text= document.getElementById("cajatexto").value;
        const deCcipher=decode (offset, text)
        const cajaDecipher = document.getElementById('caja-decipher');
        cajaDecipher.innerHTML = deCcipher;
  }
    


    