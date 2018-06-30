import { trigger, animate, group, transition, animateChild, style, query } from '@angular/animations';

/* Source - https://alligator.io/angular/animating-route-changes/*/

export const secondAnimation = trigger('fadeAnimation', [
  transition('* <=> *', [
    /*
    Group - Defines a list of animation steps to be run in parallel.
     */
    group([
      query(
        ':enter',
        [
          style({
            opacity: 0,
            transform: 'translateY(9rem) rotate(-10deg)'
          }),
          animate(
            '0.35s cubic-bezier(0, 1.8, 1, 1.8)',
            style({ opacity: 1, transform: 'translateY(0) rotate(0)' })
          ),
          /*
          * animateChild -  Executes a queried inner animation element within an animation sequence.
          * */
          animateChild()
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [animate('0.35s', style({ opacity: 0 })), animateChild()],
        { optional: true }
      )
    ])
  ])
])
