
import { Injectable, } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { CommonService } from "../service/common.service";

@Injectable()

export class AuthInterceptor implements HttpInterceptor {

    constructor(private commonservice: CommonService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const Authservice = this.commonservice;
        let Tokenreq = req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + Authservice.getToken())
        });


        return next.handle(Tokenreq);
    }
}


