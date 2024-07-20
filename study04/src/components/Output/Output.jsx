import { useNavigate } from "react-router-dom";
import style from "./Output.module.css";
import { useState } from "react";

const Output = ({menus, setMenus }) => {
  const navi= useNavigate();
  const [search, setSearch] = useState("");
  //복사 데이터
  const [datas, setDatas] = useState(menus);
  // 검색 기능
  const searchBox = (e) => {
    const searchText = e.target.value.trim(); // 입력한 검색어 (앞뒤 공백 제거)
    setSearch(searchText); // 검색어 상태 업데이트

    const filteredData = menus.filter((item) => item.name.includes(searchText)); // 검색어를 포함하는 메뉴 필터링
    setDatas(filteredData); // 필터링된 데이터 업데이트
  };

  //삭제
  const delBtn = (id) => {
    setMenus((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };

  //수정
  const [upDate, setUpdate] = useState({ id: 0, name: "", price: 0 });
  const handleId = (e) => {
    setUpdate((prev) => {
      return { ...prev, id: parseInt(e.target.value) };
    });
  };
  const handleName = (e) => {
    setUpdate((prev) => {
      return { ...prev, name: e.target.value };
    });
  };
  const handlePrice = (e) => {
    setUpdate((prev) => {
      return { ...prev, price: parseInt(e.target.value) };
    });
  };
  const updateBtn = () => {
    console.log(upDate);
    setMenus((prev) => {
      return prev.map((item) => {
        return item.id === upDate.id ? upDate : item;
      });
    });
  };

  return (
    <div className={style.output}>
      <div className={style.title}>Output</div>
      <div className={style.table}>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
            {menus.map((menu, i) => {
              return (
                <tr key={i}>
                  <td>{menu.id}</td>
                  <td>{menu.name}</td>
                  <td>{menu.price}</td>
                  <td>
                    <button onClick={() => delBtn(menu.id)}>X</button>
                  </td>
                </tr>
              );
            })}
            <tr>
              <td colSpan={3}>
                <input
                  type="text"
                  placeholder="Name"
                  onChange={handleName}
                ></input>
                <input
                  type="text"
                  placeholder="Price"
                  onChange={handlePrice}
                ></input>
              </td>
              <td colSpan={1}>
                <input type="text" placeholder="ID" onChange={handleId}></input>
                <button onClick={updateBtn}>수정</button>
              </td>
            </tr>
            <tr>
              <td colSpan={4}>
                <input
                  type="text"
                  placeholder="Search by name"
                  onChange={searchBox}
                />
              </td>
            </tr>
            <tr>
              <td className={style.index} colSpan={4}>
                <button onClick={() => {navi('/')}}>첫 페이지로</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Output;
