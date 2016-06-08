import { default as FriendRouter } from "./controllers/friend";
import { Module, Container } from 'bap-node-microframework/core';
import { FriendModel } from './models/friend';

export default class FriendModule extends Module {
    registerControllers() {
        this.app.use(FriendRouter);
    }

    registerModels() {
        Container.registerModel('Friend', FriendModel.define(Container.get('mongoose')));
    }
}
