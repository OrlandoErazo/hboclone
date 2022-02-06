import Head from "next/head";
import { useStateContext } from '../components/HBOProvider'

export default function CreateUser() {
  const globalState = useStateContext();
  console.log(globalState)
  return (
    <div>
      <div className="create-user">
        <div className="create-user__top">
          <div className="create-user__logo"></div>
          <span className="create-user__title">Create Profile</span>
        </div>

        <div className="create-user__form">
          <img
            className="create-user__user-img"
            src={globalState.defaultUserImg}
          ></img>
          <div className="create-user__input-group">
            <label>Name</label>
            <input value={globalState.user} onChange={globalState.createUserAction} type="text" className="create-user__inputText" />
            <div className="create-user__colors">
              <div
                className="create-user__color create-user__color--active"
                style={{
                  background: "rgb(2,27,64)",
                  background:
                    "linear-gradient(135deg, rgba(2,27,64,1) 11%, rgba(255,104,0,1) 100%)"
                }}
              />
              <div
                className="create-user__color "
                style={{
                  background: "rgb(2,27,64)",
                  background:
                    "linear-gradient(135deg, rgba(2,27,64,1) 11%, rgba(30,135,56,1) 100%)",
                }}
              />
              <div
                className="create-user__color"
                style={{
                  background: "rgb(2,27,64)",
                  background:
                    "linear-gradient(135deg, rgba(2,27,64,1) 11%, rgba(135,30,66,1) 100%)",
                }}
              />
              <div
                className="create-user__color"
                style={{
                  background: "rgb(2,27,64)",
                  background:
                    "linear-gradient(135deg, rgba(2,27,64,1) 11%, rgba(18,51,255,1) 100%)",
                }}
              />
              <div
                className="create-user__color"
                style={{
                  background: "rgb(2,27,64)",
                  background:
                    "linear-gradient(135deg, rgba(2,27,64,1) 11%, rgba(235,255,18,1) 100%)",
                }}
              />
            </div>
          </div>
        </div>
      <div className="create-user__buttons">
        <button className="create-user__cancel">Cancel</button>
        <button className="create-user__save">Save</button>
      </div>
      </div>
    </div>
  );
}
