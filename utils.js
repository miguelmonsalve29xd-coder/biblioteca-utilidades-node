function esPalindromo(texto) {
    const textoLimpio = texto.toLowerCase().replace(/[^a-z0-9]/g, '');
    const textoReverso = textoLimpio.split('').reverse().join('');
    return textoLimpio === textoReverso;
}