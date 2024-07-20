import "./App.css";
import { useState } from "react";

function App() {
  const [data, setData] = useState([
    { seq: 1, writer: "tom", message: "Hello React" },
    { seq: 2, writer: "sara", message: "React State Practice" },
    { seq: 3, writer: "jack", message: "Object Array" },
  ]);

  const [filtered, setfiltered] = useState([data]);
  const [search, setSearch] = useState(data);

  const [obj, setObj] = useState({ seq: 0, writer: "", message: "" });
  //input
  const handelChange = (e) => {
    let { name, value } = e.target;
    console.log(`${name} ${value}`);
    setObj((prev) => ({ ...prev, [name]: value })); //[] 를 사용하면 변수안에 있는 값을 key로 쓰겠다는 뜻임!! 
  };

  //버튼
  const handelSave = () => {
    setData((prev) => [...prev, obj]);
    setSearch((prev) => [...prev, obj]);
    setObj({ seq: 0, writer: "", message: "" }); //갱신 후 값 초기화

    //state 에 대한 setter 는 비동기 처리로 실행되므로 즉각적인 피드백을 받지 못하는 경우가 생길 수 있다
    setData((prev) => {
      const updated = [...prev, obj];
      setfiltered(updated); //신규데이터를 만들어서 setfiltered 에 먼저 업데이트 시키고 그 다음에 setObj 업데이트 하면 바로바로 업데이트 효과를 줄 수 있다
      return updated;
    });
    setObj({ seq: 0, writer: "", message: "" }); //갱신 후 값 초기화
  };

  //삭제
  const [delSeq, setDelSeq] = useState(0);
  const handleDeleteSeq = (e) => {
    setDelSeq(parseInt(e.target.value));
  };
  const handleDelete = () => {
    // setData(prev=>[...prev, obj]) //delSeq가 삭제 된 목록 셋팅
    setSearch((prev) =>
      prev.filter((e) => {
        return e.seq !== delSeq;
      })
    );
  };

  //수정하기
  const [modify, setModify] = useState({ seq: 0, writer: "", message: "" });
  const writerChange = (e) => {
    setModify((prev) => {
      return { ...prev, writer: e.target.value };
    });
  };
  const messageChange = (e) => {
    setModify((prev) => {
      return { ...prev, message: e.target.value };
    });
  };
  const seqChange = (e) => {
    setModify((prev) => {
      return { ...prev, seq: parseInt(e.target.value) };
    });
  };
  //버튼
  const modifyClick = () => {
    setSearch((prev) => {
      return prev.map((e) => {
        return e.seq !== modify.seq ? e : modify;
      });
    });
    setModify({ seq: 0, writer: "", message: "" }); //갱신 후 값 초기화
  };

  //검색

  const searchBox = (e) => {
    setSearch(data);
    setSearch((prev) =>
      prev.filter((item) => {
        return item.message.includes(e.target.value);
      })
    );
  };
  return (
    <div className="container">
      <table className="messages">
        <tr>
          <th>글번호</th>
          <th>작성자</th>
          <th>메세지</th>
        </tr>
        {search.map((data, index) => {
          return (
            <tr key={index}>
              <td>{data.seq}</td>
              <td>{data.writer}</td>
              <td>{data.message}</td>
            </tr>
          );
        })}

        {/* 추가하기 */}
        <tr>
          <td colSpan={3}>
            {["seq", "writer", "message"].map((item) => {
              return (
                <input type="text" placeholder={item} name={item} onChange={handelChange} value={obj[item] || ""}></input>
              );
            })}
            <button onClick={handelSave}>추가</button>
          </td>
        </tr>

        {/* 삭제하기 */}
        <tr>
          <td colSpan={3}>
            <input type="text" onChange={handleDeleteSeq} placeholder="input seq to delete" />
            <button onClick={handleDelete}>삭제</button>
          </td>
        </tr>

        {/* 수정하기 */}
        <tr>
          <td><input type="text" placeholder="writer" onChange={writerChange} name="writer" value={modify.writer}/></td>
          <td><input type="text" placeholder="message" onChange={messageChange} name="message" value={modify.message} /></td>
          <td><input type="text"placeholder="seq"name="seq"onChange={seqChange}value={modify.seq || ""}/> <button onClick={modifyClick}>수정하기</button></td>
        </tr>
        {/* 검색 */}
        <tr>
          <td colSpan={3}><input type="text" placeholder="내용 검색" onChange={searchBox} /></td>
        </tr>
      </table>
    </div>
  );
}

export default App;
