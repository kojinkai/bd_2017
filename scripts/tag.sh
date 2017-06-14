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

# tag the code
function tag {
  # cat package.json and filter version number, adding a v so we get v1.1.5, say
  local suggestedTagName=v`cat package.json | grep version | sed  "s/^.*: \"//;s/\".*//"`
  echo -n "enter your tagname (defaults to $suggestedTagName): "
  read tagname
  # set tag as either default or what was entered
  tagname=${tagname:-$suggestedTagName}
  echo "tag set as $tagname"
  echo -n "enter your message: "
  read message  
  echo "message set as $message"

  if [ `git rev-parse --abbrev-ref HEAD` == "master" ]; then
    echo currently on master, rebasing and tagging...
    git pull --rebase origin master
    git tag -a $tagname -m "$message"
    git push origin $tagname
  else
    echo you are currently attempting to tag on `git rev-parse --abbrev-ref HEAD`
    echo "run cleanup.sh first to remove stale branches and re-run this script from master"
    exit 1
  fi
}

tag
