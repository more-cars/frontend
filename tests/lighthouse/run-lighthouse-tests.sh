#!/bin/bash

SCRIPT=$(readlink -f "$0")
SCRIPT_PATH=$(dirname "$SCRIPT")
ENV_FILE_PATH="$SCRIPT_PATH"/../../.env
REPORTS_PATH="$SCRIPT_PATH"/../../test-reports/lighthouse

source "$ENV_FILE_PATH"

echo $FRONTEND_URL

mkdir -p "$REPORTS_PATH"
npx lighthouse "$FRONTEND_URL" --output html --output json --output-path "$REPORTS_PATH"/start-page-mobile
npx lighthouse "$FRONTEND_URL" --output html --output json --output-path "$REPORTS_PATH"/start-page-desktop --preset=desktop
