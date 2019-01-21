import get from 'lodash.get';
import * as en from './en';

export const DEFAULT_LANGUAGE = 'en';

export const contentByLanguage = {
  en,
};

export default ({
  contentCode,
  contentKey,
  data,
  language,
}) => {
  const content = get(contentByLanguage, `[${language || DEFAULT_LANGUAGE}][${contentKey}]`, null);

  // if we have content substitutions
  if (data && content && content.get) {
    return content.get(data);
  }

  if (!contentCode) {
    return content;
  }

  return `${content} [${contentCode}]`
};