import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import User from './components/User/User'
import { useState } from 'react';

function App() {

  const [menus, setMenus] = useState([
    { id: 1001, name: "Americano", price: 2000 },
    { id: 1002, name: "Cafe Latte", price: 3500 },
    { id: 1003, name: "Cafe Mocha", price: 4000 },
    { id: 1004, name: "Orange Juice", price: 5000 },
    { id: 1005, name: "Mango Juic", price: 6000 },
  ]);

  return (
    <div className="container">
      <div>관리콘솔</div>

      <div>
        <div className='menu'>
          <div>메인</div>
          <div>회원관리</div>
          <div>카페 메뉴 관리</div>
          <div>게시글 관리</div>
        </div>
        <div className='view'>
          <div>
            <div>목록</div>
            <div>신규등록</div>
            <div>정보수정</div>
            <div>삭제</div>
          </div>
          <div>
            <table>
              <tr>
                <th>ID</th>
                <th>name</th>
                <th>email</th>
                <th>role</th>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
const AppContainer = () => {

}

export default App;
