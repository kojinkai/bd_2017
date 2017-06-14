#!/bin/bash
#
# run this on your feature / bugfix / chore branch after you have squashed
# the branches pull request via the Github GUI.
# - it will checkout master
# - rebase in the upstream squashed commit
# - delete the old, now stale branch
# - tag the code
# - push the tag to origin
#

latestTag=$1;
echo latestTag $latestTag
function cleanup {
  echo -n "enter your tagname: "
  read tagname
  echo "tag set as $tagname"
  echo -n "enter your message: "
  read message  
  echo "message set as $message"

  if [ `git rev-parse --abbrev-ref HEAD` == "master" ]; then
    echo currently on master, rebasing and tagging...
    git pull --rebase origin master
    git tag -a $tagname -m $message
    git push origin master
  else
    echo pruning `git rev-parse --abbrev-ref HEAD`...
    branchToDelete=`git rev-parse --abbrev-ref HEAD`
    git checkout master
    echo currently on master, rebasing and tagging...
    git pull --rebase origin master
    git branch -D $branchToDelete
    git tag -a $tagname -m "$message"
    git push origin master
  fi
}

cleanup
