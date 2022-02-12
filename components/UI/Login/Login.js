import Head from "next/head";
import { useState, useEffect } from "react";
import { useStateContext } from "../../HBOProvider";
import { useRouter } from "next/router";
import ls from "local-storage";
import { useMounted } from '../../Hooks/useMounted';

const Login = () => {
  const globalState = useStateContext();
  const router = useRouter();
  const [loadingUsers, setLoadingUsers] = useState(false);
  let users = ls("users") !== null ? ls("users") : [];
  let {hasMounted} = useMounted();

  useEffect(() => {
    if (users < 1) {
      setLoadingUsers(false);
    }
    console.log("load effect", users);
  }, []);
  // router.push('/');

  console.log("declared users", users);
  const selectUser = (id) => {
    console.log(id)
    ls("activeUID", id);
    router.push('/');
  };
  const showUsers = () => {
    if (!loadingUsers) {
      return users.map((user) => {
        return (
          <div onClick={() => selectUser(user.id)} className="login-user__user-box" key={user.id}>
            <img className="login-user__user-img"
              src="https://images.generated.photos/0nDYZvW2PyRknrz8QtVclfVvXVllxOnNx1t-BGnNve0/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzI1Mzc0LmpwZw.jpg" />
            <div className="login-user__user-name">{user.user}</div>
          </div>
        );
      });
    }
  };
  const createUser =() => {
    router.push('/')
  }

  return (
    <div className="login-user">
      <div className="login-user__top">
        <div className="login-user__logo"></div>
        <span className="login-user__title">Who is Watching?</span>
      </div>

      <div className="login-user__form">
      {hasMounted ? showUsers() : '' }
      {/* {showUsers()} */}
        </div>
      <div className="login-user__buttons">
        <button className="login-user__kid" onClick={createUser}>Create User</button>
       
      </div>
    </div>
  );
};

export default Login;
