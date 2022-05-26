import React from "react";
type ArticlesClientsProps = {
  idClient: string;
};
const ArticlesClients = ({ idClient }: ArticlesClientsProps) => {
  return (
    <div>
      <h1>ArticlesClients idclient = {idClient}</h1>
    </div>
  );
};

export default ArticlesClients;
