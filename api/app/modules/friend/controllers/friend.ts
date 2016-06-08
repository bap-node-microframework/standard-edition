import { Get, Post, Put, Delete, WithRouter } from 'bap-node-microframework/decorators';
import { BaseControllerMongoose, ParamConverterMongoose } from 'bap-node-microframework-mongoose';
import friendForm from '../forms/friend';

@WithRouter()
export class FriendController extends BaseControllerMongoose {
    @Get('/friends', { authenticated: false })
    getAllFriends(req, res) {
        super.cget(res, "Friend");
    }

    @Post('/friends', { authenticated: false })
    addName(req, res) {
        super.post("Friend", friendForm(req), req, res);
    }

    @ParamConverterMongoose('friend', { 'model': 'Friend', 'filterBy': { 'name': 'name' } })
    @Put('/friends/:name', { authenticated: false })
    changeFriendName(req, res) {
        super.put(req.params.friend, friendForm(req), req, res);
    }

    @ParamConverterMongoose('friend', { 'model': 'Friend', 'filterBy': { 'name': 'name' } })
    @Delete('/friends/:name', { authenticated: false })
    removeFriend(req, res) {
        super.delete(res, req.params.friend);
    }
}

export default FriendController.router;
