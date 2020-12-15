import { container } from 'tsyringe';

import ICacheProvider from './models/ICacheProvider';

import ReadisCacheProvider from './implementations/ReadisCacheProvider';

const providers = {
  redis: ReadisCacheProvider,
};

container.registerSingleton<ICacheProvider>('CacheProvider', providers.redis);
