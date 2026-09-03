/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WEB3FORMS_ACCESS_KEY?: string;
  readonly VITE_FORMSPREE_ENDPOINT?: string;
  readonly VITE_WHATSAPP_NUMBER?: string;
  readonly VITE_OTHER_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
