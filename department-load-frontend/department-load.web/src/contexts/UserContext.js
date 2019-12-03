import React from "react";
import { UserState } from "../hooks/useUser";

export const UserContext = React.createContext(new UserState());
