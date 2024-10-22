import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }
  
  trace(tagname :string, message:string){
    console.log(tagname + ' [TRACE] ' + message);
  }

  debug(tagname :string, message:string){
    console.log(tagname + ' [DEBUG] ' + message);
  }

  info(tagname :string, message:string){
    console.log(tagname + ' [INFO] ' + message);
  }

  warn(tagname :string, message:string){
    console.log(tagname + ' [WARN] ' + message);
  }

  error(tagname :string, message:string){
    console.log(tagname + ' [ERROR] ' + message);
  }
}
