import { Request, Response } from 'express';
import Controller from '../utils/controller.decorator';
import { Get, Post } from '../utils/handlers.decorator';

@Controller('/cats')
export default class CatController {
    private cats: Array<{name: string}> = [
        {name: 'Tom'},
        {name: 'Kitty'}
    ];

    @Get('')
    public index(req: Request, res: Response) {
        res.json({cats: this.cats});
    }

    @Post('')
    public add(req: Request, res: Response) {
        this.cats.push(req.body);
        res.status(204).json();
    }

    @Get('/:name')
    public findByName(req: Request, res: Response) {
        const { name } = req.params;
        const foundCat = this.cats.find(c => c.name === name);
        if (!foundCat) {
            return res.status(404).json({message: 'cat not found'});
        }

        return res.status(200).json({cat: foundCat});
    }
}