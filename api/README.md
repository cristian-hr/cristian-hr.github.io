# Portfolio API (Cloud Run)

API del portfolio: health check y envío de emails de contacto vía Resend.

## Variables de entorno

| Variable         | Descripción                          |
|------------------|--------------------------------------|
| `PORT`           | Puerto (Cloud Run lo define; default 8080) |
| `RESEND_API_KEY` | API key de Resend (dashboard: resend.com/api-keys) |
| `MAIL_TO`        | Email destino (donde llegan los mensajes) |
| `MAIL_FROM`      | Email remitente (dominio verificado en Resend) |

## Desarrollo local

```bash
cd api
cp .env.example .env   # crear y rellenar
npm install
npm run dev
```

La API responde en `http://localhost:8080` (o el `PORT` que definas).

## Despliegue en Cloud Run

### Requisitos

- Cuenta en Google Cloud con billing habilitado
- `gcloud` CLI instalado y autenticado (`gcloud auth login` + `gcloud config set project TU_PROJECT_ID`)

### Opción 1: Deploy desde código (build en la nube)

Desde la raíz del repo:

```bash
gcloud run deploy portfolio-api \
  --source ./api \
  --region us-central1 \
  --allow-unauthenticated \
  --max-instances=1 \
  --set-env-vars "RESEND_API_KEY=re_xx,MAIL_TO=cristian.xx@gmail.com,MAIL_FROM=onboarding@resend.dev" \
  --project=devportfolio-xx
```

### Opción 2: Deploy con imagen Docker

```bash
cd api
gcloud builds submit --tag gcr.io/TU_PROJECT_ID/portfolio-api
gcloud run deploy portfolio-api \
  --image gcr.io/TU_PROJECT_ID/portfolio-api \
  --region us-central1 \
  --allow-unauthenticated \
  --max-instances=1 \
  --set-env-vars "RESEND_API_KEY=re_xxx,MAIL_TO=...,MAIL_FROM=..."
```

**Nota:** `--max-instances=1` limita el servicio a una sola instancia. Así el rate limit en memoria es efectivo. Si quieres escalar, quita ese flag o usa un valor mayor.

### Tras el deploy

Cloud Run te dará una URL (ej. `https://portfolio-api-xxx-uc.a.run.app`). En el frontend, configura:

- **Build-time:** `REACT_APP_BACK_URL=https://portfolio-api-xxx-uc.a.run.app` antes de `npm run build`
- O en GitHub Actions / tu CI: añade esa variable de entorno al paso de build.

## Endpoints

- `GET /` – Health check, responde `{ "status": "ok" }`
- `POST /sendemail` – Body: `{ "name", "email", "message" }` – Envía el email y responde `{ "success": true }` o error 4xx/5xx
