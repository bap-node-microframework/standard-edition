import { default as HelloRouter } from "./controllers/hello";
import { Module } from 'bap-node-microframework/core';

export default class HelloModule extends Module {
    registerControllers() {
        this.app.use(HelloRouter);
    }
}
