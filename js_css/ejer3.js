let crateres = [];
let registroActivo = true;

function agregarCrater() {
    if (!registroActivo) return;

    let valor = parseFloat(document.getElementById("diametro").value);
    let lista = document.getElementById("lista-crateres");

    if (isNaN(valor)) return;

    // Si el usuario ingresa 0 → terminar registro
    if (valor === 0) {
        finalizarConteo();
        return;
    }

    // Solo registrar diámetros positivos
    if (valor > 0) {
        crateres.push(valor);

        let item = document.createElement("li");
        item.textContent = valor + " km";
        lista.appendChild(item);

        document.getElementById("diametro").value = "";
    }
}

function finalizarConteo() {
    registroActivo = false;
    let resultado = document.getElementById("resultado-ej3");

    if (crateres.length === 0) {
        resultado.innerHTML = "No se registraron cráteres.";
        return;
    }

    let total = crateres.length;

    let grandes = 0;

    let i = 0;
    while (i < crateres.length) {
        if (crateres[i] > 50) grandes++;
        i++;
    }

    let porcentaje = (grandes / total) * 100;

    resultado.innerHTML = `
        Total de cráteres: ${total}<br>
        Cráteres grandes (+50 km): ${grandes}<br>
        Porcentaje grandes: ${porcentaje.toFixed(2)}%
    `;
}