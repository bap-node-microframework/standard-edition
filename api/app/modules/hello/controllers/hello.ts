import { Get, WithRouter } from 'bap-node-microframework/decorators';
import { BaseController } from 'bap-node-microframework/core';

@WithRouter()
export class HelloController extends BaseController {
    @Get('/', { authenticated: false })
    hoomePage(req, res) {
        res.send("It works! Go to <a href='http://localhost:3000/hello'>http://localhost:3000/hello</a> for a nice greeting!");
    }

    @Get('/hello', { authenticated: false })
    helloWithoutName(req, res) {
        res.json({
            hello: "world",
            next_step: "Go to http://localhost:3000/hello/yourName for a more personalized greeting!"
        });
    }

    @Get('/hello/:name', { authenticated: false })
    helloWithtName(req, res) {
        res.json({
            hello: req.params.name,
            next_step: "Nice! Go to http://localhost:3000/friends for your friends list!",
            if_you_feel_alone: "curl -H \"Content-Type: application/json\" -X POST -d '{\"name\": \"mark\", \"email\": \"mark@mark.com\" }' http://localhost:3000/friends",
            if_your_friend_has_inexplicably_changed_name: "curl -H \"Content-Type: application/json\" -X PUT -d '{\"name\": \"john\", \"email\": \"john@john.com\" }' http://localhost:3000/friends/mark",
            if_your_friend_has_stolen_your_girlfriend_or_boyfriend: "curl -H \"Content-Type: application/json\" -X DELETE http://localhost:3000/friends/john",
        });
    }
}

export default HelloController.router;
