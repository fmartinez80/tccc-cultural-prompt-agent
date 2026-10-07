// Every setting the server reads, in one place. Secrets come from the host's
// secret store (Render environment), never from the repo.

function required(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`Missing environment variable ${name}. See README.md → Configuration.`);
  return v;
}

export const env = {
  get geminiApiKey() {
    return required('GEMINI_API_KEY');
  },
  /** Option steps and JSON fixes: fast and cheap. */
  geminiTextFast: process.env['GEMINI_TEXT_FAST'] || 'gemini-3-flash-preview',
  /** Story, validation, image check and learning. */
  geminiTextPro: process.env['GEMINI_TEXT_PRO'] || 'gemini-3.1-pro-preview',
  /** Sketch and turnarounds (Nano Banana 2). */
  geminiImageFast: process.env['GEMINI_IMAGE_FAST'] || 'gemini-3.1-flash-image',
  /** Final scene and workspace (Nano Banana Pro). */
  geminiImagePro: process.env['GEMINI_IMAGE_PRO'] || 'gemini-3-pro-image',

  get supabaseUrl() {
    return required('SUPABASE_URL');
  },
  get supabaseAnonKey() {
    return required('SUPABASE_ANON_KEY');
  },
  get supabaseServiceRoleKey() {
    return required('SUPABASE_SERVICE_ROLE_KEY');
  },
  storageBucket: process.env['SUPABASE_BUCKET'] || 'scene-composer',

  /** Comma-separated emails that are always admins (bootstraps the first admin). */
  adminEmails: (process.env['ADMIN_EMAILS'] ?? '')
    .split(',')
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean),
  /** Shared team access code; when set, people can sign in with it instead of an emailed link. */
  accessCode: (process.env['ACCESS_CODE'] ?? '').trim(),
  /** Public URL of the app, for invite and magic-link redirects. */
  appUrl: process.env['APP_URL'] || '',
  /** Defaults for a new user's monthly limits (admins can change each user's). */
  defaultSceneLimit: Number(process.env['DEFAULT_SCENE_LIMIT'] ?? 50),
  defaultImageLimit: Number(process.env['DEFAULT_IMAGE_LIMIT'] ?? 300),
};
