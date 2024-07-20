import { useNavigate } from "react-router-dom";
import style from "./Index.module.css";
const Index = () => {
  const navi= useNavigate()
  // const handleToInput = () => {
  //   setpage("input");
  // }
  // const handleToOutput = () => {
  //   setpage("output");
  // }
  return (
    <div className={style.index}>
      <div>index</div>
      <div className={style.buttonBox}>
        <div>
          <button
            onClick={() => {navi('input')}}>toInput</button>
        </div>
        <div>
          <button onClick={() => {navi('output')}}>toOutdex</button>
        </div>
      </div>
    </div>
  );
};

export default Index;
