import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDTO } from "./dto/createUser.dto";
import { UpdateUserDTO } from "./dto/updateUser.dto";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get(':id')
    async findUserById(@Param('id') id: string) {
        return this.userService.findById(parseInt(id))
    }

    @Get(':email')
    async findUserByEmail(@Param('email') email: string) {
        return this.userService.findByEmail(email)
    }

    @Get()
    async findAllUsers() {
        return this.userService.findAll();
    }

    @Post()
    async createUser(@Body() dto: CreateUserDTO) {
        return this.userService.create(dto);
    }

    @Patch(':id')
    async updateUser(@Param('id') id: string, @Body() dto: UpdateUserDTO) {
        return this.userService.update(parseInt(id), dto);
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string) {
        return this.userService.delete(parseInt(id));
    }
}
