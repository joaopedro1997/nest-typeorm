import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import {User} from "../users/entities/users.entity";
import {compareSync} from "bcrypt";

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) {}

    async validateUser(email: string, password: string): Promise<any> {
        let user: User

        try {
            user = await this.usersService.findOneOrFail(email);
        } catch (error) {
            return null
        }

        console.log(user)

        const isPasswordValid = compareSync(password, user.password);

        if(!isPasswordValid) return null

        return user;
    }

    async login(user: User) {
        const payload = { sub: user.id ,email: user.email, name: user.name};
        return {
            access_token: this.jwtService.sign(payload),
            user: user
        };
    }
}