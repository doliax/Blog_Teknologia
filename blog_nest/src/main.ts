import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Despues de hacer un npm install cors --save
  // Configura CORS en NestJS para permitir solicitudes desde 'http://localhost:8100' (frontend)
  app.enableCors({
    origin: 'http://localhost:8100',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  });

  //Una vez instalado swagger (npm install --save @nestjs/swagger) podemos tener una pagina de documentación con nuestros endpoints
  const config = new DocumentBuilder()
    .setTitle('Posts')
    .setDescription('The posts API description')
    .setVersion('1.0')
    .addTag('posts')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
