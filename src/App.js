import logo from "./logo.svg";
import "./App.css";
import Header from "./companent/Header.js";
import Jpeg from "./companent/Jpeg.js";
import Sablon from "./companent/Sablon.js";
import Text from "./companent/Text.js";
import a from "./a.jpg";
import REACT, { useState } from "react";

function App() {
  const [control, setControl] = useState("anasayfa");
  console.log(control);
  return (
    <div>
      <div style={{ width: "100%", float: "left" }}>
        <button onClick={() => setControl("anasayfa")}>AnaSayfa</button>
        <button onClick={() => setControl("hakkımızda")}>Hakkımızda</button>
        <button onClick={() => setControl("iletişim")}>İletişim</button>
      </div>
      {control === "anasayfa" ? (
        <>
          <Header />
          <Sablon image={a} text="JForce" />
          <Sablon image={a} text="Nisantasi Üniversitesi" />
          <div style={{ margin: "20px" }}>
            <Text text1="text" />
            <Text text1="text2" />
          </div>
          <div style={{ margin: "20px" }}>
            <Jpeg image={a} />
            <Jpeg image={a} />
            <Jpeg image={a} />
            <Jpeg image={a} />
            <Jpeg image={a} />
            <Jpeg image={a} />
            <Jpeg image={a} />
            <Jpeg image={a} />
            <Jpeg image={a} />
            <Jpeg image={a} />
            <Jpeg image={a} />
            <Jpeg image={a} />
            <Jpeg image={a} />
            <Jpeg image={a} />
          </div>
        </>
      ) : control === "hakkımızda" ? (
        <>
          <Header />
          <Sablon image={a} text="JForce" />
          <Sablon image={a} text="Nisantasi Üniversitesi" />
          <div style={{ margin: "20px" }}>
            <Text text1="text" />
            <Text text1="text2" />
          </div>
        </>
      ) : control === "iletişim" ? (
        <>
          <Header />
          <Sablon image={a} text="JForce" />
          <Sablon image={a} text="Nisantasi Üniversitesi" />
        </>
      ) : null }
    </div>
  );
}

export default App;
