#!/bin/sh

SCRIPT=$(readlink -f "$0")
SCRIPT_PATH=$(dirname "$SCRIPT")

create_env_file () {
cat <<EOF >.env
API_URL=http://localhost:3000
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

NODE_ENV=test node --watch --env-file=.env -r ts-node/register src/server.ts &

if ! [ $? -eq 0 ]; then
  echo ⚠️ Error while starting the application
  echo 🟥 Application stopped
  exit
fi

hostname_exists() {
  if ! getent hosts $1 >/dev/null 2>&1; then
      RED='\033[0;33m'
      NC='\033[0m'
      echo ⚠️ Hostname ${RED}$1${NC} was not found in the environment. Consider running ${RED}npm run local:hostnames:add${NC}.
  fi
}

hostname_exists "frontend.more-cars.internal"

echo 🟢 Starting tailwind watcher...

npx @tailwindcss/cli -i src/views/stylesheets/main.css -o ./public/stylesheets/main.css --watch
