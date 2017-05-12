import { NgModule }             from '@angular/core';
import { MainRoutingModule }    from './main-routing.module';
import { GlobalModule }         from "../global/global.module";

@NgModule({
    imports: [
        GlobalModule,
        MainRoutingModule
    ],
    declarations: [

    ]
})
export class MainModule { }
