import './Batsman'
import Counter from './Counter'
import './App.css'
import Batsman from './Batsman'

function App() {


  function handleClink(){
    alert('I am Click')
  }
  function handleClink4(){
    alert('I am Click 45')
  }

  const handleClink3 =() => {
    alert("i am button 3") 
  }


  return (
    <>
     
      <h1>Vite + React</h1>
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
