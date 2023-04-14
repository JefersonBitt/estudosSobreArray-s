const baralho = []
let op = ""

do {
    op = prompt(
        "Cartas no baralho: " + baralho.length +
        "\n1. Adicionar Carta\n2. Puxar Carta\n3. Sair"
    )

    switch (op) {
        case "1":
            const novaCarta = prompt("Qual é a nova carta?")
            baralho.push(novaCarta)
            break
        case "2":
            const cartaPuxada = baralho.pop()
            if (!cartaPuxada) {
                alert("Não há cartas no baralho")
            } else {
                alert("A carta Puxada foi: " + cartaPuxada)
            }
            break
        case "3":
            alert("Saindo...")
            break
        default:
            alert("Opção Inválida!!!")
    }
} while (op !== "3")