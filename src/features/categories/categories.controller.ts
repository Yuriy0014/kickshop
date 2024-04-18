import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Put} from '@nestjs/common';
import {
    ApiBody,
    ApiExtraModels,
    ApiOkResponse,
    ApiOperation,
    ApiParam,
    ApiResponse, ApiSecurity,
    ApiTags,
    getSchemaPath
} from '@nestjs/swagger';
import {ApiErrorResult, CategoryViewModel} from "./interfaces/output";
import {CreateCategoryDto, PatchCategoryDto, UpdateCategoryDto} from "./interfaces/input";

@ApiTags('categories')
@ApiExtraModels(CreateCategoryDto, PatchCategoryDto, UpdateCategoryDto)
@Controller('categories')
export class CategoriesController {

    @Get()
    @ApiOperation({summary: 'Получение списка всех категорий товаров'})
    @ApiOkResponse({
        description: 'Список микроциклов, созданных тренером',
        schema: {
            title: "Output schema",
            type: 'array',
            items: {
                $ref: getSchemaPath(CategoryViewModel)
            },
        },
    })
    @HttpCode(HttpStatus.OK)
    async getAllCategories(): Promise<void> {
        return
    }

    @Get(':id')
    @ApiOperation({summary: 'Получение конкретной категории товара по идентификатору'})
    @ApiParam({name: 'id', description: 'Идентификатор категории'})
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Категория найдена',
        type: CategoryViewModel,
    })
    @ApiResponse({
        status: HttpStatus.NOT_FOUND,
        description: 'Категория не найдена',
    })
    @HttpCode(HttpStatus.OK)
    async getCategoryById(@Param('id') id: string): Promise<void> {
        return
    }

    @Post()
    @ApiSecurity('basic')
    @ApiOperation({summary: 'Создание новой категории товаров'})
    @ApiBody({  type: () => CreateCategoryDto })
    @ApiResponse({
        status: HttpStatus.CREATED,
        description: 'Категория успешно создана',
        type: CategoryViewModel,
    })
    @ApiResponse({
        status: HttpStatus.BAD_REQUEST,
        description: 'Некорректные данные',
        type: ApiErrorResult,
    })
    @ApiResponse({
        status: HttpStatus.UNAUTHORIZED,
        description: 'Авторизация не пройдена',
    })
    @HttpCode(HttpStatus.CREATED)
    async createCategory(
        @Body() createCategoryDto: CreateCategoryDto): Promise<void> {
        return
    }

    @Put(':id')
    @ApiSecurity('basic')
    @ApiOperation({ summary: 'Обновление информации о категории товара по идентификатору' })
    @ApiParam({ name: 'id', description: 'Идентификатор категории' })
    @ApiBody({ type: UpdateCategoryDto })
    @ApiResponse({
        status: HttpStatus.NO_CONTENT,
        description: 'Информация о категории обновлена',
        type: CategoryViewModel,
    })
    @ApiResponse({
        status: HttpStatus.BAD_REQUEST,
        description: 'Некорректные данные',
        type: ApiErrorResult,
    })
    @ApiResponse({
        status: HttpStatus.UNAUTHORIZED,
        description: 'Авторизация не пройдена',
    })
    @ApiResponse({
        status: HttpStatus.NOT_FOUND,
        description: 'Категория не найдена',
    })
    @HttpCode(HttpStatus.CREATED)
    async updateCategory(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto): Promise<void> {
        return
    }

    @Delete(':id')
    @ApiSecurity('basic')
    @ApiOperation({ summary: 'Удаление категории товара по идентификатору' })
    @ApiParam({ name: 'id', description: 'Идентификатор категории', type: 'string' })
    @ApiResponse({
        status: HttpStatus.NO_CONTENT,
        description: 'Категория успешно удалена'
    })
    @ApiResponse({
        status: HttpStatus.UNAUTHORIZED,
        description: 'Авторизация не пройдена'
    })
    @ApiResponse({
        status: HttpStatus.NOT_FOUND,
        description: 'Категория не найдена'
    })
    @HttpCode(HttpStatus.NO_CONTENT)
    async deleteCategory(@Param('id') id: string): Promise<void> {
        return
    }

    @Patch(':id')
    @ApiSecurity('basic')
    @ApiOperation({ summary: 'Частичное обновление категории' })
    @ApiBody({ type: PatchCategoryDto })
    @ApiParam({ name: 'id', description: 'Идентификатор категории', type: 'string' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Категория обновлена',
        type: CategoryViewModel,
    })
    @ApiResponse({
        status: HttpStatus.BAD_REQUEST,
        description: 'Некорректные данные',
        type: ApiErrorResult,
    })
    @ApiResponse({
        status: HttpStatus.UNAUTHORIZED,
        description: 'Авторизация не пройдена'
    })
    @ApiResponse({
        status: HttpStatus.NOT_FOUND,
        description: 'Категория не найдена'
    })
    @HttpCode(HttpStatus.OK)
    async updateCategoryPartially(
        @Param('id') id: string,
        @Body() patchCategoryDto: PatchCategoryDto
    ): Promise<void> {
        return
    }

}
