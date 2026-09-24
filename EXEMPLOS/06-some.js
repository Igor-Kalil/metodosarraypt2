console.log ("=== EXEMPLOS COM some() ===\n")

//------------------------------------------------------------
//Exemplo 1 (Básico): Verificar existência do número negativo
//------------------------------------------------------------

console.log("--- Exemplo 1: Há número negativo? (Básico) ---");

const temperaturas = [23, 19, 28, -2, 31];

const temCongelamento = temperaturas.some((temp) => temp < 0);

console.log("Temperaturas:", temperaturas);
console.log("Houve temperatura abaixo de zero?", temCongelamento);
console.log("\n");

// ------------------------------------------------------------------------------
// Exemplo 2 (Intermediário): Checar pendência cadastral de usuários
// ------------------------------------------------------------------------------
console.log("--- Exemplo 2: Há usuários inativos? (Intermediário) ---");

const usuarios = [
  { id: 1, nome: "Lucas", ativo: true },
  { id: 2, nome: "Mariana", ativo: false },
  { id: 3, nome: "Carlos", ativo: true }
];

const hainativos = usuarios.some ((u) => !u.ativo)

console.log("Existe algum usuário inativo?", hainativos)
console.log('\n')

//--------------------------------------------------------------------------------
//Exemplo 3 (Back-End Real): Alerta de reposição de estoque
//--------------------------------------------------------------------------------
console.log("---Exemplo 3: Alerta de estoque esgotado (Back-End Real) ---")

const inventario = [
    {id: 101, nome: "Monitor 24pol", estoque: 6},
    {id: 102, nome: "Cabo HDMI 2.0", estoque: 0}, //esgotado!
    {id:103, nome: "WebCam HD", estoque: 15}

]

function checarNecessidadeDaReposição(produtos) {
    const temEsgotado = produtos.some ((p) => p.estoque === 0);

    if (temEsgotado) {
        return "⚠️Alerta: Há produtos esgotados no armazém, Acionar Compras!";
    }
     return "OK: Todos os produtos possuem estoque."
}

console.log(checarNecessidadeDaReposição(inventario))
//Fim