import { Controller,Get,Req} from '@nestjs/common';

@Controller('cats')
export class CatsController {
    @Get()
    findAll():String {
        return "Request.body"
    }
}
