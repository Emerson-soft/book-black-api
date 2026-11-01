import { IsNotEmpty, MaxLength } from "class-validator";

export class CustomerSeachDto {

    @IsNotEmpty()
    @MaxLength(255)
    name: string
}