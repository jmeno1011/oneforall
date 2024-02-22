import { useSelector } from "react-redux"
import { RootState } from "../../../redux/store"

export default function UserList() {
  const {userList} = useSelector((state:RootState)=> state.user);
  console.log(userList);
  
  return (
    <div>UserList</div>
  )
}
