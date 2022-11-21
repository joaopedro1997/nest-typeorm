import {IsNotEmpty, IsNumber, IsString} from "class-validator";

export class CreateUsersDto {
    @IsNotEmpty({message: 'nome é obrigatório'})
    @IsString({message: 'nome deve ser uma string'})
    name: string

    @IsString()
    email: string

    @IsNotEmpty({message: 'senha não pode ser vazia'})
    password: string

}
