export default function EditCVBasics({ info, setInfo }) {
  const inputs = Object.entries(info).map(([field, value]) => {
    return (
      <section key={field}>
        <p className="input-description">Enter: {field}</p>
        <input
          value={value}
          onChange={(event) => {
            setInfo({ ...info, [field]: event.target.value });
          }}
        />
      </section>
    );
  });
  return <section className="basic-inputs">{inputs}</section>;
}
