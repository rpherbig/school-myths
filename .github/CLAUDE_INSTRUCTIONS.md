# Claude Code Instructions

## Creating Pull Requests

Due to security restrictions in GitHub Actions, use the helper script instead of `gh pr create`:

### ✅ Correct way:
```bash
./scripts/create-pr.sh "Pull Request Title" "Pull Request Body"
```

### ❌ Blocked (will fail):
```bash
gh pr create --title "Title" --body "$(cat <<'EOF'
Multi-line body
EOF
)"
```

## Available Commands

- `npm install` - Install dependencies
- `npm run *` - Run any npm script (lint, build, test, etc.)
- `git add *`, `git commit *`, `git push *` - Git operations
- `./scripts/create-pr.sh "title" "body"` - Create pull requests
- Basic file operations: `ls`, `cd`, `chmod +x`

## Workflow

1. Make code changes
2. Run `git add .` and `git commit -m "message"`
3. Run `git push` to push changes
4. Run `./scripts/create-pr.sh "Title" "Description"` to create PR