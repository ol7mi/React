import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import style from "./App.module.css";
import Index from "./components/Index/Index";
import Input from "./components/Input/Input";
import Output from "./components/Output/Output";

function App() {
  const [page, setPage] = useState("/");

  const [menus, setMenus] = useState([
    { id: 1001, name: "Americano", price: 2000 },
    { id: 1002, name: "Cafe Latte", price: 3500 },
    { id: 1003, name: "Cafe Mocha", price: 4000 },
    { id: 1004, name: "Orange Juice", price: 5000 },
    { id: 1005, name: "Mango Juic", price: 6000 },
  ]);

  return (
    <div className={style.container}>
      <Router>
        <div className={style.box}>
          <Routes>
            {/* 무조건 주소값에 따라 보여질 요소들을 나열하는데 그건 Route*/}
            {/* path -> 주소값이 이것일때 */}
            <Route path="/" element={<Index />} />
            <Route path="input" element={<Input setMenus={setMenus} />} />
            <Route
              path="output"
              element={<Output menus={menus} setMenus={setMenus} />}
            />
          </Routes>
          {/* {page == "/" && <Index setPage={setPage} />}
          {page == "input" && <Input setPage={setPage} setMenus={setMenus} />}
          {page == "output" && <Output setPage={setPage} menus={menus} setMenus={setMenus}/>} */}
        </div>
      </Router>
    </div>
  );
}

export default App;
