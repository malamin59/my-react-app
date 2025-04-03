import './Batsman'
import Counter from './Counter'
import './App.css'
import Batsman from './Batsman';
import { Suspense } from 'react';
import Posts from './Posts';
import Players from './Playrs';

// const fetchPosts = async () => {
//      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//      return res.json();
// }

function App() {

  //  const postsPromise = fetchPosts()

  function handleClink() {
    alert('I am Click')
  }
  function handleClink4() {
    alert('I am Click 45')
  }

  const handleClink3 = () => {
    alert("i am button 3")
  }


  return (
    <>

      <h1>Vite + React</h1>

      <Players></Players>
      
  {/* <Suspense fallback = {<h4> Post are coming...</h4>}> 
  <Posts postsPromise ={postsPromise}></Posts>

  </Suspense> */}
     


      <Batsman></Batsman>
   


    

      <Counter></Counter>


      <div className='button'>
        <button onClick={handleClink}>Click Me</button>
        <br />
        <button onClick={handleClink3}>Click Me</button>
        <br />
        <button onClick={function handleClink2() {
          alert("i am 2")
        }}>Click Me</button> <br />
        <button onClick={handleClink4}> Click Me 3</button>

      </div>
    </>
  )
}

export default App
