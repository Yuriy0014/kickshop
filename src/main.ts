import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    // Перенаправление запросов к Swagger UI файлам на CDN
    app.use('/api/swagger-ui.css', (req, res) => {
        res.redirect('https://unpkg.com/swagger-ui-dist@5.11.0/swagger-ui.css');
    });
    app.use('/api/swagger-ui-bundle.js', (req, res) => {
        res.redirect('https://unpkg.com/swagger-ui-dist@5.11.0/swagger-ui-bundle.js');
    });
    app.use('/api/swagger-ui-standalone-preset.js', (req, res) => {
        res.redirect('https://unpkg.com/swagger-ui-dist@5.11.0/swagger-ui-standalone-preset.js');
    });


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
