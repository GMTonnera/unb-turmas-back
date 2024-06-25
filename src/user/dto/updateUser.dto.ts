import { PartialType, PickType } from "@nestjs/swagger";
import { UserEntity } from "../entity/user.enity";

export class UpdateUserDTO extends PartialType(
    PickType(
       UserEntity, [
        'nickname',
        'course',
        'email',
        'password'
    ])
) {}