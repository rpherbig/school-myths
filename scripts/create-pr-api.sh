#!/bin/bash

# Create PR using GitHub API instead of gh CLI
# Usage: ./scripts/create-pr-api.sh "PR Title" "PR Body" "head-branch" "base-branch"

TITLE="$1"
BODY="$2"
HEAD="${3:-$(git branch --show-current)}"
BASE="${4:-main}"

if [ -z "$TITLE" ] || [ -z "$BODY" ]; then
    echo "Usage: $0 \"PR Title\" \"PR Body\" [head-branch] [base-branch]"
    exit 1
fi

# Get repository info from git remote
REPO_URL=$(git config --get remote.origin.url)
REPO_PATH=$(echo "$REPO_URL" | sed 's/.*github\.com[:/]\([^.]*\).*/\1/')

# Create PR using GitHub API
curl -X POST \
  -H "Authorization: token $GH_TOKEN" \
  -H "Accept: application/vnd.github.v3+json" \
  "https://api.github.com/repos/$REPO_PATH/pulls" \
  -d "{
    \"title\": \"$TITLE\",
    \"body\": \"$BODY\",
    \"head\": \"$HEAD\",
    \"base\": \"$BASE\"
  }"