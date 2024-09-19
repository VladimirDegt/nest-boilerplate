import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerModule } from './logger/logger.module';
import { CronService } from './cron.service';
import { ScheduleModule } from '@nestjs/schedule';
import { HealthModule } from './health/health.module';

@Module({
    imports: [HealthModule, LoggerModule, ScheduleModule.forRoot()],
    controllers: [AppController],
    providers: [AppService, CronService],
})
export class AppModule {}
