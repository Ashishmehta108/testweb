import { createContext, useContext } from "react";

const Authcontext = createContext();

export const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <Authcontext.Provider value={{ user, setUser }}>
      {children}
    </Authcontext.Provider>
  );
};

export const useAuth = () => {
  return useContext(Authcontext);
};
