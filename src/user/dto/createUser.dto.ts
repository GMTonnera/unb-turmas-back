import { UserEntity } from "../entity/user.enity";
import { PickType } from "@nestjs/swagger";

export class CreateUserDTO extends PickType(
    UserEntity,
    [
        'name',
        'nickname',
        'email',
        'course',
        'password',
        'adm'
    ]
) {}