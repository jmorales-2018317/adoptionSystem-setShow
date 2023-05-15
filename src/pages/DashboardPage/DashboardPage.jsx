import React, { useState } from "react";
import "./DashboardStyle.css";
import { Outlet, Link } from "react-router-dom";
import { AnimalsPage } from "../AnimalsPage";
import { AddAnimal } from "../AddAnimal";
import { AppointmentPage } from "../AppointmentPage";
import { useContext } from "react";
import { AuthContext } from "../../Index";
import { useNavigate } from "react-router-dom";

export const DashboardPage = () => {
  const navigate = useNavigate();
  const { dataUser } = useContext(AuthContext);
  const isAdmin = false;
  const [view, setView] = useState({
    showUser: true,
    showAppointment: false,
    showAnimal: false,
  });

  const logOut = () => {
    //Limpiarlo todo
    localStorage.clear();
    navigate("/");
    /*Limpiar solo uno o varios datos
        localStorage.removeItem('token')*/
  };

  const viewChange = (view1, view2, view3) => {
    setView({
      showAnimal: view1,
      showAppointment: view2,
      showUser: view3,
    });
  };

  return (
    <>
      <div id="id">
        <section id="sidebar">
          <a className="brand ms-3">
            {" "}
            <span className="text">Adoption System</span>{" "}
          </a>
          <ul className="side-menu top">
            <li className="active">
              <button>
                <span className="text">Control panel</span>
              </button>
            </li>
            <li>
              <button onClick={() => viewChange(true, false, false)}>
                <span className="text">ANIMALS</span>
              </button>
            </li>

            <li>
              <button onClick={() => viewChange(false, true, false)}>
                <span className="text">APPOINTMENTS</span>
              </button>
            </li>
          </ul>
          <ul className="side-menu top">
            <li>
              <button>
                <span className="text">
                  Welcome {dataUser.name}, {dataUser.role}
                </span>
              </button>
            </li>
            <li>
              <button>
                <span className="text">Settings</span>
              </button>
            </li>
            <li>
              <button onClick={() => logOut()}>
                <span className="text">LogOut</span>
              </button>
            </li>
          </ul>
        </section>
        <section id="content">
          <nav>
            <a className="profile"></a>
          </nav>
          {isAdmin ? (
            <main>
              <div className="head-title">
                <div className="left">
                  <h1>Control panel Admin</h1>
                </div>
              </div>
              <ul className="box-info">
                <li>
                  <span className="text">
                    <h3>USER</h3>
                  </span>
                </li>
                <li>
                  <span className="text">
                    <h3>ANIMALS</h3>
                  </span>
                </li>
                <li>
                  <span className="text">
                    <h3>APPOINTMENT</h3>
                  </span>
                </li>
                <li>
                  <span className="text">
                    <h3>REGISTER USER</h3>
                  </span>
                </li>
              </ul>
            </main>
          ) : (
            <div>
              {view.showUser ? (
                <>
                  <main>
                    <div className="left binding color">
                      <h1>Control Users</h1>
                    </div>
                    <hr />
                    <AddAnimal></AddAnimal>
                  </main>
                </>
              ) : view.showAnimal ? (
                <>
                  <main>
                    <div className="left binding color">
                      <h1>Control Animals</h1>
                    </div>
                    <hr />
                    <AnimalsPage></AnimalsPage>
                  </main>
                </>
              ) : (
                <>
                  <main>
                    <div className="left binding color">
                      <h1>Control appointments</h1>
                    </div>
                    <hr />
                    <AppointmentPage></AppointmentPage>
                  </main>
                </>
              )}
            </div>
          )}
        </section>
      </div>
    </>
  );
};
