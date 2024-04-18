import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);


    const options = new DocumentBuilder()
        .setTitle('KickShoes')
        .setDescription('The KickShoes API description')
        .setVersion('1.0')
        .addBasicAuth()
        .addTag('categories')
        .build();
    const document = SwaggerModule.createDocument(app, options);

    SwaggerModule.setup('api', app, document, {
        swaggerOptions: {
            // ...
            // Добавляем свойства для указания на CDN unpkg
            customJs: 'https://unpkg.com/swagger-ui-dist@5.11.0/swagger-ui-bundle.js',
            customCss: 'https://unpkg.com/swagger-ui-dist@5.11.0/swagger-ui.css',
        },
        // Путь для загрузки файла swagger-ui-standalone-preset.js
        customJs: 'https://unpkg.com/swagger-ui-dist@5.11.0/swagger-ui-standalone-preset.js',
    });


    await app.listen(3000);
}

void bootstrap();
