#!/bin/sh

create_env_file () {
cat <<EOF >.env
API_HOST=api.more-cars.internal
API_PORT=3000
EOF
}

if ! [ -f .env ]; then
  echo "⚠️ .env file is missing"
  echo "🪛 Creating a new .env file from scratch"
  create_env_file
  echo "✔️ .env file created"
  echo
fi

echo 🟢 Starting application...

node --watch --env-file=.env -r ts-node/register src/server.ts &

if ! [ $? -eq 0 ]; then
  echo ⚠️ Error while starting the application
  echo 🟥 Application stopped
  exit
fi

echo 🟢 Starting tailwind watcher...

npx @tailwindcss/cli -i src/views/stylesheets/main.css -o ./public/stylesheets/main.css --watch
