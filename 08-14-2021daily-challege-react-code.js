//this code shows how to toggle emojis in React... took me 2 hours to figure out after someone loaned me some sample code
//Counter.js (file)
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [isHappy, setIsHappy] = useState(true);
  const toggleIsHappy = () => setIsHappy(!isHappy);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <h1 onClick={toggleIsHappy}>{isHappy ? <Happy /> : <Sad />}</h1>
    </div>
  );
}

const Emoji = (props) => (
  <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
  >
    {props.symbol}
  </span>
);

function Happy() {
  return (
    <span>
      <Emoji label="happy-face" symbol="😀" />
    </span>
  );
}

function Sad() {
  return (
    <span>
      <Emoji label="sad-face" symbol="😧" />
    </span>
  );
}

export default Counter;

//App.js (file)
mport Cat from "./Cat";
import Greeter from "./Greeter";
import Navbar from "./Navbar";
import Counter from "./Counter";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Counter />
      <Greeter name="Betty-Lou" age="25" excitementLevel="" />
      <Greeter name="Tammy" />
      <Greeter name="🍏" exciteLevel="1" />
      <h1>We are making animal components y'all!</h1>
      <h2>Sprinkling in emojis everywhere we can ❤️</h2>
      <Cat />
    </div>
  );
}

//Cat.js (file)

import React from "react";
import "./styles.css";

export default function Cat() {
  return (
    <div className="App">
      <h1>Hello Cat</h1>
      <h2>Meow</h2>
    </div>
  );
}

//Greeter.js (file)

import React from "react";
import "./styles.css";

function Greeter({ name, age = "18", excitementLevel = "5" }) {
  const greet = () => {
    alert("Hello from the Peanut Gallery");
  };

  return (
    <>
      <h1>
        Hi there, I'm a pet greeter, and my name is {name}
        {"!".repeat(excitementLevel)}
      </h1>
      <p>I am {age} years old!</p>
      <button className="clickMe" onClick={greet}>
        Click Me!
      </button>
    </>
  );
}

export default Greeter;

//Navbar.js (file)
import React from "react";
import "./styles.css";

function Navbar() {
  return (
    <nav>
      <ul className="Navbar">
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
      </ul>
    </nav>
  );
}

export default Navbar;