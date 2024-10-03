import {useState} from "react";

export default function ControlledComponent() {
    const [favouriteWord, setFavouriteWord] = useState("");
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Do something with the form data
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input className="border-2 border-gray-500"
          type="text"
          value={favouriteWord}
          onChange={(e) => setFavouriteWord(e.target.value)}
        />
        <p>Your favourite word is: {favouriteWord}</p>
        <button className="border-2 border-black" type="submit">Submit</button>
      </form>
    );
  }