import { useSelector } from 'react-redux'
import { RootState } from './redux/store'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import Layout from './components/common/Layout/Layout';
import Home from './pages/Home/Home';
import Join from './pages/Join/Join';

function App() {
  const {loggedIn} = useSelector((state:RootState)=> state.auth);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"
          element={!loggedIn ? <Navigate to={"/login"} replace /> : <Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/login" element={loggedIn ? <Navigate to="/" replace /> : <Login />} />
        <Route path='/join' element={<Join />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
