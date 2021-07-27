// ====================== MONGOOSE CONNECTION==============================
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/express_graphQL', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
mongoose.connection.on("open", function (ref) {
    console.log("Connected to mongo server.");
});

mongoose.connection.on("error", function (err) {
    console.log("Could not connect to mongo server!");
    return console.log(err);
});

// ====================== END MONGOOSE CONNECTION==============================


// ====================== Interceptor==================================

import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError } from 'rxjs/operators';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("intercepted request ... ");
        if (localStorage.getItem('token') != null) {
            const headers = new HttpHeaders().set("Authorization", localStorage.getItem('token') || '{}')
            const AuthRequest = req.clone({ headers: headers });
            return next.handle(AuthRequest);
        } else {
            return next.handle(req);
        }
    }
}

// NEXT
app.module.ts Update

providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }],

// =======================END Interceptor============================


//  ===================== Modal ============================
<button class="btn btn-success" (click)="showpopup()">Add User</button>

// Next
<div [className]="checkpopup ? 'modal fade in' : 'modal fade'" [style.display]="showModal ? 'block' : 'none'"
        style="opacity: 1;">
        <div class="modal-dialog  modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <ng-container *ngIf="updateuserid; else elseuserpudateheader">
                        <h5 class="modal-title" id="exampleModalLabel">Update User</h5>
                    </ng-container>
                    <ng-template #elseuserpudateheader>
                        <h5 class="modal-title" id="exampleModalLabel">Add User</h5>
                    </ng-template>


                    <button type="button" class="btn-close" (click)="hidepopup()"></button>
                </div>
                <div class="modal-body">
                    <!-- <form> -->
                    <!-- <input type="text" value="{{updateuserid}}" class="form-control"> -->
                    <div class="mb-3">
                        <label class="form-label">Name</label>
                        <input type="text" #name class="form-control" placeholder="Name"
                            value="{{Singleuser?.singleuser.name}}">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Email</label>
                        <input type="email" #email class="form-control" placeholder="Email"
                            value="{{Singleuser?.singleuser.email}}">
                        <small *ngIf="updateuserid" class="text-danger"><u><i>Email Id Not Updated</i></u></small>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Password</label>
                        <input type="text" #password class="form-control" placeholder="Password"
                            value="{{Singleuser?.singleuser.password}}">
                           <input type="hidden" #id class="form-control" value="{{Singleuser?.singleuser.id}}">
                    </div>
                    <ng-container *ngIf="updateuserid; else elseuserupdate">
                        
                        <button type="submit" class="btn btn-primary"
                            (click)="updateuser(name.value,  password.value, id.value )">Submit</button>
                    </ng-container>
                    <ng-template #elseuserupdate>
                        <button type="submit" class="btn btn-primary"
                            (click)="adduser(name.value, email.value, password.value)">Submit</button>
                    </ng-template>


                    <!-- </form> -->
                </div>
            </div>
        </div>
    </div>
	
	 // NEXT
	 
	 Update ts file 
	 
	 
	  showpopup() {
    this.showModal = true;
    this.checkpopup = true;
    // console.log(this.showModal);
  }

  hidepopup() {
    this.showModal = false;
    this.checkpopup = false;
    this.Singleuser = null;
    this.updateuserid = null;
  }
  
  // ================================ End Modal =============================
