const LinesSection = ({ sections }) => {
  return (
    <div>
      {sections.map((section, index) => (
        <div key={section.id}>
          {section.content}
          {index !== sections.length - 1 && <hr />} {/* Ligne de séparation */}
        </div>
      ))}
    </div>
  );
};

export default LinesSection;
