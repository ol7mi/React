import { useState } from "react";
import style from "./Input.module.css";
import { useNavigate } from "react-router-dom";

const Input = ({setMenus}) => {
  const navi= useNavigate();

  const [menu,setMenu] = useState({id: 0, name:'', price:0});

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setMenu(prev => ({...prev, [name]:value}))
  }
  
  const handleAdd = () => {
    setMenus(prev=> [...prev, menu]);
  }
  return (
    <div className={style.input}>
      <div className={style.inputTitle}>Input</div>
      <div className={style.inputTxt}>
        <div><input type="text" placeholder="input id" name="id" onChange={handleChange} value={menu.id || ''}/></div>
        <div><input type="text" placeholder="input name" name="name" onChange={handleChange} value={menu.name}/></div>
        <div><input type="text" placeholder="input price" name="price" onChange={handleChange} value={menu.price || ''}/></div>
      </div>
      <div className={style.buttons}>
        <button onClick={handleAdd}>추가</button>
        <button onClick={()=>{navi('/')}}>취소</button>
      </div>
    </div>
  );
};

export default Input;
