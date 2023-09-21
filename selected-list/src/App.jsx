
import { useState } from 'react';
import './App.css';
import TaniList from './Components/TaniList';

function App() {

  const [tableData, setTableData] = useState([]);

  const addToTable = (selectedOption) => {
    setTableData([...tableData, selectedOption]);
  };

  return (
    <div className="App">
      <h1>React Tek Seçenek Ekleme</h1>
      <div>
        <TaniList addToTable={addToTable} />
      </div>
      <table>
        <thead>
          <tr>
            <th>Seçenekler</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item,index) =>(
            <tr key={index}>
              <td>{item}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
