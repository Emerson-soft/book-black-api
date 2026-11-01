import { IsNotEmpty, MaxLength } from "class-validator";

export class CustomerDto {

    @IsNotEmpty()
    @MaxLength(255)
    name: string
}