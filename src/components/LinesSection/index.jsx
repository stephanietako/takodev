const LinesSection = ({ sections }) => {
  return (
    <div>
      {sections.map((section, index) => (
        <div key={section.id}>
          {section.content}
          {index !== sections.length - 1 && (
            <hr
              style={{
                width: "30%",
                margin: "0 auto",
                opacity: "0.4",
              }}
            />
          )}{" "}
        </div>
      ))}
    </div>
  );
};

export default LinesSection;
