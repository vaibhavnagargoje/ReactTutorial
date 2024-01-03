
import './App.css'
import FoodItems from './components/foodItems'
import 'bootstrap/dist/css/bootstrap.min.css'
import Error from './components/ErrerMessage'

function App() {
  let foods= ['Dal','vagetable','salad','milk','Ghee','Roti'];



  return (
    <>
    <h1 className='foodHeading'> Healthy Food list</h1>
    <Error foods={foods}></Error>
    <FoodItems foods={foods}></FoodItems>
    </>
  )
}

export default App
