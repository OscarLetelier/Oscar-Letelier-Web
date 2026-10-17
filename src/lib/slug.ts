// Id seguro para atributos HTML a partir de un texto ("QA & Testing" → "qa-testing")
export const slugify = (value: string): string =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

// Ids enlazados de tab y panel (aria-controls / aria-labelledby)
export const tabId = (group: string, id: string): string => `${group}-tab-${slugify(id)}`;
export const panelId = (group: string, id: string): string => `${group}-panel-${slugify(id)}`;
