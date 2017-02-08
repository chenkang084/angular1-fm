# angular1-fm

An easy development framework based on angular1.5 using es6 , the management of packages uses webpack.
The framework has packaged base controller ,base component ,you just extends them .

steps:
  1. npm install
  2. npm run build-dll
  3. npm start


note:

you need change the base url in index.html to make sure your app runs well.

example:
    your web app (such as apache) root path is : apache/var/www/game  ,then you need change the
    `<base href="/"> `
    to
    `<base href="/game/">`
