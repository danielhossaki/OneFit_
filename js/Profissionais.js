const profissionais = [
  {
    nome: "Bruno Martins",
    area: "Professor de Funcional",
    img: "./img/professor-funcional.png",
    desc: "Especialista em treinos funcionais focados em emagrecimento, resistência e condicionamento físico. Com mais de 8 anos de experiência, trabalha com aulas dinâmicas e personalizadas. CREF: 123456-G/SP"
  },
  {
    nome: "Ricardo Souza",
    area: "Nutricionista",
    img: "./img/nutricionista.png",
   desc: "Nutricionista esportivo com foco em performance, hipertrofia e reeducação alimentar. Elabora dietas personalizadas de acordo com os objetivos de cada aluno. CRN: 123456"
  },
  {
    nome: "Fernanda Alves",
    area: "Professora de dança",
    img: "./img/professora_dança.png",
    desc: "Professora de dança com aulas voltadas para queima calórica, coordenação e bem-estar. Trabalha com ritmos variados e treinos animados para todos os níveis. CREF: 123456-G/SP"
  },
  {
    nome: "Patricia Gomes",
    area: "Instrutora de Pilates",
    img: "./img/professora-pilates.png",
   desc: "Instrutora de Pilates especializada em fortalecimento muscular, postura e alongamento. Atua na prevenção de lesões e melhoria da qualidade de vida. CREF: 123456-G/SP"
  },
  {
    nome: "Juliana Rocha",
    area: "Instrutora de Musculação",
    img: "./img/instrutura-de-musculacao.png",
    desc: "Instrutora de musculação com foco em hipertrofia, definição e ganho de força. Monta treinos personalizados para iniciantes e avançados. CREF: 123456-G/SP"
  }
];
function irHome() {
  window.location.href = "index.html";
}

const container = document.getElementById("profissionais-container");

profissionais.forEach((p, index) => {
  container.innerHTML += `
    <div class="col-md-4 mb-4">
      <div class="card card-prof p-3 text-center">
        <img src="${p.img}" class="card-img-top" alt="${p.nome}">
        <div class="card-body">
          <h5>${p.nome}</h5>
          <p>${p.area}</p>
          <button class="btn btn-ver" onclick="toggleDesc(${index})">Ver mais</button>
          <p class="descricao" id="desc-${index}">${p.desc}</p>
        </div>
      </div>
    </div>
  `;
});

function toggleDesc(index) {
  const desc = document.getElementById(`desc-${index}`);
  desc.style.display = desc.style.display === "block" ? "none" : "block";
}