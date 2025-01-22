/* eslint-disable */ 
// warning메세지 없애는 기능

import { useState } from 'react';
import './App.css';

function App() {
  let [title, setTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬독학']);
  let [like, 변경] = useState([0,0,0]);

  let [modal, setModal] = useState(true);


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
            <h4 onClick={()=>{
          setModal(!modal);
            }}>{title[i]} 
        <span onClick={()=> {
          let copy = [...like];
          copy[i] = copy[i]+1;
          변경(copy)
        }}>👍</span> {like[i]}</h4>
            <p>1월 22일 발행</p>
          </div>
          )
        })
      }

      {
        modal == false ? <Modal title={title} setTitle={setTitle}/> : null
      }
      
    </div>
  );
}

function Modal(props){
  return (
    <div className='modal'>
    <h4>{props.title[0]}</h4>
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
