// api/dados.js
const portfolioData = [
  {
    id: 1,
    title: "Imagem 1",
    img: "/assets/sprite19.gif",
  },
  {
    id: 2,
    title: "Imagem 2",
    img: "/assets/sprite20.png",
  },
  // Adicione mais objetos para cada imagem do portfólio
];

export default function handler(req, res) {
  if (req.method === "GET") {
    // Retornar os dados do portfólio
    res.status(200).json(portfolioData);
  } else {
    res.status(405).end(); // Método não permitido
  }
}
