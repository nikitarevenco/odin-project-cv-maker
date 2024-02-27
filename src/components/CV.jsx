export default function CV({ info, sections }) {
  return (
    <>
      <CVHeader info={info} />
      <CVBody sections={sections} />
    </>
  );
}

class someTestClass {
  constructor(asdasd) {
    this.asdsda = asdasd;
  }
  sayHi() {
    console.log("hi");
  }
}
