import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [data, setData] = useState([
    {
      id: 1,
      title: "Inception",
      genre: "Science Fiction",
      publish: "2010-07-16",
    },
    {
      id: 2,
      title: "The Dark Knight",
      genre: "Action",
      publish: "2008-07-18",
    },
    {
      id: 3,
      title: "Parasite",
      genre: "Thriller",
      publish: "2019-05-30",
    },
    {
      id: 4,
      title: "La La Land",
      genre: "Musical",
      publish: "2016-12-09",
    },
    {
      id: 5,
      title: "Avatar",
      genre: "Science Fiction",
      publish: "2009-12-18",
    },
  ]);
  //복사 데이터 
  const [datas, setDatas] = useState(data);

  // 추가
  const [insert, setInsert] = useState({
    id: "",
    title: "",
    genre: "",
    publish: "",
  });
  const handleID = (e) => {
    setInsert((prev) => {
      return { ...prev, id: e.target.value };
    });
  };
  const handleTitle = (e) => {
    setInsert((prev) => {
      return { ...prev, title: e.target.value };
    });
  };
  const handleGenre = (e) => {
    setInsert((prev) => {
      return { ...prev, genre: e.target.value };
    });
  };
  const handlePublish = (e) => {
    setInsert((prev) => {
      return { ...prev, publish: e.target.value };
    });
  };
  const handleSave = () => {
    const newData = [...data, insert]; //변수에 원본+추가 배열
    setData(newData); //원본에 배열
    setDatas(newData); //복사에 배열
  };

  //삭제
  const [del, setDel] = useState("");
  const handleDel = (e) => {
    setDel(e.target.value);
  };
  const deleteBtn = () => {
    const newData = data.filter((item) => item.id !== parseInt(del));
    setData(newData); //복사 
    setDatas(newData); //원본
  };

  //수정
  const [update, setUpdate] = useState({
    id: "",
    title: "",
    genre: "",
    publish: "",
  });
  const updateTitle = (e) => {
    setUpdate((prev) => {
      return { ...prev, title: e.target.value };
    });
  };
  const updateID = (e) => {
    setUpdate((prev) => {
      return { ...prev, id: e.target.value };
    });
  };
  const updateGenre = (e) => {
    setUpdate((prev) => {
      return { ...prev, genre: e.target.value };
    });
  };
  const updateBtn = () => {
    const newData = data.map((item) =>
      item.id === parseInt(update.id) ? { ...item, ...update } : item
    );
    setData(newData);
    setDatas(newData);
  };

  //검색
  const searchBox = (e) => {
    const searchText = e.target.value; //내가 입력한 재목 
    const filteredData = data.filter((item) => item.title.includes(searchText)); //원본에 있는 제목과 내 제목이 일치하는지?
    setDatas(filteredData);
  };

  return (
    <div className="container">
      <table className="contents">
        <tr>
          <td>ID</td>
          <td>제목</td>
          <td>장르</td>
          <td>출시일</td>
        </tr>
        {datas.map((data, index) => {
          return (
            <tr key={index}>
              <td>{data.id}</td>
              <td>{data.title}</td>
              <td>{data.genre}</td>
              <td>{data.publish}</td>
            </tr>
          );
        })}

        {/* 추가 */}
        <tr>
          <td colSpan={3}>
            <input
              type="text"
              placeholder="아이디"
              onChange={handleID}
              value={insert.id}
            />
            <input
              type="text"
              placeholder="제목"
              onChange={handleTitle}
              value={insert.title}
            />
            <input
              type="text"
              placeholder="장르"
              onChange={handleGenre}
              value={insert.genre}
            />
            <input
              type="date"
              onChange={handlePublish}
              value={insert.publish}
            ></input>
          </td>
          <td colSpan={1}>
            <button onClick={handleSave}>추가</button>
          </td>
        </tr>

        {/* 삭제 */}
        <tr>
          <td colSpan={3}>
            <input type="text" placeholder="삭제할 ID" onChange={handleDel} />
          </td>
          <td colSpan={1}>
            <button onClick={deleteBtn}>삭제</button>
          </td>
        </tr>

        {/* 수정 */}
        <tr>
          <td colSpan={3}>
            <input
              type="text"
              placeholder="제목"
              onChange={updateTitle}
            ></input>
            <input
              type="text"
              placeholder="장르"
              onChange={updateGenre}
            ></input>
          </td>
          <td colSpan={1}>
            <input
              type="text"
              placeholder="수정할 ID"
              onChange={updateID}
            ></input>
            <button onClick={updateBtn}>수정</button>
          </td>
        </tr>

        {/* 검색 */}
        <tr>
          <td colSpan={4}>
            <input
              type="text"
              placeholder="검색할 제목"
              className="searchBox"
              onChange={searchBox}
            />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default App;
