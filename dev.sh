#!/usr/bin/env bash
# Run the Vite dev server from Fedora Linux.
# Source files stay on the NTFS mount; node_modules live on Linux FS.

set -e

PROJ_DIR="$(cd "$(dirname "$0")" && pwd)"
NM_DIR="$HOME/.portfolio-nm"
DEV_DIR="$HOME/portfolio-dev"

# --- First-time setup: install deps on Linux FS if needed ---
if [ ! -d "$NM_DIR/node_modules" ]; then
  echo "Installing dependencies to $NM_DIR ..."
  mkdir -p "$NM_DIR"
  cp "$PROJ_DIR/package.json" "$NM_DIR/"
  cp "$PROJ_DIR/package-lock.json" "$NM_DIR/" 2>/dev/null || true
  (cd "$NM_DIR" && npm install)
fi

# --- Rebuild mirror if missing ---
mkdir -p "$DEV_DIR"
for item in src public index.html images eslint.config.js; do
  [ -e "$PROJ_DIR/$item" ] && ln -sfn "$PROJ_DIR/$item" "$DEV_DIR/$item"
done
cp "$PROJ_DIR/package.json" "$DEV_DIR/"
cp "$PROJ_DIR/vite.config.js" "$DEV_DIR/"
ln -sfn "$NM_DIR/node_modules" "$DEV_DIR/node_modules"

# --- Launch Vite ---
echo "Starting dev server at http://localhost:5173"
cd "$DEV_DIR" && node_modules/.bin/vite "$@"
