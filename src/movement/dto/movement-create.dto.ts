import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class MovementCreateDto {
    @IsString()
    @IsNotEmpty()
    customer_id: number;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsNumber()
    @IsNotEmpty()
    amount: number;
}