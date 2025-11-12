import Card from "../utilis/Card";

const CardData = [
  {
    number: 50,
    description: "Awards",
    desc2: "& Recognition",
    color: "#C93202",
  },
  {
    number: 20,
    description: "Creative",
    desc2: "Minds",
    color: "#C7D0D1",
  },
  {
    number: 900,
    description: "Projects",
    desc2: "Completed",
    color: "#A0C8B8",
  },
  {
    number: 20,
    description: "Years",
    desc2: "of Experience",
    color: "#D9CA3E",
  },
];
function ShowCards() {
  return (
    <div className=" w-full flex lg:gap-10 sm:flex-col md:flex-col flex-col lg:flex-row lg:mb-20 ">
      <div className="w-full ">
        <Card
          number={CardData[0].number}
          description={CardData[0].description}
          desc2={CardData[0].desc2}
          color={CardData[0].color}
        />
        <Card
          number={CardData[1].number}
          description={CardData[1].description}
          desc2={CardData[1].desc2}
          color={CardData[1].color}
        />
      </div>
      <div className="w-full lg:mt-30 mb-10">
        <Card
          number={CardData[2].number}
          description={CardData[2].description}
          desc2={CardData[2].desc2}
          color={CardData[2].color}
        />
        <Card
          number={CardData[3].number}
          description={CardData[3].description}
          desc2={CardData[3].desc2}
          color={CardData[3].color}
        />
      </div>
    </div>
  );
}

export default ShowCards;
