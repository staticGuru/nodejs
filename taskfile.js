const { sh, cli } = require('tasksfile')

function package() {
    sh('rollup');
    sh('git add .');
    sh('npm version patch -git-tag-version false');

    const version = sh('npm version utilities --version');

    sh(`git commit -q -m ${version}`);
    sh('git push');
}

cli({
  package
})