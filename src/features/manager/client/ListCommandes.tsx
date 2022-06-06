import React, { useState } from 'react';
import { Client, Commande, commande0 } from 'tools/types';
import List from 'widgets/List';

type CommandesProp = {
	client: Client;
	refetchParent: () => void;
};
var refetch = () => {};
const ListCommandes = ({ client, refetchParent }: CommandesProp) => {
	const [commande, setCommande] = useState(commande0);
	const init = (c: Commande, r: () => void) => {
		setCommande(c);
		refetch = r;
	};
	return (
		<>
			<List
				avatar={false}
				body={[]}
				detailObjects={[]}
				displayedIncheck={{ css: "", msg: "", tab: [] }}
				emptyObject={commande0}
				init={init}
				mal={true}
				path={""}
				rectoVerso={false}
				title={""}
			/>
		</>
	);
};

export default ListCommandes;
