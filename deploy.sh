#!/bin/zsh
set -e	# Exit on error

# Change branch and sync
git checkout gh-pages && git merge main --no-edit

# Ensure latest build
npm run build

# Commit the build folder if it has changes
git add dist -f
git commit -m "Build for deploy" || echo "No changes to commit"

# Push the dist folder as a subtree to the gh-pages branch
git subtree push --prefix dist origin gh-pages 

# Change back to main branch
git checkout main
