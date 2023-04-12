import { useRef } from "react";
import { useNavigate } from "react-router-dom"

export default function Register() {
  const dataRef = useRef(null);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/Page3", { state: { data: dataRef.current.value } });
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label>
          Fake Data:  
          <input type="text" name="txtData" ref={dataRef} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}