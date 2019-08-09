workflow "Build and Test front end" {
  on = "push"
  resolves = ["Build"]
}

action "install" {
  uses = "Borales/actions-yarn@master"
  args = "install"
}

action "Test" {
  needs = "install"
  uses = "Borales/actions-yarn@master"
  args = "build:test"
}

action "Build" {
  needs = "Test"
  uses = "Borales/actions-yarn@master"
  args = "mvl-app build"
}