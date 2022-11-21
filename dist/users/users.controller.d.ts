import { UsersService } from './users.service';
import { CreateUsersDto } from './dto/create-users.dto';
import { UpdateUsersDto } from './dto/update-users.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUsersDto: CreateUsersDto): Promise<import("./entities/users.entity").User>;
    findAll(): Promise<import("./entities/users.entity").User[]>;
    findOne(id: string): Promise<import("./entities/users.entity").User>;
    update(id: string, updateUsersDto: UpdateUsersDto): Promise<void>;
    remove(id: string): Promise<void>;
}
