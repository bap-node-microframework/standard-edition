import * as express from "express";
import { PingModule } from "bap-node-microframework-ping-module";
import { KernelInterface } from 'bap-node-microframework/core';
import HelloModule from './modules/hello';
import FriendModule from './modules/friend';

export class Kernel extends KernelInterface {

    boot(app, io: SocketIO.Server) {
        new PingModule(app, io);
        new HelloModule(app, io);
        new FriendModule(app, io);
    }
}
