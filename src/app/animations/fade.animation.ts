import { trigger, animate, transition, style, query } from '@angular/animations';

export const fadeAnimation =

  trigger('fadeAnimation', [

    transition( '* => *', [

      /**
       * ----Query
       * Finds one or more inner elements within the current element that is being animated within a sequence.
       * Use with animateChild().

       * Parameters
       ------selector
       The element to query, or a set of elements that contain Angular-specific characteristics, specified with one or more of the following tokens.

       query(":enter") or query(":leave") : Query for newly inserted/removed elements.

       query(":animating") : Query all currently animating elements.
       query("@triggerName") : Query elements that contain an animation trigger.
       query("@*") : Query all elements that contain an animation triggers.
       query(":self") : Include the current element into the animation sequence.

       -------animation
       One or more animation steps to apply to the queried element or elements. An array is treated as an animation sequence.

       --------options
       An options object. Use the 'limit' field to limit the total number of items to collect.
       Optional. Default is null.


       By default, throws an error when zero items are found. Set the optional flag to ignore this error. For example:
       query('.some-element-that-may-not-be-there', [
       animate(...),
       animate(...)
       ], { optional: true })


       Explanation of this example on page https://medium.com/@tanya/angular4-animated-route-transitions-b5b9667cd67c

       These queries will execute in order. Each query’s animation steps must complete before the next query is run
       */

      /* the component for the new state is added immediately, but we don’t want to see it until the previous one has disappeared */
     query(':enter',
        [
          style({ opacity: 0 })
        ],
       { optional: true }
      ),

      /*
       The second query says find an element with the state :leave.
       Set its opacity to 1, then animate the opacity to 0. This is the fade-out animation.
      */

      query(':leave',
        [
          style({ opacity: 1 }),
          animate('0.5s', style({ opacity: 0 }))
        ],
        { optional: true }
      ),

      /*
      The third query says find the :enter element again but this time animate its opacity from 0 to 1. This is the fade-in animation.
       */
      query(':enter',
        [
          style({ opacity: 0 }),
          animate('0.5s', style({ opacity: 1 }))
        ],
        { optional: true }
      )
    ])

  ]);
