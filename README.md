# Fimidara JS SDK

JS SDK for [Fimidara](https://www.fimidara.com), a file storage service.
[Docs](https://softkave.github.io/fimidara-js/).

## Installation

`npm install fimidara`

## Usage

The type of the default export can be found [here](https://softkave.github.io/fimidara-js/interfaces/IFimidara.html), and the modules can be found [here](https://softkave.github.io/fimidara-js/modules.html).

```typescript
// import fimidara
import fimidara from 'fimidara';

// set global auth token
fimidara.config.setAuthToken('<your-auth-token>');

// perform operations using the global auth token
const file = fimidara.file.getFile({
  filepath: '/path/to/file.png',
  imageTransformation: {
    width: 100,
    height: 100,
  },
});

// display file
<img src={fimidara.file.getFileURL('/path/to/file.png', 100, 100)} />;

// perform operations using a different auth token
const file = fimidara.file.getFile({
  filepath: '/path/to/file.png',
  imageTransformation: {
    width: 100,
    height: 100,
  },

  // overrides the global auth token
  authToken: '<your-auth-token>',
});
```
