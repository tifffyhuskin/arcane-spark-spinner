# arcane-spark-spinner

ArcaneSparkSpinner is a React component for displaying a customizable spinner while content is loading.

## Installation

You can install the package via npm:

```bash
npm install arcane-spark-spinner
```

## Usage

```javascript
import React from 'react';
import ArcaneSparkSpinner from 'arcane-spark-spinner';

const MyComponent = () => {
  const [loading, setLoading] = React.useState(true);

  return (
    <div>
      <ArcaneSparkSpinner loading={loading} text="Loading..." />
      {/* Your content goes here */}
    </div>
  );
};
```

## Props

- `loading` (required): Boolean value indicating whether the spinner should be displayed or not.
- `text`: Text to display alongside the spinner (default: "Loading...").
- `spinnerColor`: Color of the spinner (default: "#000000").
- `spinnerSize`: Size of the spinner (default: 1).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
