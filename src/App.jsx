import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ExampleComponent from "./componets/ExampleComponent";
import PropsDisplayer from "./componets/PropsDisplayer"
import City from "./componets/City";
import Pet from "./componets/Pet";
import FullName from "./componets/Name";
import ComplexComment from "./componets/ComplexComment";
import Comment from "./componets/Comment";
import Callout from "./componets/Callout";
import MoviesList from "./componets/MoviesList";
import MoodChanger from "./componets/MoodChanger";
import BirthdayTranslator from "./componets/BirthdayTranslator";
import Weather from "./componets/Weather";
import LoginForm from "./componets/LogInForm";
import ErrorMessage from "./componets/ErrorMessage";
import ExplodingBomb from "./componets/ExplodingBomb";
import Greetings from "./componets/Greeting";
import SingleCat from "./componets/SingleCat";
import BigCats from "./componets/BigCats";
import Emoji from "./componets/Emoji";
import Calculator from "./componets/Calculator";

function App() {
  const [count, setCount] = useState(23);

  const spiderman = {
    name: "Spiderman",
    alterEgo: "Peter Parker",
    catchPhrase: "With great power comes great responsibility",
  };

  const spideyJSX = (
    <>
      <h3>{spiderman.name}</h3>
      <blockquote>{spiderman.catchPhrase}</blockquote>
      <cite>{spiderman.alterEgo}</cite>
    </>
  );

  const comment = {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl: "https://placekitten.com/g/64/64",
    },
  };

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {spideyJSX}
      <ExampleComponent name="Cool Dude" />
      <PropsDisplayer
        name="Jerry Styles"
        age={29}
        pets={["cat", "dog", "goldfish"]}
        setCount={setCount}
        ExampleComponent={ExampleComponent}
      />
      <City name="Newcastle" state="NSW" country="Australia">
        <div>Newcastle is a harbour city in the Aussie state of NSW</div>
        <div>
          <strong>Population:</strong> 332,278 (2016)
        </div>
      </City>
      <Pet type="cat" name={1} colour="" shouldRender />
      <FullName first="Kendrick" last="Lamar" />
      <ComplexComment
        author={comment.author}
        date={comment.date}
        text={comment.text}
      />
      <Comment
        author={comment.author}
        date={comment.date}
        text={comment.text}
      />
      <Callout title="Nested React Component"
        message="Simple message with a fancy box">
          <FullName first="Elon" last="Musk" />
      </Callout>
      <MoviesList />
      <MoodChanger />
      <BirthdayTranslator />
      <Weather /> */}
      {/* <LoginForm /> */}
      {/* <MoviesList />
      <ExplodingBomb /> */}
      <Greetings />
      <Greetings name="Randy" />
      <BigCats />
      <Emoji />
      <Calculator />
    </>
  );
}

export default App;