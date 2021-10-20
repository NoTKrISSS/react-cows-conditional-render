import { useState, useEffect } from "react";
import FieldAnimal from "./components/FieldAnimal";

function App() {
  const [field, setField] = useState([]);
  const [field1, setField1] = useState([]);
  const [whichField, setWhichField] = useState("1");

  const add = (what) => {
    const fieldCopy = field.slice();
    const field1Copy = field1.slice();
    whichField === "1" && fieldCopy.push({ animal: what });
    whichField === "2" && field1Copy.push({ animal: what });
    console.log(whichField);
    whichField === "1" && setField(fieldCopy);
    console.log(fieldCopy);

    whichField === "2" && setField1(field1Copy);
    console.log(field1Copy);
  };

  const changeField = (e) => {
    console.log(e.target.value);
    setWhichField(e.target.value);
  };

  // useEffect(() => {
  //     console.log('susirenderino')
  // }, []);

  return (
    <div className="field">
      <div>
        {field.map((fieldAnimal, i) => (
          <FieldAnimal key={i} fieldAnimal={fieldAnimal}></FieldAnimal>
        ))}
      </div>
      <div>
        {field1.map((fieldAnimal, i) => (
          <FieldAnimal key={i} fieldAnimal={fieldAnimal}></FieldAnimal>
        ))}
      </div>
      <button onClick={() => add("cow")}>Add cow</button>
      <button onClick={() => add("sheep")}>Add sheep</button>
      <button onClick={() => add("horse")}>Add horse</button>
      <select onChange={(e) => changeField(e)}>
        <option value={"1"}>1</option>
        <option value={"2"}>2</option>
      </select>
    </div>
  );
}

export default App;

//Prie karvių ir avių uždavinio pridėkite arklius ir padarykite selektą su dviejų laukų pasirinkimu. Gyvulius reikia pridėti atskirai į pasirinktą lauką.
