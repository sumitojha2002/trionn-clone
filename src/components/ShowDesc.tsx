import Description from "../utilis/Description";
const DescriptionData = [
  {
    title: "recent",
    subtitle: "work",
    subtitle2: "",
    desc1: "in the creative wilderness,",
    desc2: "clients find our work truely",
    desc3: "beloved.",
    desc4: "",
  },
  {
    title: "who",
    subtitle: "we are",
    subtitle2: "",
    desc1: "As an award-winning agency within the",
    desc2: "digital jungle, TRIONN® transcends",
    desc3: "aesthetics, crafting your vision into a",
    desc4: "legacy that endures.",
  },
  {
    title: "Partner",
    subtitle: "Love",
    subtitle2: "",
    desc1: "",
    desc2: "",
    desc3: "",
    desc4: "",
  },
  {
    title: "Time to",
    subtitle: "roar",
    subtitle2: "",
    desc1: "",
    desc2: "",
    desc3: "",
    desc4: "",
  },
];

interface ShowDescProps {
  indexnumber: number;
}

const ShowDesc: React.FC<ShowDescProps> = ({ indexnumber }) => {
  return (
    <>
      <Description
        title={DescriptionData[indexnumber].title}
        subtitle={DescriptionData[indexnumber].subtitle}
        subtitle2={DescriptionData[indexnumber].subtitle2}
        desc1={DescriptionData[indexnumber].desc1}
        desc2={DescriptionData[indexnumber].desc2}
        desc3={DescriptionData[indexnumber].desc3}
        desc4={DescriptionData[indexnumber].desc4}
      />
    </>
  );
};

export default ShowDesc;
