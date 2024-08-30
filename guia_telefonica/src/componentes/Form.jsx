import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [nombre, setnombre] = useState("");
  const [apellido, setapellido] = useState("");
  const [edad, setedad] = useState("");
  const [tel, settel] = useState("");
  const [id, setid] = useState();
  const [warnings, setwarning] = useState(['']);

  const NameHandlechange = (e) => {
    setnombre(e.target.value);
    if(name.length < 3){
      setwarning([...warning,'el combre es demasioado corto'])
    }
  };

  const ApellidoHandlechange = (e) => {
    setapellido(e.target.value);
  };

  const EdadHandlechancge = (e) => {
    setedad(e.target.value);
  };

  const TelHandlechange = (e) => {
    settel(e.target.value);
  };

  const UploadInfo = () => {
    axios.post(`http://localhost:3000/usuarios`, {
      nombre: nombre,
      apellido: apellido,
      edad: edad,
      tel: tel,
      id: id,
    });
  };

  return (
    <>
      <input
        type="text"
        value={nombre}
        onChange={NameHandlechange}
        placeholder="nombre"
      />

      <input
        type="text"
        value={apellido}
        onChange={ApellidoHandlechange}
        placeholder="apellido"
      />

      <input
        type="number"
        value={edad}
        onChange={EdadHandlechancge}
        placeholder="edad"
      />
      <input
        type="number"
        value={tel}
        onChange={TelHandlechange}
        placeholder="tel"
      />

      <button type="submit" onClick={UploadInfo}>
        upload
      </button>
      {warnings.map((warning, index) =>{
        return
        <p>{warning[index]}</p>})}
    </>
  );
}

export default App;
