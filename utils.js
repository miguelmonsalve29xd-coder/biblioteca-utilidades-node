function sonAnagramas(palabra1, palabra2) {
    const limpiar = palabra => {
        return palabra
            .toLowerCase()
            .replace(/\s/g, "")
            .split("")
            .sort()
            .join("");
    };

    return limpiar(palabra1) === limpiar(palabra2);
}