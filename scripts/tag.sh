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
    echo you are currently attempting to tag on `git rev-parse --abbrev-ref HEAD`
    echo "run cleanup.sh first to remove stale branches and re-run this script from master"
  fi
}

cleanup
