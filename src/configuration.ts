import { Configuration, ILifeCycle } from '@midwayjs/core';
import * as faas from '@midwayjs/faas';
import * as defaultConfig from './config/config.default';
import * as prodConfig from './config/config.prod';
import * as upload from '@midwayjs/upload';

@Configuration({
  imports: [faas, upload],
  importConfigs: [
    {
      default: defaultConfig,
      prod: prodConfig,
    },
  ],
  conflictCheck: true,
})
export class ContainerLifeCycle implements ILifeCycle {
  async onReady() {
    console.log(
      '---------------------->',
      process.pid,
      process.memoryUsage().rss / 1024 / 1024
    );
  }
}
