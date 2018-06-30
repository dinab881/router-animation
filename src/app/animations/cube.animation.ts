import {trigger, animate, style, group, animateChild, query, stagger, transition, keyframes} from '@angular/animations';

export const cubeAnimation = trigger('fadeAnimation', [
  transition('* <=> *', [
      query(':enter', [

        style({ transformOrigin: '50% 0'}),
        animate('0.6s ease-in', keyframes([

          style({opacity: 0.3, transform: 'translateY(100%) rotateX(-90deg)', offset: 0.0}),
         style({ transform: 'translateY(50%) rotateX(90deg)', animationTimingFunction: 'ease-out', offset: 0.5}),
          style({transform: 'translate3d(0, 0 ,0) rotate3d(0, 0, 0, 0)',  offset: 1.0})

         //  style({opacity: 0, transform: 'translateX(100%)', offset: 0}),
          // style({opacity: 1, transform: 'translateX(5%)',  offset: 0.5}),
          // style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
        ]))
      ], { optional: true }),
      query(':leave', [
        style({ transformOrigin: '50% 100%'}),
        animate('0.6s ease-in', keyframes([
          style({transform: 'translate3d(0, 0 ,0) rotate3d(0, 0, 0, 0)', offset: 0.0}),
          style({transform: 'translateY(-50%) translateZ(-200px) rotateX(45deg)', animationTimingFunction: 'ease-out', offset: 0.5}),
          style({ transform: 'translateY(-100%) rotateX(90deg)',  offset: 1.0})
        ]))
      ], { optional: true }),
  ])
]);
