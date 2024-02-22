import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userList, userRowList } from "../../lib/user";
import { settingUserRowlist, settingUserlist } from "../../redux/features/user";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(settingUserlist(userList));
    dispatch(settingUserRowlist(userRowList));
  }, [dispatch]);

  return <div>Home</div>;
}
