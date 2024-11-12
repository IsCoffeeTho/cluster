export type bindOptions = {
	address?: string,
	port?: string | number,
};

export type clientOptions = {
	server?: bindOptions
} & bindOptions;

const serverBindDefault : bindOptions = {
	address: "::40",
	port: 4040
}

const clientOptionDefaults : clientOptions = {
	address: "::",
	port: 4040,
	server: serverBindDefault
};

export type serverOptions = {
	maxClusters?: number,

} & bindOptions;

const serverOptionDefaults = {
	...serverBindDefault,
	maxClusters: 128
}

export class client {
	constructor(opt: serverOptions) {
		var cfg: clientOptions = {};
		Object.assign(cfg, clientOptionDefaults);
		
	}
}

export class server {
	constructor(opt: serverOptions) {

	}

	setMaxClusters(n: number) {
		if (n < 1)
			throw new RangeError(`MaxClusters cannot be less than 1.`);
	}
}