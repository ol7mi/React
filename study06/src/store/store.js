// import {create} from 'zustand';
import { create } from 'zustand';

//여러개면 export 이렇게 하나하나 써줘야 한다.
export const useStore = create((set) => ({ //인자값 set 은 스토어 저장소 내부의 내용을 바꾸기 위해서 존재 (스토어를 수정)
    //실행 했을 때 객체를 리턴 
    str: 'Hello', //초기값
    setStr: (param)=> set({str:param}) //str 의 값을 변경
    //set({str:param}) -> 스토어 객체를 수정할 건데, key 값인 str 인 대상에 param을 넣어서 내용을 바꿔라 

}));
// export default useStore; //하나면


//배열
export const useArrayStore = create((set)=>({
    arr:["Apple","Orange","Mango"],
    add : (param)=> set(prev=> ({ arr: [...prev.arr, param] })) //키값 arr : 과거.arr 그리고 지금
    //prev이전 값 //주의! prev 는 스토어 객체에 대한 것. 배열을 말하는게 아님 //변경되기전 배열
}));


export const useContactStore = create((set)=>({
    contact: [
        {id:1001, name:"eunmi", contact:"100102041"},
        {id:1001, name:"eunmi", contact:"100102041"},
    ],
    addContact: (param) => set(prev => ({contact: [...param.contact, param]})),

    //삭제
    delContact: (id) => set((prev) => ({
        contact: prev.contact.filter(item => item.id !== id) // ID로 연락처 삭제
    }))
}))

