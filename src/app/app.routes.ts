import { Routes } from '@angular/router';
import { Algorithms271223Component } from '../component/algorithms27-12-23/algorithms27-12-23.component';
import { Algorithms251223Component } from '../component/algorithms251223/algorithms251223.component';
import { Algorithms261223Component } from '../component/algorithms26-12-23/algorithms26-12-23.component';
import { Algorithms281223Component } from '../component/algorithms28-12-23/algorithms28-12-23.component';
import { AnimateCaseComponent } from '../component/animate-case/animate-case.component';
import { MexicanWaveComponent } from '../component/mexican-wave/mexican-wave.component';
import { ShoppingCartComponent } from '../component/shopping-cart/shopping-cart.component';
import { DoorAnimateComponent } from '../component/door-animate/door-animate.component';

export const routes: Routes = [
    {path:'',component:Algorithms251223Component},
    {path:'algorithms26',component:Algorithms261223Component},
    {path:'algorithms27',component:Algorithms271223Component},
    {path:'algorithms28',component:Algorithms281223Component},
    {path:'animateCase',component:AnimateCaseComponent},
    {path:'mexicanWave',component:MexicanWaveComponent},
    {path:'shoppingCart',component:ShoppingCartComponent},
    {path:'doorAnimate',component:DoorAnimateComponent}
];
