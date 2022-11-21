import { AuthService } from './auth/auth.service';
import { AppService } from './app.service';
export declare class AppController {
    private authService;
    private appService;
    constructor(authService: AuthService, appService: AppService);
    getHello(): string;
    login(req: any): Promise<{
        access_token: string;
        user: import("./users/entities/users.entity").User;
    }>;
}
