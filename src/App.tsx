import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Layout from "./components/common/Layout/Layout";
import Home from "./pages/Home/Home";
import Join from "./pages/Join/Join";
import Profile from "./pages/User/Profile/Profile";
import User from "./pages/User/User";
import UserList from "./pages/User/UserList/UserList";
import Edit from "./pages/User/Edit/Edit";
import Create from "./pages/User/Create/Create";
import Chart from "./pages/Chart/Chart";
import Bar from "./pages/Chart/Bar/Bar";
import Line from "./pages/Chart/Line/Line";
import Diagram from "./pages/Chart/Diagram/Diagram";

function App() {
  const { loggedIn } = useSelector((state: RootState) => state.auth);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={!loggedIn ? <Navigate to={"/login"} replace /> : <Layout />}
        >
          <Route index element={<Home />} />
          <Route path="/user" element={<User />}>
            <Route index element={<Profile />} />
            <Route path="list" element={<UserList />} />
            <Route path="edit" element={<Edit />} />
            <Route path="create" element={<Create />} />
          </Route>
          <Route path="/chart" element={<Chart />}>
            <Route index element={<Bar />} />
            <Route path="line" element={<Line />} />
            <Route path="diagram" element={<Diagram />} />
          </Route>
        </Route>
        <Route
          path="/login"
          element={loggedIn ? <Navigate to="/" replace /> : <Login />}
        />
        <Route path="/join" element={<Join />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
