import defaultSettings from '@/common/config/settings';

const title = defaultSettings.title || 'Vue Base';

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`;
  }
  return `${title}`;
}
