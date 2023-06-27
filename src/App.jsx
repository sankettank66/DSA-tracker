
import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import Problems from './pages/Problems'
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Array from "./pages/Topics/Array";
import Matrix from "./pages/Topics/Matrix";
import String from "./pages/Topics/String";
import SearchSort from "./pages/Topics/SearchSort";
import LinkedList from "./pages/Topics/LinkedList";
import BinaryTrees from "./pages/Topics/BinaryTrees";
import BST from "./pages/Topics/BST";
import Greedy from "./pages/Topics/Greedy";
import Backtracking from "./pages/Topics/Backtracking";
import StacksQueues from "./pages/Topics/StacksQueues";
import Heap from "./pages/Topics/Heap";
import Graph from "./pages/Topics/Graph";
import Trie from "./pages/Topics/Trie";
import DynamicProgramming from "./pages/Topics/DynamicProgramming";
import BitManipulation from "./pages/Topics/BitManipulation";


// import data from './assets/450DSAFinal'
function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/problems' element={<Problems />} />
        <Route path='/aboutUs' element={<AboutUs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/array' element={<Array />} />
        <Route path='/matrix' element={<Matrix />} />
        <Route path='/string' element={<String />} />
        <Route path='/searchsort' element={<SearchSort />} />
        <Route path='/linkedlist' element={<LinkedList/>}/>
        <Route path='/binarytrees' element={<BinaryTrees/>}/>
        <Route path='/bst' element={<BST/>}/>
        <Route path='/greedy' element={<Greedy/>}/>
        <Route path='/backtracking' element={<Backtracking/>}/>
        <Route path='/stacksqueues' element={<StacksQueues/>}/>
        <Route path='/heap' element={<Heap/>}/>
        <Route path='/graph' element={<Graph/>}/>
        <Route path='/trie' element={<Trie/>}/>
        <Route path='/dynamicprogramming' element={<DynamicProgramming/>}/>
        <Route path='/bitmanipulation' element={<BitManipulation/>}/>


      </Routes>
    </>
  )

}

export default App
