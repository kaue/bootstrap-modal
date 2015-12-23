import { target } from 'liquid-tether';

const options = {
  duration: 700,
  easing: 'easeInOutQuint'
};

export default function defaultTransition(context) {
  return context.transition(
    target('bootstrap-modal'),
    // hack to get reverse working..
    this.toValue(current => {
      return current.isVisible;
    }),
    this.use('explode', {
      pick: '.modal-dialog',
      use: ['to-down', options]
    }, {
      pick: '.modal-backdrop',
      use: 'crossFade'
    }),
    this.reverse('explode', {
      pick: '.modal-dialog',
      use: ['to-up', options]
    }, {
      pick: '.modal-backdrop',
      use: 'crossFade'
    })
  );
}
