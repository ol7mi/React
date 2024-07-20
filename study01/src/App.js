import "./App.css";
import ImgBox from "./components/ImgBox/Imgbox";
// import logo from './assets/logo.png';
import TableBox from './components/tableBox/TableBox'
import ULBox from './components/ULBox/ULBox'


//UI 컴포넌트 용도는 첫글자를 대문자로 사용한다 
//(아래와 같이 UI 를 만들어 변환하는 함수를 functional Component - 함수로 만들어진 UI)
function App() { //reactApp 의 시작점 = Main 
  return (
    //JSX 
    <div className="container">
      
    <ImgBox />
    <TableBox/>
    <ULBox/>
    </div>
  );
}

export default App;
//위 코드가 없으면 index js 가 이 App 을 못가져 간다.