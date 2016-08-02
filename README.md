# wxapper
A Wrapper For Web Wechat(http://wx.qq.com)

# How to build

## Prerequisites

wxapper is written based on the power of nodejs

## Steps

Simply run:

```
npm run dist
```

If all worked OK, you can find distributions in `dist` directory.

## Cross Platform Build

Cross platform building relies on [Docker](http://docker.com), so you should install it first.

#### For Windows users

Build Linux distribution:

```
docker run --rm -ti -v ${PWD}:/project -v ${PWD##*/}-node-modules:/project/node_modules -v ~/.electron:/root/.electron electronuserland/electron-builder:wine /bin/bash -c "npm install && npm prune && npm run dist:linux"
```

Build macOS distribution:

```
Not implemented yet
```

#### For Linux users:

Build Windows distribution:

```
docker run --rm -ti -v ${PWD}:/project -v ${PWD##*/}-node-modules:/project/node_modules -v ~/.electron:/root/.electron electronuserland/electron-builder:wine /bin/bash -c "npm install && npm prune && npm run dist:win"
```

Build macOS distribution:

```
Not implemented yet
```

#### For macOS users:

Build Windows distribution:

```
docker run --rm -ti -v ${PWD}:/project -v ${PWD##*/}-node-modules:/project/node_modules -v ~/.electron:/root/.electron electronuserland/electron-builder:wine /bin/bash -c "npm install && npm prune && npm run dist:win"
```

Build Linux distribution:

```
docker run --rm -ti -v ${PWD}:/project -v ${PWD##*/}-node-modules:/project/node_modules -v ~/.electron:/root/.electron electronuserland/electron-builder:wine /bin/bash -c "npm install && npm prune && npm run dist:linux"
```

