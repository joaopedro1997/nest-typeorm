import { Injectable } from '@nestjs/common';
import { CreateUsersDto } from "./dto/create-users.dto";
import { UpdateUsersDto } from "./dto/update-users.dto";
import { InjectRepository } from '@nestjs/typeorm'
import { User } from "./entities/users.entity";
import {EntityNotFoundError, Repository} from "typeorm";
import {Product} from "../products/entities/product.entity";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private UserRepo: Repository<User>
    ) {}

    async findOneOrFail(email: string): Promise<User | undefined> {
        const result = await this.UserRepo.findOneByOrFail({email});
        return result
    }

    create(createUsersDto: CreateUsersDto) {
        const user = this.UserRepo.create(createUsersDto);
        return this.UserRepo.save(user);
    }

    findAll() {
        return this.UserRepo.find();
    }

    findOne(id: number) {
        return this.UserRepo.findOneBy({id: id});
    }

    async update(id: number, updateUsersDto: UpdateUsersDto) {
        const updateResult = await this.UserRepo.update(id, updateUsersDto);
        if(!updateResult.affected) {
            throw new EntityNotFoundError(User, id)
        }
    }

    async remove(id: number) {
        const deleteResult = await this.UserRepo.delete({id});
        if(!deleteResult.affected) {
            throw new EntityNotFoundError(Product, id)
        }
    }
}