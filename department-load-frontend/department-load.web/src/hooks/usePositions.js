import { useState, useEffect } from "react";
import axios from "../axios/axios";

export const usePositions = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    axios.get("position/").then(result => {
      setPositions(result.data);
    });
  }, []);

  const addPosition = position => {
    console.log(position);
    axios.post("position/add", { position }).then(res => {
      console.log(res);
      console.log(res.data);
      setPositions([...positions, res.data]);
    });
  };

  const updatePosition = position => {
    axios.put("position/update", { position }).then(res => {
      console.log(res);
      console.log(res.data);
      setPositions(
        positions.map(p =>
          p.positionId === position.positionId ? position : p
        )
      );
    });
  };

  const deletePosition = id => {
    axios.delete(`/position/${id}`).then(res => {
      console.log(res);
      setPositions(positions.filter(t => t.positionId !== id));
    });
  };

  return positions;
};
