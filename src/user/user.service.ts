import { Injectable } from '@nestjs/common';
import { PrismaService } from "../prisma/prisma.service";
import { CreateUserDTO } from "./dto/createUser.dto";
import { UpdateUserDTO } from "./dto/updateUser.dto";

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    async create(userDTO: CreateUserDTO) {
        return this.prisma.user.create(
            {
                data: userDTO
            }
        );
    }

    async update(id: number, userDTO: UpdateUserDTO) {
        return this.prisma.user.update(
            {
                where: {
                  id: id
                },
                data: userDTO
            }
        )
    }

    async delete(id: number) {
        return this.prisma.user.delete(
            {
                where: {
                    id: id
                }
            }
        )
    }

    async findById(id: number) {
        return this.prisma.user.findUnique(
            {
                where: {
                    id: id
                }
            }
        )
    }

    async findAll(){
        return this.prisma.user.findMany();
    }

    async findByEmail(email: string){
        return this.prisma.user.findUnique(
            {
                where: {
                    email: email
                }
            }
        )
    }
}
