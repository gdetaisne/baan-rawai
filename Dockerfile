FROM node:18-alpine
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm ci

# Copy source
COPY . .

# Only NEXT_PUBLIC_ vars needed at build time
ARG NEXT_PUBLIC_WIFI_NETWORK
ARG NEXT_PUBLIC_TM0_FORM_URL
ENV NEXT_PUBLIC_WIFI_NETWORK=$NEXT_PUBLIC_WIFI_NETWORK
ENV NEXT_PUBLIC_TM0_FORM_URL=$NEXT_PUBLIC_TM0_FORM_URL
ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build

# Next standalone does not embed static/public assets.
RUN mkdir -p .next/standalone/.next \
  && cp -r .next/static .next/standalone/.next/static \
  && if [ -d public ]; then cp -r public .next/standalone/public; fi

ENV NODE_ENV=production
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", ".next/standalone/server.js"]
