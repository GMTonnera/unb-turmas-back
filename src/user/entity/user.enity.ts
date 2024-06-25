import { User } from '@prisma/client'
import { IsBoolean, IsDate, IsEmail, IsNotEmpty, IsNumber, IsString } from "@nestjs/class-validator";

export class UserEntity implements User{
    @IsNumber()
    id: number

    @IsNotEmpty()
    @IsString()
    name: string

    @IsString()
    @IsNotEmpty()
    nickname: string

    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsNotEmpty()
    @IsNumber()
    course: string

    @IsNotEmpty()
    @IsString()
    password: string

    @IsNotEmpty()
    @IsBoolean()
    adm: boolean

    @IsDate()
    createdAt: Date

    @IsDate()
    updatedAt: Date
}