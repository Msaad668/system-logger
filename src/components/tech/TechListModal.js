import React, { useEffect, useState } from "react";
import TechItem from "./TechItem";

const TechListModal = () => {
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTechs();
  }, []);

  const getTechs = async () => {
    setLoading(true);
    const res = await fetch("/techs");
    const data = await res.json();

    setTechs(data);
    setLoading(false);
  };

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <ul className="collection with-header">
          <li className="collection-header">
            <h4>all technicians</h4>
          </li>
          {!loading &&
            techs.map((tech) => <TechItem key={tech.id} tech={tech} />)}
        </ul>
      </div>
      <div className="modal-footer">
        <a href="#!" className="modal-close waves-effect blue btn">
          close
        </a>
      </div>
    </div>
  );
};

export default TechListModal;
