import {useState} from "react";

export default function Toggle() {
    const [show, setShow] = useState(false);
  
    return (
      <div>
        <button onClick={() => setShow(!show)}>Toggle</button>
        {show && <p>Visible</p>}
      </div>
    );
  }