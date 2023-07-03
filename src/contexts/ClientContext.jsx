import { useEffect } from "react";
import { createContext, useState } from "react";

export let ClientContext = createContext({});

export const ClientContextProvider = ({ children }) => {
  const [loginInfo, setLoginInfo] = useState(
    !sessionStorage.getItem("loginInfo") ? {} : JSON.parse(sessionStorage.getItem("loginInfo"))
  );

  const [projects, setProjects] = useState(
    !sessionStorage.getItem("projects") ? {} : JSON.parse(sessionStorage.getItem("projects"))
  );

  const [bookings, setBookings] = useState(
    !sessionStorage.getItem("bookings") ? {} : JSON.parse(sessionStorage.getItem("bookings"))
  );
  const [pic, setPic] = useState(
    !sessionStorage.getItem("pic") ? {} : JSON.parse(sessionStorage.getItem("pic"))
  );

  const updateLoginInfo = (info) => {
    sessionStorage.setItem("loginInfo", JSON.stringify(info));
    setLoginInfo(info);
  };

  const updateProjects = (info) => {
    sessionStorage.setItem("projects", JSON.stringify(info));
    setProjects(info);
  };

  const updateBookings = (info) => {
    sessionStorage.setItem("bookings", JSON.stringify(info));
    setBookings(info);
  };

  const updatePicture = (info) => {
    sessionStorage.setItem("pic", JSON.stringify(info));
    setPic(info);
  };

  useEffect(() => {
    updateLoginInfo(null);
    updateProjects(null);
    updatePicture(null);
    updateBookings(null);
  },[])
  

  return (
    <ClientContext.Provider value={{ loginInfo, updateLoginInfo, updateProjects, projects, updateBookings, bookings, updatePicture, pic }}>
      {children}
    </ClientContext.Provider>
  )
}