import { Users1Service } from './users1.service';
import { CreateUsers1Dto } from './dto/create-users1.dto';
import { UpdateUsers1Dto } from './dto/update-users1.dto';
export declare class Users1Controller {
    private readonly users1Service;
    constructor(users1Service: Users1Service);
    create(createUsers1Dto: CreateUsers1Dto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateUsers1Dto: UpdateUsers1Dto): string;
    remove(id: string): string;
}
