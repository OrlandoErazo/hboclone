import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="login-user">
        <div className="login-user__top">
          <div className="login-user__logo"></div>
          <span className="login-user__title">
            Who is Watching?
          </span>
        </div>

<div className="login-user__form">
  <div className="login-user__user-box">
    <img className="login-user__user-img" src="https://images.generated.photos/0nDYZvW2PyRknrz8QtVclfVvXVllxOnNx1t-BGnNve0/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzI1Mzc0LmpwZw.jpg"></img>
    <div className="login-user__user-name">Bryant</div>
  </div>
</div>
<div className="login-user__buttons">
  <button className="login-user__adult">Add Adult</button>
  <button className="login-user__kid">Add Kid</button>
</div>
      </div>
    </div>
  );
}
