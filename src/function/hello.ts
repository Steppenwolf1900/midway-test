import {
  Provide,
  Inject,
  ServerlessTrigger,
  ServerlessTriggerType,
  Files,
} from '@midwayjs/core';
import { Context } from '@midwayjs/faas';

@Provide()
export class HelloHTTPService {
  @Inject()
  ctx: Context;

  @ServerlessTrigger(ServerlessTriggerType.HTTP, {
    path: '/',
    method: 'post',
  })
  async handleHTTPEvent2(@Files() files) {
    return 'Success';
  }
}
