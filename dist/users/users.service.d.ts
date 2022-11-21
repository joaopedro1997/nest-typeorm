import { CreateUsersDto } from "./dto/create-users.dto";
import { UpdateUsersDto } from "./dto/update-users.dto";
import { User } from "./entities/users.entity";
import { Repository } from "typeorm";
export declare class UsersService {
    private UserRepo;
    constructor(UserRepo: Repository<User>);
    findOneOrFail(email: string): Promise<User | undefined>;
    create(createUsersDto: CreateUsersDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    update(id: number, updateUsersDto: UpdateUsersDto): Promise<void>;
    remove(id: number): Promise<void>;
}
