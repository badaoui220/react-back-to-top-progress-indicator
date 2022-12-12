# react-back-to-top-progress-indicator

[![NPM version][npm-image]][npm-url]
[![Build][github-build]][github-build-url]
![npm-typescript]

[![License][github-license]][github-license-url]

A lightweight button component that scrolls to the top of a page when pressed with a page progress indicator
The button is only visible once a certain height has been reached on the page with smooth animation

## Installation

With npm:

```bash
npm install react-back-to-top-progress-indicator
```

With yarn:

```bash
yarn add react-back-to-top-progress-indicator
```

## Usage

Import and then add <BackToTop /> at the bottom of your return function (for a11y reasons):

```javascript
import { BackToTop } from 'react-back-to-top-progress-indicator'

function CoolPage() {
  return (
    <div style={{ height: '3000px' }}>
      <h1>Hello, world!</h1>
      <BackToTop />
    </div>
  )
}
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)

[npm-url]: https://www.npmjs.com/package/react-back-to-top-progress-indicator
[npm-image]: https://img.shields.io/npm/v/react-back-to-top-progress-indicator
[github-license]: https://img.shields.io/github/license/badaoui220/react-back-to-top-progress-indicator
[github-license-url]: https://github.com/badaoui220/react-back-to-top-progress-indicator/blob/master/LICENSE
[github-build]: https://github.com/badaoui220/react-back-to-top-progress-indicator/actions/workflows/publish.yml/badge.svg
[github-build-url]: https://github.com/badaoui220/react-back-to-top-progress-indicator/actions/workflows/publish.yml
[npm-typescript]: https://img.shields.io/npm/types/react-back-to-top-progress-indicator
