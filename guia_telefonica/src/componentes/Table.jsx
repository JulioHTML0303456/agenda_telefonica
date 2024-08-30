import axios from "axios";
import { useState, useEffect } from "react";

function Table() {
  const [usuarios, setusuarios] = useState([]);

  const getusuaios = () => {
    axios
      .get(`http://localhost:3000/usuarios`)
      .then((response) => setusuarios(response.data));
  };

  useEffect(getusuaios, [usuarios]);

  const delete_usuario = (e) => 
   axios.delete(`http://localhost:3000/usuarios/${e.target.value}`);

  return (
    <table>
      <thead>
        <tr>
          <th scope="col">name</th>
          <th scope="col">surname</th>
          <th scope="col">age</th>
          <th scope="col">tel</th>
          <th scope="col">accion</th>
        </tr>
      </thead>
      <tbody>
        {usuarios.map((usuario) => (
          <tr>
            <th>{usuario.nombre}</th>
            <th>{usuario.apellido}</th>
            <th>{usuario.edad}</th>
            <th>{usuario.tel}</th>
            <th>
              <button key={usuarios.id}value={usuario.id} type="submit" onClick={delete_usuario}>
                delete
              </button>
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
