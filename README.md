### Shadowizard

A simple way to apply box shadow to your images.

### installation

`npm i img-shadowizard --save`

Then ...

```javascript
import { shadowizard } from "img-shadowizard";

shadowizard({
  shadow_type: "soft",
  padding: false,
});
```

### Options

Img-shadowizard supports 2 options, both of which are optional;

- _shadow_type_ = _hard / soft_ (Defaults to soft)
- _padding_ = _boolean_(Defaults to false)
