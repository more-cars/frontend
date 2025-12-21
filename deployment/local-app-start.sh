#!/bin/sh

echo 🟢 Starting application...

node --watch --env-file=.env -r ts-node/register src/server.ts &

if ! [ $? -eq 0 ]; then
  echo ⚠️ Error while starting the application
  echo 🟥 Application stopped
  exit
fi

echo 🟢 Starting tailwind watcher...

npx @tailwindcss/cli -i src/views/stylesheets/main.css -o ./public/stylesheets/main.css --watch
