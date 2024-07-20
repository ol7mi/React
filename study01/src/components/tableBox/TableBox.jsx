const TableBox = () => { 
    return (
      <div className="tableBox">
          <table border="1">
            <tr>
              <th colSpan="3">테이블 연습</th>
            </tr>
            <tr>
              <td>seq</td>
              <td>name</td>
              <td>price</td>
            </tr>
            <tr>
              <td>1</td>
              <td>apple</td>
              <td>2000</td>
            </tr>
          </table>
        </div>
    );
  };  
//딱하나면? 여러개면?default 없이 export TableBox로 
  export default TableBox;