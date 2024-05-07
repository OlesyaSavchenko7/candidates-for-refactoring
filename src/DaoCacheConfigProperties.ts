class DaoCacheConfigProperties {
  alive: number; // alive cache time in days
  elements: number; // maximum elements in cache
}

/**
 * 
 * Что плохо:
 * Не до конца понятно, что означают переменные, если не смотреть на комментарии.
 * 
 * Смущает название DaoCacheConfigProperties, ощущение, что отвечает только за перечесление
 * свойст и их типов.
 * 
 */

/**
 * 
 * Улучшения:
 * 
 * Названиея свойств содержат всю нужную информацию о свойстве и
 * комментарии теперь не нужны
 * 
 */

class DaoCacheConfig {
  public readonly cacheTimeInDays: number;
  public readonly maxCacheSize: number;

  constructor(cacheTimeInDays: number, maxCacheSize: number) {
    this.cacheTimeInDays = cacheTimeInDays;
    this.maxCacheSize = maxCacheSize;
  }
}