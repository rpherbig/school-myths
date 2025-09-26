#!/bin/bash

# Simple PR creation script for Claude Code
# Usage: ./scripts/create-pr.sh "PR Title" "PR Body"

TITLE="$1"
BODY="$2"

if [ -z "$TITLE" ] || [ -z "$BODY" ]; then
    echo "Usage: $0 \"PR Title\" \"PR Body\""
    exit 1
fi

# Create PR with simple arguments
gh pr create --title "$TITLE" --body "$BODY"