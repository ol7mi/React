import "./App.css";
import {
  useContactStore,
  useArrayStore,
  useStore,
  delContact,
} from "./store/store"; // store 파일로부터 useStore를 가져옴

//컴포넌트 (원래는 따로 만n들어야 함)
const Com2 = () => {
  const { str, setStr } = useStore(); //js 에 있는 객체를 리턴한 걸 여기로 받음
  const { arr, add } = useArrayStore();
  const { contact, addContact } = useContactStore();

  return (
    <div>
      {str}
      <hr />
      <button
        onClick={() => {
          setStr("!!Hello zustand");
        }}
      >
        str 내용 변경
      </button>
      <hr></hr>
      <ul>
        {arr.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      <hr></hr>
      <button
        onClick={() => {
          add("Grape");
        }}
      >
        배열 내용 추가
      </button>
      <hr />
      <ul>
        {contact.map((item, index) => {
          return (
            <li key={index}>
              {item.id} : {item.name} : {item.contact}
            </li>
          );
        })}
      </ul>
      <button
        onClick={() => {
          delContact(1001);
        }}
      >
        삭제
      </button>
    </div>
  );
};
const Com1 = () => {
  return (
    <div>
      <Com2 />
    </div>
  );
};

function App() {
  return (
    <div className="container">
      <Com1 />
    </div>
  );
}

export default App;
