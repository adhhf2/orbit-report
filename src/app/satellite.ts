import { FunctionCall } from '@angular/compiler';

export class Satellite {
name: string;
orbitType: string;
type: string;
operational: boolean;
launchDate: string;
// shouldShowWarning: Function;
constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean){
    this.name = name;
    this.orbitType = orbitType;
    this.type = type;
    this.operational = operational;
    this.launchDate = launchDate;
    // this.shouldShowWarning = Function;
    //function():boolean{
    //     if(this.type.toLowerCase()==='space debris'){
    //         return true
    //     }
    //     else{
    //         return false
    //     }
    // }
    console.log(this.shouldShowWarning(this.type));
    }
    shouldShowWarning: Function = function(): boolean{
        if(this.type.toLowerCase()==='space debris'){
            return true
        }
        else{
            return false
        }
    };

}
