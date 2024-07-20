import "./App.css";
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import Navi from './components/Navi/Navi';

//Local Scoping 특정 파일 내에서만 사용할 수 있는 이름으로 자동 생성되는 기술 
function App() {
  return (
    <div className="container">
      <Header />
      <Navi />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
