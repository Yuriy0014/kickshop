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
    SwaggerModule.setup('api', app, document);

    await app.listen(3000);
}

void bootstrap();
