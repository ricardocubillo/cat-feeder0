with import <nixpkgs> {};

stdenv.mkDerivation {
    name = "nodejs";
    buildInputs = [
        nodejs_20
    ];
    shellHook = ''
        export PATH="$PWD/node_modules/.bin/:$PATH"
    '';
}