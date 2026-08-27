import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactModule } from './contact/contact.module';
import { InternshipModule } from './internship/internship.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ContactModule,
    InternshipModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
