import { Container } from 'bap-node-microframework/core';
import { Get, Post, Put, Delete, WithRouter, EventListener } from 'bap-node-microframework/decorators';
import { BaseControllerMongoose, ParamConverterMongoose } from 'bap-node-microframework-mongoose';
import friendForm from '../forms/friend';

@WithRouter()
export class FriendController extends BaseControllerMongoose {
    @Get('/friends', { authenticated: false })
    getAllFriends(req, res) {
        super.cget(res, "Friend");
    }

    @EventListener('api.friend.post')
    @Post('/friends', { authenticated: false })
    addFriend(req, res) {
        super.post("Friend", friendForm(req), req, res);
        Container.get('app').emit('test', req.body.name);
    }

    @ParamConverterMongoose('friend', { 'model': 'Friend', 'filterBy': { 'name': 'name' } })
    @Put('/friends/:name', { authenticated: false })
    updateFriend(req, res) {
        super.put(req.params.friend, friendForm(req), req, res);
    }

    @ParamConverterMongoose('friend', { 'model': 'Friend', 'filterBy': { 'name': 'name' } })
    @Delete('/friends/:name', { authenticated: false })
    removeFriend(req, res) {
        super.delete(res, req.params.friend);
    }
}

export default FriendController.router;
