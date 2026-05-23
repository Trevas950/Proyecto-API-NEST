import { Injectable } from '@nestjs/common';
import { timestamp } from 'rxjs';

@Injectable()
export class AppService {
  gethealth(){
    return{
      status: 'ok',
      timestamp: new Date().toISOString(),
    };
  }
  
}
