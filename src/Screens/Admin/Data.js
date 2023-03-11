import { onAuthStateChanged, signOut } from "firebase/auth";
import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import HeaderAdmin from "../../components/HeaderAdmin";
import { auth, db } from "../../firebase";

function Data() {
  const navigate = useNavigate();
  const [contactData, setContactData] = useState([]);
  const collRefContact = collection(db, "contact-form");
  const [form, setForm] = useState(false);
  const [formType, setFormType] = useState();
  const [user, setUser] = useState(false);
  const toggleForms = () => {
    if (form) {
      setForm(false);
    } else {
      setForm(true);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setUser(true);
        // ...
      } else {
        setUser(false);
      }
    });
  }, []);

  const signOutUser = async (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        navigate("/login");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <>
      {user ? (
        <>
          <HeaderAdmin />
          <section className="flex flex-wrap items-center -mx-3 font-sans px-4 mx-auto w-full lg:max-w-screen-lg sm:max-w-screen-sm md:max-w-screen-md pb-20 pt-52">
            {/* Column-1 */}
            <div className="px-3 w-full">
              <div className="mx-auto mb-8 max-w-lg text-center lg:mx-0 lg:max-w-md lg:text-left">
                <h2 className="mb-4 text-3xl font-bold text-left lg:text-4xl">
                  Welcome to
                  <span className="text-4xl text-blue-500 leading-relaxeds">
                    {" "}
                    Settle Loan's{" "}
                  </span>
                  Admin Pannel
                </h2>
              </div>
              <div className="text-center lg:text-left">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    signOutUser();
                  }}
                  className="curson-pointer block visible py-4 px-8 mb-4 text-xs font-semibold tracking-wide leading-none text-white bg-blue-500 rounded cursor-pointer sm:mr-3 sm:mb-0 sm:inline-block"
                >
                  Logout
                </button>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    toggleForms();
                  }}
                  className="block visible py-4 px-8 text-xs font-semibold leading-none bg-white rounded border border-solid cursor-pointer sm:inline-block border-slate-200 text-slate-500"
                >
                  {form ? "Close Forms" : "View Forms"}
                </a>
              </div>
            </div>
            {form && (
              <div className="w-full flex items-center justify-center mt-20">
                {" "}
                <div
                  className="slider-2__btn wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay="0.5s"
                >
                  <Link
                    to="/admin/home"
                    className="main-btn tp-btn-hover alt-color"
                  >
                    <span>Home Form's</span>
                    <i className="fal fa-chevron-right text-black ml-20" />
                    <b />
                  </Link>
                </div>
                <div
                  className="slider-2__btn wow tpfadeUp ml-20"
                  data-wow-duration=".9s"
                  data-wow-delay="0.5s"
                >
                  <Link
                    to="/admin/contact"
                    className="main-btn tp-btn-hover alt-color"
                  >
                    <span>Contact Form's</span>
                    <i className="fal fa-chevron-right text-black ml-20" />
                    <b />
                  </Link>
                </div>
              </div>
            )}

            {/* Column-2 */}
          </section>
        </>
      ) : (
        <h1>Not Authorized</h1>
      )}
    </>
  );
}

export default Data;
