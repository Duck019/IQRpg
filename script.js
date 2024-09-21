function calcular() {

    // Obtendo os valores dos status do personagem

    const atk = parseInt(document.getElementById('atk').value);

    const controleDeDom = parseInt(document.getElementById('dom').value);

    const agilidade = parseInt(document.getElementById('agi').value);

    const inteligencia = parseInt(document.getElementById('int').value);

    const presenca = parseInt(document.getElementById('pre').value);

    const vigor = parseInt(document.getElementById('vig').value);

    const defesa = parseInt(document.getElementById('def').value);

    // Calculando vida e energia

    const vida = (vigor + defesa) * 10;

    const energia = controleDeDom * 10;

    // Calculando a soma total dos status

    const totalStatus = atk + controleDeDom + agilidade + inteligencia + presenca + vigor + defesa;

    const maxTotalStatus = 70; // Máximo possível com status entre 1 e 10

    // Calculando a porcentagem de status em relação ao máximo possível

    const percentStatus = (totalStatus / maxTotalStatus) * 100;

    // Definindo as faixas de dados com base na porcentagem dos status

    let dadosRuins;

    let dadosMedios;

    let dadosOtimos;

    // Baseado no percentual, ajustamos a proporção dos resultados

    if (percentStatus <= 30) {

        // Status baixo, mais chances de tirar números ruins

        dadosRuins = "1-10";

        dadosMedios = "11-16";

        dadosOtimos = "17-20";

    } else if (percentStatus > 30 && percentStatus <= 60) {

        // Status médio, chances equilibradas

        dadosRuins = "1-6";

        dadosMedios = "7-14";

        dadosOtimos = "15-20";

    } else {

        // Status alto, mais chances de tirar números bons

        dadosRuins = "1-5";

        dadosMedios = "6-10";

        dadosOtimos = "11-20";

    }

    // Atualizando os valores na página

    document.getElementById('vida').textContent = `Vida: ${vida}`;

    document.getElementById('energia').textContent = `Energia: ${energia}`;

    document.getElementById('dado').textContent = `

        Ruins: ${dadosRuins}

        Médios: ${dadosMedios}

        Ótimos: ${dadosOtimos}

    `;

}