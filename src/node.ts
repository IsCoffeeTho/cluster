import { EventEmitter } from "node:events";

export type nodeOptions = {
	address?: string,
	port?: string | number,

};

const nodeOptionsDefault : nodeOptions = {
	address: "::",
	port: 4040
};

export default class node extends EventEmitter {
	constructor(opt: nodeOptions) {
		super();
	}


}