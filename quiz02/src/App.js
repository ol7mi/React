import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router ,Routes,Route,useNavigate} from "react-router-dom";
import Content from './components/Content/Content'
function App() {
  return (
    <Router>
        <AppContent/>
    </Router>
  );
}

const AppContent = () =>{
  const navi = useNavigate();
  return(
    <div className="container">
      <div className='list'>List</div>
      <div className='body'>
        <div>
          <div onClick={()=> navi("/add")}>Add</div>
          <div onClick={()=> navi("/delete")}>Delete</div>
          <div onClick={()=> navi("/modify")}>Modify</div>
        </div>
        <div>
          <Routes>
            <Route path='/' element={<Content content="list"/>}></Route>
            <Route path="add/*" element={<Content content="Add"/>}></Route>
            <Route path="delete/*" element={<Content content="Delete"/>}></Route>
            <Route path="modify/*" element={<Content content="Modify"/>}></Route>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App;
