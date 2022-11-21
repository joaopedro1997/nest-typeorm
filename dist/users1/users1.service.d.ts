import { CreateUsers1Dto } from './dto/create-users1.dto';
import { UpdateUsers1Dto } from './dto/update-users1.dto';
export declare class Users1Service {
    create(createUsers1Dto: CreateUsers1Dto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateUsers1Dto: UpdateUsers1Dto): string;
    remove(id: number): string;
}
