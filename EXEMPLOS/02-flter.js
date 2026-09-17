/**
 * =========================================================================
 * 📌 MÉTODO: filter()
 * =========================================================================
 * Função: Percorre o array e SELECIONA apenas os itens que atendem a uma
 * condição (retornam true). Gera um NOVO array com tamanho menor ou igual ao original.
 * =========================================================================
 */

console.log("=== 🔍 EXEMPLOS COM filter() ===\n");

// -------------------------------------------------------------------------
// Exemplo 1 (Básico): Filtrar números pares
// -------------------------------------------------------------------------
console.log("--- Exemplo 1: Números pares (Básico) ---");

const idades = [12, 17, 18, 21, 14, 30, 25];

const maioresDeIdade = idades.filter((idade) => {
  return idade >= 18;
});

console.log("Todas as idades:", idades);
console.log("Apenas maiores de idade:", maioresDeIdade);
console.log("\n");

// -------------------------------------------------------------------------
// Exemplo 2 (Intermediário): Filtrar usuários ativos
// -------------------------------------------------------------------------
console.log("--- Exemplo 2: Filtrar cadastros ativos (Intermediário) ---");

const usuarios = [
  { id: 1, nome: "Ana", ativo: true },
  { id: 2, nome: "Bruno", ativo: false },
  { id: 3, nome: "Carlos", ativo: true },
  { id: 4, nome: "Diana", ativo: false }
];

const usuariosAtivos = usuarios.filter((usuario) => usuario.ativo);

console.log("Usuários Ativos no Sistema:", usuariosAtivos);
console.log("\n");

// -------------------------------------------------------------------------
// Exemplo 3 (Back-End Real): Filtro de produtos por estoque e categoria (GET /produtos?categoria=...)
// -------------------------------------------------------------------------
console.log("--- Exemplo 3: Endpoint de vitrine com produtos em estoque (Back-End Real) ---");

const catalogo = [
  { id: 101, nome: "Teclado Mecânico", categoria: "Periféricos", preco: 250.0, estoque: 12, ativo: true },
  { id: 102, nome: "Mouse Gamer", categoria: "Periféricos", preco: 120.0, estoque: 0, ativo: true },
  { id: 103, nome: "Monitor 144Hz", categoria: "Monitores", preco: 1100.0, estoque: 5, ativo: true },
  { id: 104, nome: "Headset USB", categoria: "Periféricos", preco: 180.0, estoque: 8, ativo: true },
  { id: 105, nome: "Cabo HDMI", categoria: "Acessórios", preco: 30.0, estoque: 0, ativo: false }
];

// Regra de Negócio: Listar somente periféricos que estejam ativos e tenham unidades em estoque
const perifericosDisponiveis = catalogo.filter((item) => {
  return item.categoria === "Periféricos" && item.ativo && item.estoque > 0;
});

console.log("Periféricos Disponíveis para Venda:");
console.log(perifericosDisponiveis);
//fim   