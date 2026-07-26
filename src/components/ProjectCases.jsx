const projects = [
  {
    id: 1,
    image: "/project1.jpg",
    type: "공장 지붕 태양광",
    location: "경기도 남양주시",
    capacities: ["250kWp"],
  },
  {
    id: 2,
    image: "/project2.jpg",
    type: "설문발전소 태양광",
    location: "경기도 고양시",
    capacities: ["185kWp"],
  },
  {
    id: 3,
    image: "/project3.jpg",
    type: "일반대지 태양광",
    location: "강원도 원주시",
    capacities: ["태양광 4MW", "ESS 12MW"],
  },
  {
    id: 4,
    image: "/project4.jpg",
    type: "정수장 태양광",
    location: "인천시 서구",
    capacities: ["1,470kW"],
  },
];

function ProjectCases() {
  return (
    <section id="projects" className="projectSection">
      <div className="projectHeader">
        <p className="greenText">실제 시공 현장</p>
        <h2>주요 시공사례</h2>
        <p>율린에너지의 주요 시공 현장을 소개합니다.</p>
      </div>

      <div className="projectGrid">
        {projects.map((project) => (
          <article className="projectCard" key={project.id}>
            <div className="projectImageBox">
              <img
                src={project.image}
                alt={`${project.location} ${project.type}`}
              />
            </div>

            <div className="projectInfo">
              <h3>{project.type}</h3>
              <p>{project.location}</p>

              <div className="projectCapacity">
                {project.capacities.map((capacity) => (
                  <strong key={capacity}>{capacity}</strong>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProjectCases;