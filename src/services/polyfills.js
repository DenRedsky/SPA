import smoothscroll from 'smoothscroll-polyfill';
import 'intersection-observer';

export default function polyfills() {
  smoothscroll.polyfill();
}
