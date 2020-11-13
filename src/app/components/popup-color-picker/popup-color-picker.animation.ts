// Angular
import { animation, style, animate, useAnimation, transition, trigger } from '@angular/animations';



const popupEnterAnimation = animation([
  style({ bottom: '-100%' }),
  animate('.5s ease-out')
]);

const popupLeaveAnimation = animation([
  animate('.5s ease-in', style({ bottom: '-100%' }))
]);


export const popupColorPickerAnimation = trigger('popup', [
  transition(':enter', [
    useAnimation(popupEnterAnimation)
  ]),
  transition(':leave', [
    useAnimation(popupLeaveAnimation)
  ])
]);
