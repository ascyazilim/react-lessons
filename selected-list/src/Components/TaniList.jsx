import React, { useEffect, useState } from "react";
import axios from "axios";

function TaniList({addToTable}) {
  const [selectedOption, setSelectedOption] = useState("");
  const [list, setList] = useState([]);
  const [taniList, setTaniList] = useState([]);

  useEffect(() => {
    const fetchTaniListesi = async () => {
        try{
            const response = await axios.get("http://localhost:8080/tani-list");
            setTaniList(response.data);
        }catch (error){
            console.error("Veri alınamadı: ", error);
        }
    };
    fetchTaniListesi();
  }, []);

  const handleAddOption = () => {
    if (selectedOption.trim() !== "") {
      // setList([...list, selectedOption]);
      addToTable(selectedOption);
      setSelectedOption("");
    }
  };

  return (
    <div>
      <h1>React Tek Seçenek Ekleme</h1>
      <div>
        {taniList.map((tani) => (
            <label key={tani.id}>
          <input
            type="checkbox"
            name="option"
            value={tani.taniAdi}
            checked={selectedOption === tani.taniAdi}
            onChange={() => setSelectedOption(tani.taniAdi)}
          />
          {tani.taniAdi}
        </label>
        ))}
        
        <button onClick={handleAddOption}>Ekle</button>
      </div>
     
    </div>
  );
}

export default TaniList;
