#!/bin/sh

SCRIPT=$(readlink -f "$0")
SCRIPT_PATH=$(dirname "$SCRIPT")

echo 🟢 Starting API mock server...

TS_NODE_PROJECT=tsconfig.app.json node --env-file=.env -r ts-node/register "$SCRIPT_PATH"/lib/mockServer.ts
