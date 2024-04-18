import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';

export class UpdateCategoryDto {
    @ApiProperty({
        description: 'Название категории',
        minLength: 4,
        maxLength: 20,
        example: 'Ботинки кожаные'
    })
    @IsNotEmpty()
    @IsString()
    @Length(4, 20)
    readonly name: string;

    @ApiProperty({
        description: 'Описание категории',
        minLength: 4,
        maxLength: 300,
        example: 'Ботинки из натуральной кожи от производителя'
    })
    @IsNotEmpty()
    @IsString()
    @Length(4, 300)
    readonly description: string;
}

export class CreateCategoryDto {
    @ApiProperty({
        description: 'Название категории',
        minLength: 4,
        maxLength: 20,
        example: 'Кеды непромокаемые'
    })
    @IsNotEmpty()
    @IsString()
    @Length(4, 20)
    readonly name: string;

    @ApiProperty({
        description: 'Описание категории',
        minLength: 4,
        maxLength: 300,
        example: 'Кеды непромокаемые от производителя'
    })
    @IsNotEmpty()
    @IsString()
    @Length(4, 300)
    readonly description: string;
}

export class PatchCategoryDto {
    @ApiProperty({
        description: 'Название категории',
        minLength: 4,
        maxLength: 20,
        example: 'Лапти славянские',
        required: false
    })
    @IsOptional()
    @IsString()
    @Length(4, 20)
    readonly name?: string;

    @ApiProperty({
        description: 'Описание категории',
        minLength: 4,
        maxLength: 300,
        example: 'Лапти славянские из бересты от производителя',
        required: false
    })
    @IsOptional()
    @IsString()
    @Length(4, 300)
    readonly description?: string;
}
