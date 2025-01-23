/* eslint-disable */ 
// warning메세지 없애는 기능

import { useState } from 'react';
import './App.css';

function App() {
  let [title, setTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬독학']);
  let [like, 변경] = useState([0,0,0]);
  let [modal, setModal] = useState(true);
  let [title2,setTitle2] = useState(0);
  let [value, setValue] = useState(''); 

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      {/* <div className="list">
        <h4>{title[0]} <span onClick={()=> {변경(like + 1)}}>👍</span> {like} </h4>
        <p>1월 22일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]} <span onClick={()=> {변경2(like2 + 1)}}>👍</span> {like2} </h4>
        <p>1월 22일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={()=>{
          setModal(!modal);
        }}>{title[2]} <span onClick={()=> {변경3(like2 + 1)}}>👍</span> {like3} </h4>
        <p>1월 22일 발행</p>
      </div>
       */}
      {
        title.map(function(a,i){
          return (
            <div className="list" key={i}>
            <h4 onClick={(e)=>{
          setModal(!modal);
          setTitle2(i); 
            }}>{title[i]} 
        <span onClick={(e)=> {
          e.stopPropagation()
          let copy = [...like];
          copy[i] = copy[i]+1;
          변경(copy)
        }}>👍</span> {like[i]}
          <button onClick={(e)=>{
            e.stopPropagation();
            let copy = [...title];
            copy.splice(i,1);
            setTitle(copy)
          }}>❌</button>
        </h4>
            <p>1월 22일 발행</p>
          </div>
          )
        })
      }

      <input onChange={(e)=>{setValue(e.target.value)}} />
      <button onClick={()=>{
        let copy = [...title];
        copy.unshift(value);
        setTitle(copy);
      }}>버튼임</button>
      {
        modal == false ? <Modal title={title} setTitle={setTitle} title2={title2} setTitle2 = {setTitle2}/> : null
      }
    </div>
  );
}

function Modal(props){
  return (
    <div className='modal'>
    <h4>{props.title[props.title2]}</h4>
    <p>날짜</p>
    <p>상세내용</p>
    <button onClick={()=>{
      let copy = [...props.title];
      copy = ['여자 코트 추천', '강남 우동 맛집', '파이썬독학'];
      props.setTitle(copy)
    }}>글수정</button>
  </div>
  )
}

export default App;
