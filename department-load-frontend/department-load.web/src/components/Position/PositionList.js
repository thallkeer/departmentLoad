import React, { useEffect, useReducer } from "react";
import { positionReducer } from "../../reducers/positions";
import { getPositions, deletePosition } from "../../actions/positions";
import { Container, Table } from "react-bootstrap";
import { ActionsContext } from "../../context/TeachersListContext";
// import useModal from "../../hooks/useModal";
import ActionsButtons from "../ActionsButtons";

const initialState = {
  loading: false,
  positions: []
};

export default function PositionList() {
  const [positionsState, dispatch] = useReducer(positionReducer, initialState);

  useEffect(() => {
    getPositions(dispatch);
  }, []);

  const editPos = id => {};

  const deletePos = id => {
    deletePosition(dispatch, id);
  };

  const renderPositions = () => {
    return positionsState.positions.map(p => (
      <tr key={p.positionId}>
        <td>{p.positionName}</td>
        <td>
          <ActionsContext.Provider
            value={{
              onDelete: deletePos,
              onEdit: editPos,
              id: p.positionId
            }}
          >
            <ActionsButtons />
          </ActionsContext.Provider>
        </td>
      </tr>
    ));
  };

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>Position Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{renderPositions()}</tbody>
      </Table>
    </Container>
  );
}
