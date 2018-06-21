window.cipher = {

  encode: (offset, text) => {
    let cifradas = '';
    for(let i=0; i<text.length; i++){
      let formula= text.toUpperCase().charCodeAt(i);
      formula=(formula-32+ offset)% 97 +32;
      cifradas+= String.fromCharCode(formula);
          
    }
    return cifradas
   
  },

  decode: (offset, text) => {
    let deCcipher= "";
    for(let i=0; i<text.length; i++){
      let formu= text.toUpperCase().charCodeAt(i);
      formu=(formu-32- offset)%97 +32;
      let decifradas = String.fromCharCode(formu);
      deCcipher+= decifradas;
     
    }
     
    cajaDecipher.innerHTML = deCcipher;
  }
} 




