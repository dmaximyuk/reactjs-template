const env = import.meta.env;

export const I18N_DEBUG = import.meta.env.DEV && env.VITE_I18N_DEBUG === "true";
export const I18N_FALLBACK_LNG = env.VITE_I18N_FALLBACK_LNG ?? "en";
export const I18N_STORAGE_KEY = env.VITE_I18N_STORAGE_KEY ?? "lang";
