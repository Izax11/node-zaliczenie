/* W Node.js możesz łatwo wywołać błąd "stack overflow", tworząc rekurencyjną funkcję, która wywołuje samą siebie bez końca. 
Poniższy kod zawiera taką funkcję i powoduje błąd "stack overflow" po wywołaniu: */

function recursion() {
    recursion();
  }
  
  recursion();


/* Po uruchomieniu tego kodu, konsola wyświetli komunikat błędu: Uncaught RangeError: Maximum call stack size exceeded */