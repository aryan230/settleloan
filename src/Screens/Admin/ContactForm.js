import { onAuthStateChanged } from "firebase/auth";
import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import HeaderAdmin from "../../components/HeaderAdmin";
import { auth, db } from "../../firebase";

function ContactForm() {
  const [homeData, setHomeData] = useState([]);
  const collRefHome = collection(db, "contact-form");
  const [user, setUser] = useState(false);

  useEffect(() => {
    onSnapshot(collRefHome, (snapshot) => {
      let data = [];
      snapshot.docs.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      setHomeData(data);
    });
  }, []);
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
  return (
    <>
      {user ? (
        <>
          <HeaderAdmin />
          <section className="antialiased bg-gray-100 text-gray-600 px-4 h-screen">
            <div className="flex flex-col justify-center h-full">
              {/* Table */}
              <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                <header className="px-5 py-4 border-b border-gray-100 flex ">
                  <h2 className="font-semibold text-gray-800">
                    Contact Form's
                  </h2>
                </header>

                <div className="p-3">
                  <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                      <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                        <tr>
                          <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-left">Name</div>
                          </th>

                          <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-left">Email</div>
                          </th>
                          <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-left">
                              Message
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-sm divide-y divide-gray-100">
                        {homeData &&
                          homeData.map((data) => (
                            <tr>
                              <td className="p-2 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className="font-medium text-gray-800">
                                    {data.name}
                                  </div>
                                </div>
                              </td>{" "}
                              <td className="p-2 whitespace-nowrap">
                                <div className="text-left">{data.email}</div>
                              </td>
                              <td className="p-2 whitespace-nowrap">
                                <div className="text-left">{data.message}</div>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <h1>Not Authorized</h1>
      )}
    </>
  );
}

export default ContactForm;
