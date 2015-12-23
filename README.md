# bootstrap-modal

[![Ember Observer Score](http://emberobserver.com/badges/bootstrap-modal.svg)](http://emberobserver.com/addons/bootstrap-modal)

## Usage

### Installation


```no-highlight
ember install bootstrap-modal
```

### Using

```hbs
{{#if showModal}}
  {{#bootstrap-modal close=(action 'toggleShowModal') closeOnOverlayClick=true}}
    <div class="modal-header">
      <button type="button" class="close" aria-label="Close" {{action 'toggleShow'}}>
        <span aria-hidden="true">&times;</span>
      </button>
      <h4 class="modal-title">Test</h4>
    </div>

    <div class="modal-body">
      Content Here
    </div>

    <div class="modal-footer">
      <button {{action 'toggleShow'}} type="button" class="btn btn-primary">
        Close
      </button>
    </div>
  {{/bootstrap-modal}}
{{/if}}
```

The `toggleShowModal` is an action that toggles the `showModal` boolean.

If you have your own `app/transitions.js`, then you will need to add the modal transition
like the example below, otherwise, the transition should just work.

```js
// app/transitions.js

import defaultTransition from 'bootstrap-modal/utils/default-transition';

export default function () {
  // bootstrap-modal transition
  defaultTransition(this);

  // other transitions here..
}
```


## Developing

Follow the steps below to start the dummy app, and work on contributing
to this addon.

### Installation

* `git clone` this repository
* `npm install`
* `bower install`

### Running

* `ember server`
* Visit your app at http://localhost:4200.

### Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
