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
  
  // ===================== TOKEN VALIDATION ==========================
  
  
const jwt = require('jsonwebtoken');
module.exports = {
    chectToken: (req, res, next) => {
        let token = req.get('authorization')
        if (token) {
            jwt.verify(token, "ajayjwttokenid", (err, decode) => {
                if (err) {
                    res.json({
                        status: 0,
                        message: "Invalid token............"
                    })
                } else {
                    res.decded = decode;
                    next();
                }
            })

        } else {
            res.json({
                status: 0,
                message: "Access denied! Unauthorizatin User!!"
            })
        }
    }
}


// =================================== END TOKEN VALIDATION =====================


// =================================== DELETE TO CONFIRMATION ====================


Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, LogOut it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          icon: 'success',
          title: 'LogOut Successfully!!',
          showConfirmButton: false,
          timer: 1500
        })
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          icon: 'error',
          title: 'Cancelled',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
	
// =================================== END DELETE TO CONFIRMATION ====================



// ================================= FORM VALIDATION ================================

// TS FILE --------
 setlimitform = new FormGroup({
    website: new FormControl('all', Validators.required),
  });
  
// END TS FILE -------

// HTML -------

<form [formGroup]="setlimitform" (ngSubmit)="onSetLimit()" method="post" autocomplete="off">
<div class="col-md-4">
	<label for="website" class="form-label">website</label>
	<input type="text" formControlName="website" class="form-control" id="website">
		<small><span class="text-danger" *ngIf='setlimitform.controls["website"].touched && setlimitform.controls["website"].hasError("required")'>
		*Your Name is Required!!</span>
		</small>
</div>
<div class="col-12 mt-3">
                            <button type="submit" class="btn btn-primary" style="width: -webkit-fill-available;">SET
                                LIMIT</button>
                        </div>
</form>

// ================================= END FORM VALIDATION ================================


// ================================ Cripto js =========================================

 var encryptedAES = CryptoJS.AES.encrypt(val, "Vijay").toString();
            var decryptedBytes = CryptoJS.AES.decrypt(encryptedAES, "Vijay");
            console.log(encryptedAES);
            console.log(decryptedBytes.toString(CryptoJS.enc.Utf8));

// ================================ End Cripto js =========================================




// ============================= Redis ====================================================

const redis = require('redis');
const redisUrl = 'redis://127.0.0.1:6379';
const client = redis.createClient(redisUrl);

const { promisify } = require('util');
const aget = promisify(client.get).bind(client);


client.set('Check-' + userc + '-' + gameCode, JSON.stringify(val), 'EX', 600);
 let v = await aget('Check-' + userc + '-' + gameCode);
console.log(v)

// ================================= End Redis ===============================


// ==================================15 ka mins ki abhi ke time se 15 mint pahle =======================================
	// abhi ke time date se 15 mint pahle ka time 
  var d = new Date()
    // console.log(d);
    // d = Mon Feb 29 2016 08:00:09 GMT+0100 (W. Europe Standard Time)
    var milliseconds = Date.parse(d)
    // 1456729209000
    milliseconds = milliseconds - (15 * 60 * 1000) //15 ka mins ki abhi ke time se 15 mint pahle 
    // - 5 minutes
    d = new Date(milliseconds)
    // d = Mon Feb 29 2016 07:55:04 GMT+0100 (W. Europe Standard Time)
    // console.log(d);

// ================================ 15 ka mins ki abhi ke time se 15 mint pahle========================================
