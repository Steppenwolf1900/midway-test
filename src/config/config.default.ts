import { MidwayConfig } from '@midwayjs/core';

export default {
  // if use http/API Gateway, please set keys here.
  keys: '1684327637885_6825',
  upload: {
    mode: 'stream',
    // 不检测后缀名
    whitelist: null,
  },
} as MidwayConfig;
