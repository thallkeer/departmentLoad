import React from "react";
import SimpleEntityList from "../components/SimpleEntity/SimpleEntityList";

export const Positions = props => {
  return <SimpleEntityList url="position" entityName="Position" />;
};

export const Disciplines = props => {
  return <SimpleEntityList url="discipline" entityName="Discipline" />;
};

export const GroupStudies = props => {
  return <SimpleEntityList url="groupStudy" entityName="Group Study" />;
};
