# =====================
# Salmorejo base state

FROM node:18-alpine as salmorejo2023_base

WORKDIR /usr/src/app

ADD package.json .
ADD package-lock.json .

RUN npm install --silent

ADD . .

# =====================
# Salmorejo web in watch mode

FROM salmorejo2023_base as salmorejo2023-dev

EXPOSE 3000

CMD npm run dev

# =====================
# Salmorejo design-system - storybook

FROM salmorejo2023_base as salmorejo2023-storybook

EXPOSE 6006

CMD npm run storybook