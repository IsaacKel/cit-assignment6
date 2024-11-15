function Person({ person }) {
  return (
    <div>
      <h2>{person.name}</h2>
      <h3>{person.known_for_department}</h3>
      <ul>
        {person.known_for.map((item, index) => (
          <li key={index}>
            <strong>{item.title}</strong> ({item.release_date})
            <p>{item.overview}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Person;
