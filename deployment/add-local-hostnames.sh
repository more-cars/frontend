#!/bin/sh

SCRIPT=$(readlink -f "$0")
SCRIPT_PATH=$(dirname "$SCRIPT")

echo Adding hostnames for local dev environment...

if ! getent hosts frontend.more-cars.internal >/dev/null 2>&1; then
  sudo "$(which node)" -r ts-node/register "$SCRIPT_PATH"/lib/addHostname.ts frontend.more-cars.internal 127.0.0.1
fi
