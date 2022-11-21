import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from "../users/entities/users.entity";
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<any>;
    login(user: User): Promise<{
        access_token: string;
        user: User;
    }>;
}
