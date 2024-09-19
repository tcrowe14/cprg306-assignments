export default function Page() {
    let person = {
        firstName: "Diane",
        age: 25,
        isStudent: true,
        address: {
            street: "123 Main St",
            city: "Calgary",
            province: "AB",
        },
    };

    let { firstName, age } = person;

    return (
      <div>
        <h1>Person Details</h1>
        <p>First Name: {firstName}</p>
        <p>Age: {age}</p>
      </div>
    );
}
