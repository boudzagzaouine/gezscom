import React, { useState } from "react";
import ListUtilisateur from "components/profile/ListUtilisateur";
import { Users } from "tools/types";
import NouvelUtilisateur from "components/profile/NouvelUtilisateur";
import ConsulterUtilisateur from "components/profile/ConsulterUtilisateur";

function GestionUtilisateur(): JSX.Element {
  const [estAjt, setEstAjt] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const [estModifier, setModifier] = useState(false);
  const [username, setUsername] = useState("");

  return (
    <>
      {!estAjt && !showUser && (
        <ListUtilisateur
          setEstAjt={setEstAjt}
          setShowUser={setShowUser}
          setModifier={setModifier}
          setUsername={setUsername}
        />
      )}
      {estAjt && !showUser && <NouvelUtilisateur setEstAjt={setEstAjt} />}
      {showUser && !estAjt && (
        <ConsulterUtilisateur
          setShowUser={setShowUser}
          estModifier={estModifier}
          setModifier={setModifier}
          username={username}
        />
      )}
    </>
  );
}

export default GestionUtilisateur;
