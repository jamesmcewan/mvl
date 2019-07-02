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
  args = "workspace mvl-app build:test"
}

action "Build" {
  needs = "Build"
  uses = "Borales/actions-yarn@master"
  args = "workspace mvl-app build"
}