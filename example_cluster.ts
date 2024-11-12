import libcluster from ".";

const Master = new libcluster.delegator();

const psuedoNodes = [0,1,2,3].map((v, i, a) => {
	return new libcluster.node({
		address: `127.0.0.${i+2}`,
		port: 4040
	});
});