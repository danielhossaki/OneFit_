const profissionais = [
  {
    nome: "Bruno Martins",
    area: "Professor de Funcional",
    img: "../img/professor-funcional.png",
    desc: "Especialista em hipertrofia e emagrecimento com 8 anos de experiência.  CREF: 123456-G/SP"
  },
  {
    nome: "Ricardo Souza",
    area: "Nutricionista",
    img: "../img/nutricionista.png",
    desc: "Foco em dieta esportiva e performance de atletas. CRN: 123456"
  },
  {
    nome: "Lucas Ferreira",
    area: "Instrutor Funcional",
    img: "https://randomuser.me/api/portraits/men/55.jpg",
    desc: "Treinos dinâmicos para resistência e condicionamento físico."
  },
  {
    nome: "Ana Costa",
    area: "Personal Trainer",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    desc: "Especialista em treino feminino e definição muscular."
  },
  {
    nome: "Rafael Mendes",
    area: "Fisioterapeuta",
    img: "https://randomuser.me/api/portraits/men/77.jpg",
    desc: "Reabilitação esportiva e prevenção de lesões."
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