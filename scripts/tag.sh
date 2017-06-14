#!/bin/bash

latestTag=$1;
echo latestTag $latestTag
function cleanup {
  echo -n "enter your tagname: "
  read tagname
  echo "tag set as $tagname"
  echo -n "enter your message: "
  echo "message set as $message"
  read message

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
    git tag -a $tagname -m $message
    git push origin master
  fi
}

cleanup
