const initialInfo = {
  name: "John",
  location: "London, UK",
  email: "john.hasmail@email.com",
  phone: "555-5555-555",
};

const initialSections = {
  Education: [
    {
      id: crypto.randomUUID(),
      place: "London City University",
      description:
        "Engaged in comprehensive study with a focus on Economics, integrating both theoretical frameworks and practical applications.",
      period: "08/2020 - present",
      location: "London",
      footnote: "Pursuing Bachelor of Economics",
      hidden: false,
    },
    {
      id: crypto.randomUUID(),
      place: "Cambridge Online Academy",
      description:
        "Completed an advanced course in Mathematical Foundations, covering topics from calculus to linear algebra, enhancing analytical skills and mathematical understanding.",
      period: "01/2019 - 12/2019",
      location: "Online",
      footnote: "Advanced Diploma in Mathematical Foundations",
      hidden: false,
    },
  ],
  "Professional Experience": [
    {
      id: crypto.randomUUID(),
      place: "Brighton Teacher",
      description:
        "Educator in advanced physics and mathematics, specialising in quantum destabilisation and quark analysis. Responsible for curriculum development and implementing innovative teaching methods.",
      period: "04/2018 - 08/2020",
      location: "Brighton",
      footnote: "Lead Educator in Quantum Physics",
      hidden: false,
    },
    {
      id: crypto.randomUUID(),
      place: "Folkestone Driver",
      description:
        "Professional driver navigating through Folkestone, providing exceptional service and experiences. Enhanced local tourism by exploring and recommending unique destinations.",
      period: "04/2016 - 04/2018",
      location: "Folkestone",
      footnote: "Professional Driver",
      hidden: false,
    },
    {
      id: crypto.randomUUID(),
      place: "Tech Innovate Ltd",
      description:
        "Software Developer Intern, contributing to front-end development projects using HTML, CSS, and JavaScript. Participated in agile development cycles, improving website functionality and user experience.",
      period: "06/2020 - 12/2020",
      location: "Remote",
      footnote: "Internship",
      hidden: false,
    },
  ],
};

export { initialInfo, initialSections };
