import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ requestLocale }) => {
  // `requestLocale` از URL میاد (مثل /fa یا /en)
  const locale = await requestLocale || 'en';

  return {
    locale,
    messages: (await import(`@/messages/${locale}.json`)).default,
  };
});