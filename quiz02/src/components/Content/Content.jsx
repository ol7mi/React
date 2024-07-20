import styles from './Content.module.css';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sub from './Sub/Sub'

const Content = ({ content }) => {
  const navi = useNavigate();
  return (
    <div className={styles.container}>
      <div>
        <div className='menu'>
          <div onClick={()=>{navi('add')}}>add</div>
          <div onClick={()=>{navi('delte')}}>delte</div>
          <div onClick={()=>{navi('modify')}}>modify</div>
        </div>
        <div className='contents'>
          <Routes>
            <Route path='add' element={<Sub content={"add"}/>}></Route>
            <Route path='delte' element={<Sub content={"delte"}/>}></Route>
            <Route path='modify' element={<Sub content={"modify"}/>}></Route>
          </Routes>
        </div>
      </div>
      {/* {content} */}
    </div>
  );
}

export default Content;
