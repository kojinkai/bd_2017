#!/bin/bash
#
# run this on your feature / bugfix / chore branch 
# after you have squashed the branches pull request via the Github GUI.
# - it will checkout master
# - rebase in the upstream squashed commit
# - delete the old, now stale branch
#

function cleanup {
  # if current branch is master
  if [ `git rev-parse --abbrev-ref HEAD` == "master" ]; then
    echo currently on master, rebasing...
    git pull --rebase origin master
    git remote prune origin
    git push origin master
  else
    echo pruning `git rev-parse --abbrev-ref HEAD`...
    branchToDelete=`git rev-parse --abbrev-ref HEAD`
    git checkout master
    echo rebasing master...
    git pull --rebase origin master
    git branch -D $branchToDelete
    git remote prune origin
  fi
}

cleanup
