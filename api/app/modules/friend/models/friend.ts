import { Container } from 'bap-node-microframework/core';

export class FriendModel {
    static define(mongoose) {
        let friendSchema = {
            name: String
        };
        friendSchema = Container.get('mongoose').Schema(friendSchema);
        return Container.get('mongoose').model('Friend', friendSchema);
    }
}
