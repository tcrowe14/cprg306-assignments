export default function Person() {
    const people = [
        { id: 1, name: "Aneesh", age: 25 },
        { id: 2, name: "Baptiste", age: 30 },
        { id: 3, name: "Chun", age: 35 },
      ];
      
      return (
        <ul>
          {people.map((person) => (
            <li key={person.id} onClick={() => alert(person.name)}>
              {person.name} ({person.age})
            </li>
          ))}
        </ul>
      );
}