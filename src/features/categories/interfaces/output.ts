import { ApiProperty } from '@nestjs/swagger';
import {IsOptional, IsInt, Min, IsNotEmpty, IsString, Length} from 'class-validator';

export class CategoryViewModel {
    @ApiProperty({ example: 1 })
    id: number;

    @ApiProperty({ example: 'Ботинки' })
    title: string;

    @ApiProperty({ example: "Ботинки из натуральной кожи" })
    description: string;

}

export class FieldError {
    @ApiProperty({ description: 'Сообщение с объяснением ошибки для конкретного поля' })
    message: string;

    @ApiProperty({ description: 'Поле, в котором произошла ошибка' })
    field: string;

    constructor(message: string, field: string) {
        this.message = message;
        this.field = field;
    }
}

export class ApiErrorResult {
    @ApiProperty({
        type: FieldError,
        isArray: true,
        description: 'Список ошибок по полям'
    })
    errorsMessages: FieldError[];

    constructor(errorsMessages: FieldError[]) {
        this.errorsMessages = errorsMessages;
    }
}
