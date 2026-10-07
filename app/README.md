# Scene Composer

Guided intake that plans culturally grounded Coca-Cola meal scenes — layout proxies, scene story and image prompts.

## What this app does

<!-- Keep this section current: what a user can do with the app. -->

An art director enters a brief (country, region, Coca-Cola product, hero dish, side dish, occasion), then walks
through Time & Place, Preparation, Plating, Sides and Camera, then straight to Sketch review. A cultural agent (Gemini, grounded in the bundled
knowledge base) proposes options at each step. There is no separate Layout step: after Camera, an even item count gets the
suggested accent automatically (a plain paper napkin on the go), the solver composes up to three rule-compliant tablescapes
and the top-ranked one is picked (`PrepareLayout` in `LayoutStep.tsx`). On Sketch review an Arrangement bar shows the other
tablescapes as small 3D proxy pictures, the accent with a Change button, and a switch for the full labeled 16:9 3D layout
(with PNG download); switching arrangement or accent asks first when it means drawing a new sketch, and each arrangement's
sketch is remembered so going back to one is free. Scenes can be set for one person or two (a second place setting with its own matching dish and
drink, no people shown).

**Sketch review** opens on a detailed black-and-white 16:9 pencil sketch of the finished scene through the photo's
camera, drawn automatically on arrival: the labeled proxy and a prompt built from the picked prep, plating, sides,
product, napkin, table, camera and food-styling rules go to Nano Banana 2 (counted against the user's monthly limit; leaving the step
mid-draw resumes the same task). Review changes never redraw on their own; "Redraw with your changes" adds them. The
numbered markers, click map and Change highlight are traced from the 3D layout in the browser and sit on top of the
sketch; that traced outline drawing is shown only when the detailed sketch fails, is plan-gated or has expired. Each item is marked Working or Change, with placement reasons
(too close, hidden, wrong side…) and a free note for non-placement edits; a scene-wide note covers environment, mood
or dish swaps. Placement changes are added to the image prompt's layout guide; keeps and notes go to the story agent
as directions. A live box shows exactly what will change in the prompt. Each Change is confirmed with Done (or Enter)
and folds to one line tagged "In the sketch" or "Next redraw". Redraws are batched to save image generations: the page counts the
edits not yet drawn and "Redraw with N edits" opens a confirmation listing them, noting that it counts toward the monthly limit and any item
marked Change with nothing picked. The step's main button reads "Create the scene".

Then **Story & scene**:

1. The agent writes the scene story: a detailed scene summary (what the cultural accuracy check reads) and a brief
   summary about half its length (what the page shows under the image).
2. Nano Banana Pro then generates the scene (16:9 by default) from the labeled proxy (image 1) and the prompt
   assembled from the story's segments. The Camera part opens with a fixed photodocumentary look (candid,
   unstyled, 50mm, rich true-to-life color with selective reds, fine film grain), filled with the hero dish, the
   place and the scene's light. The first image comes on its own; it shows large, with Download and
   Re-generate under it.
3. Segments can be edited in place and the scene generated again. Each image can be checked against the story and
   rated for Learning.

Below sit two collapsible groups: **Cultural & Visual Authentication** (the checklist of cultural accuracy, image
check and layout rules, plus the detailed scene summary) and **Segments** (scene components with the proxy, the
segments and their turnarounds; the full scene prompt; the JSON files). The node workspace stays available from that page as an optional advanced view. It shares the same edits and
results.

- Products: the brief's Product SKU carousel lists the real packages in `SKU_CATALOG` (`src/shared/registry.ts`). Their
  front / side / top photos (`references/sku/<GTIN>/`) and the poured-glass photo (`references/glass/poured.jpg`) are
  sent with every scene, SKU and GLASS generation, unless the operator gave that node their own image.
- Knowledge base: `knowledge-base/` (Markdown, copied from the reference repo); rules: `rules/*.json`.
- Solver, prompts and registry: `src/shared/`; agent + KB excerpting: `src/server/`; API: `src/api.ts`.

Besides the composer, signed-in people see:

- **Studio** (`#studio`): shared activity for the whole team: scenes and images to date, the countries and regions
  being visualized, the top dishes and occasions, a 12-week activity chart and a gallery of the latest scenes.
- **My scenes** (`#my-scenes`): the person's own generations and how much of their monthly limit is left.
- **Learning** (`#learning`): ratings, lessons and knowledge-base edits per dish. Anyone can rate; only admins approve.
- **Admin** (`#admin`, admins only): invite people by email, set roles and each person's monthly limits, remove access.

## How it runs

One Node process (Koa + tRPC) serves the API and the built React app.

| Piece | Service |
|---|---|
| Text agents (options, story, validation, image check, learning) | Gemini API: a fast model for option steps, a pro model for the rest |
| Images (sketch, turnarounds, scene, workspace) | Gemini API: Nano Banana 2 (`gemini-3.1-flash-image`) and Nano Banana Pro (`gemini-3-pro-image`) |
| Sign-in | Supabase Auth, magic link only, invite-only (no sign-ups, no passwords) |
| Database | Supabase Postgres: `profiles`, `generations`, `documents` (`supabase/schema.sql`) |
| Generated and uploaded images | Supabase Storage, private bucket `scene-composer`, served via `/media/...` to signed-in users only |
| Product photos and knowledge base | This repo: `references/`, `knowledge-base/`, `rules/` |
| Hosting | Heroku (Node, one web dyno; `package.json` and `Procfile` at the repo root build and start `app/`) |

Every model call uses one Google API key, read from the `GEMINI_API_KEY` environment variable. Keys and other secrets
live only in the host's secret store (Heroku's Config Vars) or a local `.env.local`, never in the repo.

## Configuration

| Variable | Required | What it is |
|---|---|---|
| `GEMINI_API_KEY` | yes | Google AI Studio / Gemini API key (works on `generativelanguage.googleapis.com`, not Vertex) |
| `SUPABASE_URL` | yes | Supabase project URL (Project settings → API) |
| `SUPABASE_ANON_KEY` | yes | Supabase publishable key (`sb_publishable_...`, or the legacy anon key); the browser uses it to sign in |
| `SUPABASE_SERVICE_ROLE_KEY` | yes | Supabase secret key (`sb_secret_...`, or the legacy service_role key); server only, never share it |
| `ADMIN_EMAILS` | yes | Comma-separated emails that are always admins (the first admin) |
| `APP_URL` | yes | Public URL of the app, e.g. `https://scene-composer-xxxx.herokuapp.com`; magic links return here |
| `SUPABASE_BUCKET` | no | Storage bucket, default `scene-composer` |
| `DEFAULT_SCENE_LIMIT` / `DEFAULT_IMAGE_LIMIT` | no | A new person's monthly limits, default 50 scenes / 300 other images |
| `GEMINI_TEXT_FAST` / `GEMINI_TEXT_PRO` | no | Text model IDs, default `gemini-3-flash-preview` / `gemini-3.1-pro-preview` |
| `GEMINI_IMAGE_FAST` / `GEMINI_IMAGE_PRO` | no | Image model IDs, default `gemini-3.1-flash-image` / `gemini-3-pro-image` |

## One-time setup

### Supabase

1. Create a project at supabase.com.
2. SQL editor → paste and run `supabase/schema.sql` (tables, the profile trigger and the private `scene-composer` bucket).
3. Authentication → Sign In / Providers → Email: keep Email on, turn **Allow new users to sign up** off. The app only
   lets in people an admin has invited.
4. Authentication → URL Configuration: set Site URL to `APP_URL`, and add `APP_URL/**` (and
   `http://localhost:5173/**` for local work) to Redirect URLs.
5. Optional: Authentication → Emails → SMTP to send magic links from your own domain (Supabase's built-in mailer is
   rate-limited and meant for testing).
6. Copy the Project URL, the publishable key and a secret key from Project settings → API Keys.

### Heroku

1. New → Create new app. Any name; it becomes the address (`<name>-xxxx.herokuapp.com`).
2. Deploy tab → Deployment method: GitHub → connect this repository → pick the branch → Deploy Branch (or Enable
   Automatic Deploys). Heroku builds from the root `package.json`, which installs and builds `app/`.
3. Settings tab → Reveal Config Vars → add the variables in the table above. Set `APP_URL` to the app's address
   (Settings → Domains) and add it to Supabase's Site URL and Redirect URLs.
4. Resources tab: one **Basic** dyno (Eco sleeps when idle). Keep it at one dyno: jobs in progress are held in memory.
5. Sign in with an `ADMIN_EMAILS` address. Supabase sends that first magic link only after you invite yourself once:
   Supabase dashboard → Authentication → Users → Invite user. After that, invite everyone else from the app's Admin page.

The `Dockerfile` also runs the app on any Docker host if you move off Heroku later.

## Local development

```bash
cp .env.example .env.local   # fill it in; never commit it
pnpm install
pnpm dev                      # API on :3001, web app on http://localhost:5173
```

`pnpm typecheck` and `pnpm build` are the checks to run before pushing. `pnpm start` serves the production build
(set `NODE_ENV=production`).

## Product assets

Product photos live in `references/` (`references/sku/<GTIN>/front|side|top.jpg`, `references/glass/poured.jpg`) and
are listed in `SKU_CATALOG` (`src/shared/registry.ts`). They are shared by everyone. To add a product, add its photos
and its catalog entry in a pull request; the next deploy picks it up.

