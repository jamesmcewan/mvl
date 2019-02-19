workflow "Build MVL-APP" {
  on = "push"
  resolves = ["Build Production"]
}

action "Install" {
  uses = "actions/npm@master"
  runs = "npm install"
}

action "Test" {
  uses = "actions/npm@master"
  needs = ["Install"]
  runs = "npm test"
}

action "Build" {
  uses = "actions/npm@master"
  needs = ["Test"]
  runs = "npm run build"
}

action "master" {
  uses = "actions/bin/filter@46ffca7632504e61db2d4cb16be1e80f333cb859"
  needs = ["Build"]
  args = "branch master"
}

action "install production" {
  uses = "actions/npm@master"
  needs = ["master"]
  args = "npm install --production"
}

action "Build Production" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["install production"]
  args = "npm run build -- --production"
}
