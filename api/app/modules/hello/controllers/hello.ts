import { Get, WithRouter } from 'bap-node-microframework/decorators';
import { BaseController } from 'bap-node-microframework/core';

@WithRouter()
export class HelloController extends BaseController {
    @Get('/hello', { authenticated: false })
    helloWithoutName(req, res) {
        res.json({
            hello: "world"
        });
    }

    @Get('/hello/:name', { authenticated: false })
    helloWithtName(req, res) {
        res.json({
            hello: req.params.name
        });
    }
}

export default HelloController.router;
