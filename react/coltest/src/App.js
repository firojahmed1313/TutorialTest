import './App.css';
import React, { useState } from 'react';
function App() {
  const [valuek, setValue] = useState();
  const [valueg, setgValue] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(valuek);
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <select value={valuek} onChange={(e) => setValue(e.target.value)}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
        <div value={valueg} onChange={(e) => setgValue(e.target.value)}>
          <input type="radio" value="MALE" name="gender" /> Male
          <input type="radio" value="FEMALE" name="gender" /> Female
        </div>
        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
        <label htmlFor="vehicle3"> I have a boat</label>
        <input type="submit" value="Submit" />
      </form>
    
      <details style={{"border":"2px solid red","textAlign":"start","cursor":"pointer"}}>
        <summary style={{"border":"2px solid blue",  "listStyle": "none"}}>DisableCar</summary>


        <div style={{"border":"2px solid green"}} >
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
          squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
          sapiente ea proident.
        </div>
      </details>

    </div>
  );
}

export default App;
