import { IsNotEmpty, isNotIn, IsNotIn, isNumber, IsNumber, isNumberString, IsNumberString} from 'class-validator';

export class CreateProductDto {
    @IsNotEmpty({message: 'preco é obrigatório'})
    @IsNumber({},{message: 'preco inválido'})
    price: number

    @IsNotEmpty({message: 'nome é obrigatório'})
    name: string
}
