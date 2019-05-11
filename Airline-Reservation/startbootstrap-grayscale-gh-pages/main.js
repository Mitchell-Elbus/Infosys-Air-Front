(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\r\n    margin-top: 100px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Project 2, Takoot -->\r\n<navbar></navbar>\r\n\r\n\r\n\r\n<div id = \"container\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Takoot-Front';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _games_games_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./games/games.component */ "./src/app/games/games.component.ts");
/* harmony import */ var _questions_questions_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./questions/questions.component */ "./src/app/questions/questions.component.ts");
/* harmony import */ var _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./quiz/quiz.component */ "./src/app/quiz/quiz.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _token_interceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./token.interceptor */ "./src/app/token.interceptor.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");







// import {MatRadioModule} from '@angular/material/radio';











var ROUTES = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"] },
    { path: 'games', component: _games_games_component__WEBPACK_IMPORTED_MODULE_11__["GamesComponent"] },
    { path: 'quiz', component: _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_13__["QuizComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["DashboardComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
                _games_games_component__WEBPACK_IMPORTED_MODULE_11__["GamesComponent"],
                _questions_questions_component__WEBPACK_IMPORTED_MODULE_12__["QuestionsComponent"],
                _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_13__["QuizComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["DashboardComponent"],
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_17__["LandingComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(ROUTES),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            ],
            providers: [
                _auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
                    useClass: _token_interceptor__WEBPACK_IMPORTED_MODULE_16__["TokenInterceptor"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");






var AuthService = /** @class */ (function () {
    // creating a private constructor, http, of type HttpClient
    function AuthService(http) {
        this.http = http;
        // defining these properties/fields as private and final
        this._isAuthenticated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.hasToken());
        this.isAuthenticated$ = this._isAuthenticated.asObservable();
        console.log('AuthService constructed!');
    }
    Object.defineProperty(AuthService.prototype, "isAuthenticated", {
        // getter for isAuthenticated
        get: function () {
            return this._isAuthenticated.getValue();
        },
        // setter for isAuthenticated
        set: function (value) {
            this._isAuthenticated.next(value);
        },
        enumerable: true,
        configurable: true
    });
    // creating authenticate method that takes in credentials
    AuthService.prototype.authenticate = function (credentials) {
        var _this = this;
        this.logout(); // resetting the credentials by loging out the current user, whoever that may be
        console.log("Attempting to login in user: " + credentials.username);
        var credentialsJson = JSON.stringify(credentials); //stringify the credentials so make them readable JSON format
        // posting/sending an HttpResponse back with the endpoint, and credentials
        // empty strings represent the jwt and user
        // MAKE NOTE, AUTH REPRESENTS THE END POINT... CHECK WITH BACKEND
        this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].API_URL + 'auth', credentialsJson, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            localStorage.setItem('user', resp.headers.get('Authorization'));
            localStorage.setItem('jwt', JSON.stringify(resp.body));
            _this.isAuthenticated = true;
        })).subscribe();
    };
    // logout method will remove the JWT's from the associated user in local storage
    AuthService.prototype.logout = function () {
        if (localStorage.getItem('user') || localStorage.getItem('jwt')) {
            console.log('Logging out current user');
            localStorage.removeItem('user');
            localStorage.removeItem('jwt');
        }
        this.isAuthenticated = false;
    };
    AuthService.prototype.hasToken = function () {
        return !!localStorage.getItem('jwt');
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import \"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700\";\r\n\r\n.wrapper {\r\n    display: flex;\r\n    width: 100%;\r\n    align-items: stretch;\r\n}\r\n\r\n#sidebar.active {\r\n    margin-left: -250px;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    #sidebar {\r\n        margin-left: -250px;\r\n    }\r\n    #sidebar.active {\r\n        margin-left: 0;\r\n    }\r\n}\r\n\r\nbody {\r\n    font-family: 'Poppins', sans-serif;\r\n    background: #fafafa;\r\n}\r\n\r\np {\r\n    font-family: 'Poppins', sans-serif;\r\n    font-size: 1.1em;\r\n    font-weight: 300;\r\n    line-height: 1.7em;\r\n    color: #999;\r\n}\r\n\r\na, a:hover, a:focus {\r\n    color: inherit;\r\n    text-decoration: none;\r\n    transition: all 0.3s;\r\n}\r\n\r\n#sidebar {\r\n    min-width: 250px;\r\n    max-width: 250px;\r\n    min-height: 100vh;\r\n    width: 250px;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100vh;\r\n    z-index: 999;\r\n    background: rgb(22, 184, 57);\r\n    color: #fff;\r\n    transition: all 0.3s;\r\n}\r\n\r\n#sidebar .sidebar-header {\r\n    padding: 20px;\r\n    background: rgb(22, 184, 57);\r\n}\r\n\r\n#sidebar ul.components {\r\n    padding: 20px 0;\r\n    border-bottom: 1px solid rgb(22, 184, 57);\r\n}\r\n\r\n#sidebar ul p {\r\n    color: #fff;\r\n    padding: 10px;\r\n}\r\n\r\n#sidebar ul li a {\r\n    padding: 10px;\r\n    font-size: 1.1em;\r\n    display: block;\r\n}\r\n\r\n#sidebar ul li a:hover {\r\n    color: #7386D5;\r\n    background: #fff;\r\n}\r\n\r\n#sidebar ul li.active > a, a[aria-expanded=\"true\"] {\r\n    color: #fff;\r\n    background: #6d7fcc;\r\n}\r\n\r\nul ul a {\r\n    font-size: 0.9em !important;\r\n    padding-left: 30px !important;\r\n    background: #6d7fcc;\r\n}\r\n\r\n#content {\r\n    margin-left: 40%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZFQUE2RTs7QUFFN0U7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJO1FBQ0ksbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0FBQ0o7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLGFBQWE7SUFDYixZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLFdBQVc7SUFDWCxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0IsNkJBQTZCO0lBQzdCLG1CQUFtQjtBQUN2Qjs7QUFHQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGluczozMDAsNDAwLDUwMCw2MDAsNzAwXCI7XHJcblxyXG4ud3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxufVxyXG5cclxuI3NpZGViYXIuYWN0aXZlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMjUwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgI3NpZGViYXIge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMjUwcHg7XHJcbiAgICB9XHJcbiAgICAjc2lkZWJhci5hY3RpdmUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG59XHJcblxyXG5wIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjdlbTtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG59XHJcblxyXG5hLCBhOmhvdmVyLCBhOmZvY3VzIHtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuXHJcbiNzaWRlYmFyIHtcclxuICAgIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyMiwgMTg0LCA1Nyk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcblxyXG4jc2lkZWJhciAuc2lkZWJhci1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyMiwgMTg0LCA1Nyk7XHJcbn1cclxuXHJcbiNzaWRlYmFyIHVsLmNvbXBvbmVudHMge1xyXG4gICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMiwgMTg0LCA1Nyk7XHJcbn1cclxuXHJcbiNzaWRlYmFyIHVsIHAge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4jc2lkZWJhciB1bCBsaSBhIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuI3NpZGViYXIgdWwgbGkgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzczODZENTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcbiNzaWRlYmFyIHVsIGxpLmFjdGl2ZSA+IGEsIGFbYXJpYS1leHBhbmRlZD1cInRydWVcIl0ge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNmQ3ZmNjO1xyXG59XHJcbnVsIHVsIGEge1xyXG4gICAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNmQ3ZmNjO1xyXG59XHJcblxyXG5cclxuI2NvbnRlbnQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- \r\n  for the dashboard, we need a few things:\r\n      1. side bar/column/nav with profile information\r\n          a. My Games button (questions by author id)\r\n          b. Edit Profile button\r\n      2. cards to display Play, Create, Search, View Leaderboards\r\n      3. Final bottom card for User Stats\r\n-->\r\n\r\n\r\n<nav class=\"navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow\">\r\n  <a class=\"navbar-brand col-sm-3 col-md-2 mr-0\" routerLink=\"\">Home</a>\r\n  <ul class=\"navbar-nav px-3\">\r\n    <li class=\"nav-item text-nowrap\">\r\n      <a class=\"nav-link\" routerLink=\"\">Sign out</a>\r\n    </li>\r\n  </ul>\r\n</nav>\r\n\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <nav class=\"col-md-2 d-none d-md-block bg-light sidebar\">\r\n      <div class=\"sidebar-sticky\">\r\n        <ul class=\"nav flex-column\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link active\" routerLink=\"\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\"\r\n                stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-home\">\r\n                <path d=\"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"></path>\r\n                <polyline points=\"9 22 9 12 15 12 15 22\"></polyline>\r\n              </svg>\r\n              Dashboard <span class=\"sr-only\">(current)</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLink=\"\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\"\r\n                stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-file\">\r\n                <path d=\"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z\"></path>\r\n                <polyline points=\"13 2 13 9 20 9\"></polyline>\r\n              </svg>\r\n              My Quizzes\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLink=\"\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\"\r\n                stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-shopping-cart\">\r\n                <circle cx=\"9\" cy=\"21\" r=\"1\"></circle>\r\n                <circle cx=\"20\" cy=\"21\" r=\"1\"></circle>\r\n                <path d=\"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6\"></path>\r\n              </svg>\r\n              Profile\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLink=\"\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\"\r\n                stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-users\">\r\n                <path d=\"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path>\r\n                <circle cx=\"9\" cy=\"7\" r=\"4\"></circle>\r\n                <path d=\"M23 21v-2a4 4 0 0 0-3-3.87\"></path>\r\n                <path d=\"M16 3.13a4 4 0 0 1 0 7.75\"></path>\r\n              </svg>\r\n              View My High Scores\r\n            </a>\r\n          </li>\r\n\r\n        </ul>\r\n\r\n      </div>\r\n    </nav>\r\n\r\n    <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4\">\r\n      <div class=\"chartjs-size-monitor\" style=\"position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;\">\r\n        <div class=\"chartjs-size-monitor-expand\" style=\"position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;\">\r\n          <div style=\"position:absolute;width:1000000px;height:1000000px;left:0;top:0\"></div>\r\n        </div>\r\n        <div class=\"chartjs-size-monitor-shrink\" style=\"position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;\">\r\n          <div style=\"position:absolute;width:200%;height:200%;left:0; top:0\"></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom\">\r\n        <h1 class=\"h2\">Dashboard</h1>\r\n      </div>\r\n\r\n      <canvas class=\"my-4 w-100 chartjs-render-monitor\" id=\"myChart\" width=\"1037\" height=\"437\" style=\"display: block; height: 350px; width: 830px;\"></canvas>\r\n  </main>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    // use this service to connect to the API
    // tv
    DataService.prototype.playQuiz = function () {
        console.log('the play button was clicked on the GamesComponentHtml');
        console.log('playQuiz()');
        // this should create 10 questions from TV category with multiple choice answers API
        // return this.http.get('https://reqres.in/api/users');
        return this.http.get('https://opentdb.com/api.php?amount=10&category=14&difficulty=easy&type=multiple');
    };
    //animals
    DataService.prototype.playQuiz2 = function () {
        console.log('playQuiz2()');
        return this.http.get('https://opentdb.com/api.php?amount=10&category=27&difficulty=medium&type=multiple');
    };
    //sports
    DataService.prototype.playQuiz3 = function () {
        console.log('playQuiz3()');
        return this.http.get('https://opentdb.com/api.php?amount=10&category=21&difficulty=hard&type=multiple');
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/games/games.component.css":
/*!*******************************************!*\
  !*** ./src/app/games/games.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* #games-jumbo {\r\n    background-color: hotpink;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZXMvZ2FtZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRyIsImZpbGUiOiJzcmMvYXBwL2dhbWVzL2dhbWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAjZ2FtZXMtanVtYm8ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaG90cGluaztcclxufSAqLyJdfQ== */"

/***/ }),

/***/ "./src/app/games/games.component.html":
/*!********************************************!*\
  !*** ./src/app/games/games.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!-- BootStrap here, for a list/section of cards -->\r\n\r\n<div id = \"games-jumbo\" class=\"jumbotron\">\r\n  <h1 class=\"display-4\">Takoot Games</h1>\r\n  <p class=\"lead\">Add a blurb about playing games! </p>\r\n  <hr class=\"my-4\">\r\n  <p>Below is a list of games....... blah blah blah.. </p>\r\n  <!-- <p class=\"lead\">\r\n    <a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more</a>\r\n  </p> -->\r\n\r\n\r\n<!-- add card groups -->\r\n\r\n<!-- on this view, when the user clicks a button on the card, it should take them to the quiz component-->\r\n\r\n<div class=\"card-deck\">\r\n  <div class=\"card text-white bg-dark mb-3\">\r\n    <!-- <img class=\"card-img-top\" src=\"...\" alt=\"Card image cap\"> -->\r\n    <div class=\"card-body\">\r\n      <h5 class=\"card-title\">TV Category</h5>\r\n      <p class=\"card-text\"> Television</p>\r\n      <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\r\n      <!-- here, you should have event binding for playQuiz -->\r\n      <a routerLink=\"/quiz\" class=\"btn\" style=\"background-color:blueviolet; color:white\">Play Game</a>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card text-white bg-dark mb-3\">\r\n    <!-- <img class=\"card-img-top\" src=\"...\" alt=\"Card image cap\"> -->\r\n    <div class=\"card-body\">\r\n      <h5 class=\"card-title\">Animals Category</h5>\r\n      <p class=\"card-text\">Animals Animals</p>\r\n      <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\r\n      <a routerLink=\"/quiz\" class=\"btn\" style=\"background-color:blueviolet; color:white\">Play Game</a>\r\n    </div>\r\n  </div>\r\n  <div class=\"card text-white bg-dark mb-3\">\r\n    <!-- <img class=\"card-img-top\" src=\"...\" alt=\"Card image cap\"> -->\r\n    <div class=\"card-body\">\r\n      <h5 class=\"card-title\">Sports Category</h5>\r\n      <p class=\"card-text\"> Sports and More Sports</p>\r\n      <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\r\n      <a routerLink=\"/quiz\" class=\"btn\" style=\"background-color:blueviolet; color:white\">Play Game</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n</div> <!-- div for the jumbotron-->\r\n"

/***/ }),

/***/ "./src/app/games/games.component.ts":
/*!******************************************!*\
  !*** ./src/app/games/games.component.ts ***!
  \******************************************/
/*! exports provided: GamesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesComponent", function() { return GamesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GamesComponent = /** @class */ (function () {
    // this is a constructor in TS, that defines a private variable, data, of type DataService
    function GamesComponent() {
    }
    GamesComponent.prototype.ngOnInit = function () {
    };
    GamesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'games',
            template: __webpack_require__(/*! ./games.component.html */ "./src/app/games/games.component.html"),
            styles: [__webpack_require__(/*! ./games.component.css */ "./src/app/games/games.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GamesComponent);
    return GamesComponent;
}());



/***/ }),

/***/ "./src/app/landing/landing.component.css":
/*!***********************************************!*\
  !*** ./src/app/landing/landing.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/landing/landing.component.html":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  landing works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.css */ "./src/app/landing/landing.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body {\r\n    height: 100%;\r\n    background-image: linear-gradient(to right,#668cff , #38c974);\r\n  }\r\n\r\n  \r\n\r\n  /*\r\n  \r\n  body {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    padding-top: 40px;\r\n    padding-bottom: 40px;\r\n    background-color: #f5f5f5;\r\n  }\r\n\r\n\r\n  #login-btn {\r\n      background-color: hotpink;\r\n  }\r\n  \r\n  .login-form {\r\n    width: 100%;\r\n    max-width: 330px;\r\n    padding: 15px;\r\n    margin: auto;\r\n  }\r\n  \r\n  .login-form .form-control {\r\n    position: relative;\r\n    box-sizing: border-box;\r\n    height: auto;\r\n    padding: 10px;\r\n    font-size: 16px;\r\n  }\r\n  \r\n  .login-form .form-control:focus {\r\n    z-index: 2;\r\n  }\r\n  \r\n  .login-form input[type=\"text\"] {\r\n    margin-bottom: -1px;\r\n    border-bottom-right-radius: 0;\r\n    border-bottom-left-radius: 0;\r\n  }\r\n  \r\n  .login-form input[type=\"password\"] {\r\n    margin-bottom: 10px;\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n  } */\r\n\r\n  \r\n\r\n  ::-moz-selection {\r\n    background-color: #b5e2e7;\r\n  }\r\n\r\n  \r\n\r\n  ::selection {\r\n    background-color: #b5e2e7;\r\n  }\r\n\r\n  \r\n\r\n  ::-moz-selection {\r\n    background-color: #8ac7d8;\r\n  }\r\n\r\n  \r\n\r\n  body {\r\n    background: #3CC;\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n\r\n  \r\n\r\n  .container {\r\n    display: flex;\r\n    height: 100%;\r\n  }\r\n\r\n  \r\n\r\n  #logbox {\r\n    padding: 10px;\r\n    margin: 50px auto;\r\n    margin-left: 70%;\r\n    width: 340px;\r\n    background-color: #fff;\r\n    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);\r\n    text-align: center;\r\n    justify-content: center;\r\n    \r\n  }\r\n\r\n  \r\n\r\n  h1 {\r\n    text-align: center;\r\n    font-size: 175%;\r\n    color: #757575;\r\n    font-weight: 300;\r\n  }\r\n\r\n  \r\n\r\n  h1, input {\r\n    font-family: \"Open Sans\", Helvetica, sans-serif;\r\n  }\r\n\r\n  \r\n\r\n  .input {\r\n    width: 75%;\r\n    height: 50px;\r\n    display: block;\r\n    margin: 0 auto 15px;\r\n    padding: 0 15px;\r\n    border: none;\r\n    border-bottom: 2px solid #ebebeb;\r\n  }\r\n\r\n  \r\n\r\n  .input:focus {\r\n    outline: none;\r\n    border-bottom-color: #3CC !important;\r\n  }\r\n\r\n  \r\n\r\n  .input:hover {\r\n    border-bottom-color: #dcdcdc;\r\n  }\r\n\r\n  \r\n\r\n  .input:invalid {\r\n    box-shadow: none;\r\n  }\r\n\r\n  \r\n\r\n  .pass:-webkit-autofill {\r\n    -webkit-box-shadow: 0 0 0 1000px white inset;\r\n  }\r\n\r\n  \r\n\r\n  .inputButton {\r\n    position: relative;\r\n    width: 85%;\r\n    height: 50px;\r\n    display: block;\r\n    margin: 30px auto 30px;\r\n    color: white;\r\n    background-color: #3CC;\r\n    border: none;\r\n    box-shadow: 0 5px 0 #2CADAD;\r\n  }\r\n\r\n  \r\n\r\n  .inputButton:hover {\r\n    top: 2px;\r\n    box-shadow: 0 3px 0 #2CADAD;\r\n  }\r\n\r\n  \r\n\r\n  .inputButton:active {\r\n    top: 5px;\r\n    box-shadow: none;\r\n  }\r\n\r\n  \r\n\r\n  .inputButton:focus {\r\n    outline: none;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWiw2REFBNkQ7RUFDL0Q7Ozs7RUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQThDRzs7OztFQUtIO0lBQ0UseUJBQXlCO0VBQzNCOzs7O0VBRkE7SUFDRSx5QkFBeUI7RUFDM0I7Ozs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7OztFQUVBO0lBQ0UsZ0JBQWdCO0lBRWhCLGFBQWE7SUFFYixtQkFBbUI7RUFDckI7Ozs7RUFFQTtJQUVFLGFBQWE7SUFDYixZQUFZO0VBQ2Q7Ozs7RUFFQTtJQUNFLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixzQkFBc0I7SUFHdEIseUNBQXlDO0lBQ3pDLGtCQUFrQjtJQUNsQix1QkFBdUI7O0VBRXpCOzs7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7RUFDbEI7Ozs7RUFFQTtJQUNFLCtDQUErQztFQUNqRDs7OztFQUVBO0lBQ0UsVUFBVTtJQUNWLFlBQVk7SUFDWixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixZQUFZO0lBQ1osZ0NBQWdDO0VBQ2xDOzs7O0VBQ0E7SUFDRSxhQUFhO0lBQ2Isb0NBQW9DO0VBQ3RDOzs7O0VBQ0E7SUFDRSw0QkFBNEI7RUFDOUI7Ozs7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjs7OztFQUVBO0lBQ0UsNENBQTRDO0VBQzlDOzs7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7SUFDWixjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsWUFBWTtJQUdaLDJCQUEyQjtFQUM3Qjs7OztFQUNBO0lBQ0UsUUFBUTtJQUdSLDJCQUEyQjtFQUM3Qjs7OztFQUNBO0lBQ0UsUUFBUTtJQUNSLGdCQUFnQjtFQUNsQjs7OztFQUNBO0lBQ0UsYUFBYTtFQUNmIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsIGJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCM2NjhjZmYgLCAjMzhjOTc0KTtcclxuICB9XHJcblxyXG4gIFxyXG5cclxuICAvKlxyXG4gIFxyXG4gIGJvZHkge1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICB9XHJcblxyXG5cclxuICAjbG9naW4tYnRuIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogaG90cGluaztcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2luLWZvcm0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDMzMHB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2luLWZvcm0gLmZvcm0tY29udHJvbCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2luLWZvcm0gLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gIH1cclxuICBcclxuICAubG9naW4tZm9ybSBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xyXG4gIH1cclxuICBcclxuICAubG9naW4tZm9ybSBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxuICB9ICovXHJcblxyXG5cclxuXHJcblxyXG4gIDo6c2VsZWN0aW9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiNWUyZTc7XHJcbiAgfVxyXG4gIFxyXG4gIDo6LW1vei1zZWxlY3Rpb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhhYzdkODtcclxuICB9XHJcbiAgXHJcbiAgYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjM0NDO1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgI2xvZ2JveCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogNzAlO1xyXG4gICAgd2lkdGg6IDM0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIFxyXG4gIH1cclxuICBcclxuICBoMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE3NSU7XHJcbiAgICBjb2xvcjogIzc1NzU3NTtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgfVxyXG4gIFxyXG4gIGgxLCBpbnB1dCB7XHJcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICBcclxuICAuaW5wdXQge1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIGF1dG8gMTVweDtcclxuICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZWJlYmViO1xyXG4gIH1cclxuICAuaW5wdXQ6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICMzQ0MgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmlucHV0OmhvdmVyIHtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNkY2RjZGM7XHJcbiAgfVxyXG4gIC5pbnB1dDppbnZhbGlkIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYXNzOi13ZWJraXQtYXV0b2ZpbGwge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAxMDAwcHggd2hpdGUgaW5zZXQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnB1dEJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDMwcHggYXV0byAzMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNDQztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCA1cHggMCAjMkNBREFEO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDVweCAwICMyQ0FEQUQ7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCAwICMyQ0FEQUQ7XHJcbiAgfVxyXG4gIC5pbnB1dEJ1dHRvbjpob3ZlciB7XHJcbiAgICB0b3A6IDJweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAzcHggMCAjMkNBREFEO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDNweCAwICMyQ0FEQUQ7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCAwICMyQ0FEQUQ7XHJcbiAgfVxyXG4gIC5pbnB1dEJ1dHRvbjphY3RpdmUge1xyXG4gICAgdG9wOiA1cHg7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxuICAuaW5wdXRCdXR0b246Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Login Component! Yay! Woo! Hooray! -->\r\n<!-- \r\n<div class=\"login-form\">\r\n  <h1 class=\"h3 mb-3 font-weight-normal\">Log In</h1>\r\n  <label for=\"username-cred\" class=\"sr-only\">Username</label>\r\n  <input #username type=\"text\" class=\"form-control\" placeholder=\"Username\" required autofocus>\r\n  \r\n  <label for=\"password-cred\" class=\"sr-only\">Password</label>\r\n  <input #password type=\"password\" class=\"form-control\" placeholder=\"Password\" required>\r\n  \r\n  <button id = \"login-btn\" class=\"btn btn-lg btn-primary btn-block\" (click)=\"login(username.value, password.value)\">Log in</button>\r\n  <br>\r\n  <div *ngIf=\"credentialsInvalid\" class=\"alert alert-danger text-center\" id=\"alert-msg\" role=\"alert\">\r\n      Invalid Credentials!\r\n  </div>\r\n  <p class=\"mt-5 mb-3 text-muted\">&copy; Takoot! 2017-2019</p>\r\n</div> -->\r\n\r\n\r\n<div class=\"col-md-6\">\r\n  <div id=\"logbox\">\r\n    <form id=\"login\" action=\"/\">\r\n      <h1>user login</h1>\r\n      <!-- <input #username type=\"text\" class=\"form-control\" placeholder=\"Username\">\r\n      <input #password type=\"password\" class=\"form-control\" placeholder=\"Password\"> -->\r\n      <input #username name=\"user[username]\" type=\"text\" placeholder=\"enter your username\" class=\"input pass\"/> \r\n      <input #password name=\"user[password]\" type=\"password\" placeholder=\"enter your password\" required=\"required\" class=\"input pass\"/>\r\n      <input (click)=\"login(username.value, password.value)\" type=\"submit\" value=\"Let's play some games!\" class=\"inputButton\"/>\r\n      <br>\r\n      <div *ngIf=\"credentialsInvalid\" class=\"alert alert-danger text-center\" id=\"alert-msg\" role=\"alert\">\r\n        Invalid Credentials!\r\n    </div>\r\n    <br>\r\n      <div class=\"text-center\">\r\n          <a routerLink=\"/register\" id=\"\">not registered?</a>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n<!--\r\n\r\n  add in toggle tips for each input field\r\n\r\n  data-toggle=\"tooltip\" data-placement=\"top\" title=\"Tooltip on top\">\r\n  Tooltip on top\r\n-->\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _models_credentials__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/credentials */ "./src/app/models/credentials.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        // calling the method isAuthenticated$ from the auth service
        this.isAuthenticated$ = this.authService.isAuthenticated$;
        // creating variable, credentialsIsInvalid of type boolean
        this.credentialsInvalid = false;
        console.log('LoginComponent constructed!');
    }
    LoginComponent.prototype.login = function (username, password) {
        var _this = this;
        // credentials is a new Credentials class/object that takes in username and password
        this.credentials = new _models_credentials__WEBPACK_IMPORTED_MODULE_4__["Credentials"](username, password);
        // use authservice's method to authenticate the credentials we just passed
        this.authService.authenticate(this.credentials);
        // subscribing because it is an observable, it continuously returns objects
        this.isAuthenticated$.subscribe(function (isAuth) {
            if (isAuth) {
                _this.credentialsInvalid = false;
                _this.router.navigate(['services']);
            }
        }, function (err) {
            _this.credentialsInvalid = true;
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/models/credentials.ts":
/*!***************************************!*\
  !*** ./src/app/models/credentials.ts ***!
  \***************************************/
/*! exports provided: Credentials */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Credentials", function() { return Credentials; });
// this file represents the Credentials Class
// the Credentials class is associated with the AuthService and the LoginComponent.ts
var Credentials = /** @class */ (function () {
    function Credentials(username, password) {
        this.username = username;
        this.password = password;
    }
    return Credentials;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-brand, #nav-item {\r\n    color:white;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci1icmFuZCwgI25hdi1pdGVtIHtcclxuICAgIGNvbG9yOndoaXRlO1xyXG59XHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- This is the NavBar! Yay! Hooray! -->\r\n\r\n\r\n\r\n  <nav id = \"navbar-main\" class=\"navbar navbar-expand-md navbar-light fixed-top\" style=\"background-color:blueviolet\">\r\n    <a class=\"navbar-brand\" href=\"#\">Takoot</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\r\n      <div class=\"navbar-nav\">\r\n        <a class=\"nav-item nav-link active\" routerLink=\"\">Home <span class=\"sr-only\">(current)</span></a>\r\n        <a class=\"nav-item nav-link\" routerLink=\"/dashboard\">Dashboard</a>\r\n        <a class=\"nav-item nav-link\" routerLink=\"/games\">Games</a>\r\n        <a class=\"nav-item nav-link justify-content-end\" routerLink=\"/login\">Login</a>\r\n        <a class=\"nav-item nav-link justify-content-end\" routerLink=\"/register\">SignUp</a>\r\n      </div>\r\n    </div>\r\n   </nav>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/questions/questions.component.css":
/*!***************************************************!*\
  !*** ./src/app/questions/questions.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0aW9ucy9xdWVzdGlvbnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/questions/questions.component.html":
/*!****************************************************!*\
  !*** ./src/app/questions/questions.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  questions works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/questions/questions.component.ts":
/*!**************************************************!*\
  !*** ./src/app/questions/questions.component.ts ***!
  \**************************************************/
/*! exports provided: QuestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsComponent", function() { return QuestionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var QuestionsComponent = /** @class */ (function () {
    function QuestionsComponent() {
    }
    QuestionsComponent.prototype.ngOnInit = function () {
    };
    QuestionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'questions',
            template: __webpack_require__(/*! ./questions.component.html */ "./src/app/questions/questions.component.html"),
            styles: [__webpack_require__(/*! ./questions.component.css */ "./src/app/questions/questions.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], QuestionsComponent);
    return QuestionsComponent;
}());



/***/ }),

/***/ "./src/app/quiz/quiz.component.css":
/*!*****************************************!*\
  !*** ./src/app/quiz/quiz.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\r\n    list-style-type: none;\r\n    margin: 0;padding: 0;\r\n}\r\n\r\nli {\r\n    background: rgb(238, 238, 238);\r\n    padding: 2em;\r\n    border-radius: 4px;\r\n    margin-bottom: 7px;\r\n}\r\n\r\n\r\n\r\n       \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVpei9xdWl6LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsU0FBUyxDQUFDLFVBQVU7QUFDeEI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9xdWl6L3F1aXouY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIG1hcmdpbjogMDtwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5saSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjM4LCAyMzgsIDIzOCk7XHJcbiAgICBwYWRkaW5nOiAyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbn1cclxuXHJcblxyXG5cclxuICAgICAgIFxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/quiz/quiz.component.html":
/*!******************************************!*\
  !*** ./src/app/quiz/quiz.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- not working -->\r\n\r\n<h1>\r\n  Quiz\r\n</h1>\r\n\r\n<!-- here, add in your logic for displaying the quiz -->\r\n\r\n<!-- use interpolation for the h1 to put the quiz number in-->\r\n\r\n<!-- this is formatted to display quizzes  -->\r\n\r\n<ul *ngIf=\"quizzes\">\r\n  <li *ngFor=\"let quiz of quizzes.results\">\r\n    <p>{{ quiz.question }}}</p>\r\n    <ul>\r\n      <li> <input type=\"radio\" name =\"wrong\"> {{ quiz.correct_answer }} </li>\r\n      <li *ngFor=\"let answer of quiz.incorrect_answers\"> <input type=\"radio\" name = \"wrong\"> {{ answer }} </li>\r\n    </ul>\r\n  </li>\r\n</ul>"

/***/ }),

/***/ "./src/app/quiz/quiz.component.ts":
/*!****************************************!*\
  !*** ./src/app/quiz/quiz.component.ts ***!
  \****************************************/
/*! exports provided: QuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizComponent", function() { return QuizComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");



var QuizComponent = /** @class */ (function () {
    function QuizComponent(results) {
        this.results = results;
    }
    QuizComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.results.playQuiz().subscribe(function (results) {
            _this.quizzes = results;
        });
    };
    QuizComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'quiz',
            template: __webpack_require__(/*! ./quiz.component.html */ "./src/app/quiz/quiz.component.html"),
            styles: [__webpack_require__(/*! ./quiz.component.css */ "./src/app/quiz/quiz.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], QuizComponent);
    return QuizComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body {\r\n    height: 100%;\r\n  }\r\n  \r\n  /* body {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    padding-top: 40px;\r\n    padding-bottom: 40px;\r\n    background-color: #f5f5f5;\r\n  }\r\n\r\n  #register-btn {\r\n      background-color: hotpink;\r\n  }\r\n  \r\n  .register-form {\r\n    width: 100%;\r\n    max-width: 330px;\r\n    padding: 15px;\r\n    margin: auto;\r\n  }\r\n  \r\n  .register-form .form-control {\r\n    position: relative;\r\n    box-sizing: border-box;\r\n    height: auto;\r\n    padding: 10px;\r\n    font-size: 16px;\r\n  }\r\n  \r\n  .register-form .form-control:focus {\r\n    z-index: 2;\r\n  }\r\n  \r\n  .register-form input[type=\"text\"] {\r\n    margin-bottom: -1px;\r\n    border-bottom-right-radius: 0;\r\n    border-bottom-left-radius: 0;\r\n  }\r\n  \r\n  .register-form input[type=\"password\"] {\r\n    margin-bottom: 10px;\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n  } */\r\n  \r\n  ::-moz-selection {\r\n    background-color: #b5e2e7;\r\n  }\r\n  \r\n  ::selection {\r\n    background-color: #b5e2e7;\r\n  }\r\n  \r\n  ::-moz-selection {\r\n    background-color: #8ac7d8;\r\n  }\r\n  \r\n  body {\r\n    background: #3CC;\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n  \r\n  .container {\r\n    display: flex;\r\n    height: 100%;\r\n  }\r\n  \r\n  #logbox {\r\n    padding: 10px;\r\n    margin: 50px auto;\r\n    margin-left: 70%;\r\n    width: 340px;\r\n    background-color: #fff;\r\n    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);\r\n    text-align: center;\r\n    justify-content: center;\r\n    \r\n  }\r\n  \r\n  h1 {\r\n    text-align: center;\r\n    font-size: 175%;\r\n    color: #757575;\r\n    font-weight: 300;\r\n  }\r\n  \r\n  h1, input {\r\n    font-family: \"Open Sans\", Helvetica, sans-serif;\r\n  }\r\n  \r\n  .input {\r\n    width: 75%;\r\n    height: 50px;\r\n    display: block;\r\n    margin: 0 auto 15px;\r\n    padding: 0 15px;\r\n    border: none;\r\n    border-bottom: 2px solid #ebebeb;\r\n  }\r\n  \r\n  .input:focus {\r\n    outline: none;\r\n    border-bottom-color: #3CC !important;\r\n  }\r\n  \r\n  .input:hover {\r\n    border-bottom-color: #dcdcdc;\r\n  }\r\n  \r\n  .input:invalid {\r\n    box-shadow: none;\r\n  }\r\n  \r\n  .pass:-webkit-autofill {\r\n    -webkit-box-shadow: 0 0 0 1000px white inset;\r\n  }\r\n  \r\n  .inputButton {\r\n    position: relative;\r\n    width: 85%;\r\n    height: 50px;\r\n    display: block;\r\n    margin: 30px auto 30px;\r\n    color: white;\r\n    background-color: #3CC;\r\n    border: none;\r\n    box-shadow: 0 5px 0 #2CADAD;\r\n  }\r\n  \r\n  .inputButton:hover {\r\n    top: 2px;\r\n    box-shadow: 0 3px 0 #2CADAD;\r\n  }\r\n  \r\n  .inputButton:active {\r\n    top: 5px;\r\n    box-shadow: none;\r\n  }\r\n  \r\n  .inputButton:focus {\r\n    outline: none;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7RUFDZDs7RUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQTJDRzs7RUFHSDtJQUNFLHlCQUF5QjtFQUMzQjs7RUFGQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUVoQixhQUFhO0lBRWIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBRUUsYUFBYTtJQUNiLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixzQkFBc0I7SUFHdEIseUNBQXlDO0lBQ3pDLGtCQUFrQjtJQUNsQix1QkFBdUI7O0VBRXpCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsK0NBQStDO0VBQ2pEOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFlBQVk7SUFDWixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixZQUFZO0lBQ1osZ0NBQWdDO0VBQ2xDOztFQUNBO0lBQ0UsYUFBYTtJQUNiLG9DQUFvQztFQUN0Qzs7RUFDQTtJQUNFLDRCQUE0QjtFQUM5Qjs7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLDRDQUE0QztFQUM5Qzs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixZQUFZO0lBR1osMkJBQTJCO0VBQzdCOztFQUNBO0lBQ0UsUUFBUTtJQUdSLDJCQUEyQjtFQUM3Qjs7RUFDQTtJQUNFLFFBQVE7SUFDUixnQkFBZ0I7RUFDbEI7O0VBQ0E7SUFDRSxhQUFhO0VBQ2YiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCwgYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIGJvZHkge1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICB9XHJcblxyXG4gICNyZWdpc3Rlci1idG4ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBob3RwaW5rO1xyXG4gIH1cclxuICBcclxuICAucmVnaXN0ZXItZm9ybSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMzMwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxuICBcclxuICAucmVnaXN0ZXItZm9ybSAuZm9ybS1jb250cm9sIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuICBcclxuICAucmVnaXN0ZXItZm9ybSAuZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgfVxyXG4gIFxyXG4gIC5yZWdpc3Rlci1mb3JtIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcclxuICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5yZWdpc3Rlci1mb3JtIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG4gIH0gKi9cclxuXHJcblxyXG4gIDo6c2VsZWN0aW9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiNWUyZTc7XHJcbiAgfVxyXG4gIFxyXG4gIDo6LW1vei1zZWxlY3Rpb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhhYzdkODtcclxuICB9XHJcbiAgXHJcbiAgYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjM0NDO1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgI2xvZ2JveCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogNzAlO1xyXG4gICAgd2lkdGg6IDM0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIFxyXG4gIH1cclxuICBcclxuICBoMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE3NSU7XHJcbiAgICBjb2xvcjogIzc1NzU3NTtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgfVxyXG4gIFxyXG4gIGgxLCBpbnB1dCB7XHJcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICBcclxuICAuaW5wdXQge1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIGF1dG8gMTVweDtcclxuICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZWJlYmViO1xyXG4gIH1cclxuICAuaW5wdXQ6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICMzQ0MgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmlucHV0OmhvdmVyIHtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNkY2RjZGM7XHJcbiAgfVxyXG4gIC5pbnB1dDppbnZhbGlkIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYXNzOi13ZWJraXQtYXV0b2ZpbGwge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAxMDAwcHggd2hpdGUgaW5zZXQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnB1dEJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDMwcHggYXV0byAzMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNDQztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCA1cHggMCAjMkNBREFEO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDVweCAwICMyQ0FEQUQ7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCAwICMyQ0FEQUQ7XHJcbiAgfVxyXG4gIC5pbnB1dEJ1dHRvbjpob3ZlciB7XHJcbiAgICB0b3A6IDJweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAzcHggMCAjMkNBREFEO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDNweCAwICMyQ0FEQUQ7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCAwICMyQ0FEQUQ7XHJcbiAgfVxyXG4gIC5pbnB1dEJ1dHRvbjphY3RpdmUge1xyXG4gICAgdG9wOiA1cHg7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxuICAuaW5wdXRCdXR0b246Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- RegisterComponent! Yay! Woo! Hooray! -->\r\n\r\n\r\n<!-- <div class=\"register-form\">\r\n  <h1 class=\"h3 mb-3 font-weight-normal\"> Sign Up with Takoot!</h1>\r\n\r\n  <label for=\"fn-cred\" class=\"sr-only\">First Name</label>\r\n  <input #fn type=\"text\" class=\"form-control\" placeholder=\"First Name\" required autofocus>\r\n  \r\n  <label for=\"ln-cred\" class=\"sr-only\">Last Name</label>\r\n  <input #ln type=\"text\" class=\"form-control\" placeholder=\"Last Name\" required autofocus>\r\n  \r\n  <label for=\"email-cred\" class=\"sr-only\">Email</label>\r\n  <input #email type=\"text\" class=\"form-control\" placeholder=\"Email\" required autofocus>\r\n  \r\n  <label for=\"username-cred\" class=\"sr-only\">Username</label>\r\n  <input #username type=\"text\" class=\"form-control\" placeholder=\"Username\" required autofocus>\r\n  \r\n  <label for=\"password-cred\" class=\"sr-only\">Password</label>\r\n  <input #password type=\"password\" class=\"form-control\" placeholder=\"Password\" required>\r\n  \r\n  <button id = \"register-btn\" class=\"btn btn-lg btn-primary btn-block\">Sign Up</button>\r\n  <br> -->\r\n  <!-- <div *ngIf=\"credentialsInvalid\" class=\"alert alert-danger text-center\" id=\"alert-msg\" role=\"alert\">\r\n      Invalid Credentials!\r\n  </div> -->\r\n  <!-- <p class=\"mt-5 mb-3 text-muted\">&copy; Takoot! 2017-2019</p>\r\n</div> -->\r\n\r\n\r\n<div class=\"container\">\r\n  <div class=\"col-md-6\">\r\n  <div id=\"logbox\">\r\n    <form id=\"signup\" action=\"/\">\r\n      <h1>Create An Account</h1>\r\n      <input #fn name=\"user[fn]\" type=\"text\" placeholder=\"What's your first name?\" autofocus=\"autofocus\" required=\"required\" class=\"input pass\"/>\r\n      <input #ln name=\"user[ln]\" type=\"text\" placeholder=\"What's your last name?\" autofocus=\"autofocus\" required=\"required\" class=\"input pass\"/>\r\n      <input #username name=\"user[username]\" type=\"text\" placeholder=\"What's your username?\" pattern=\"^[\\w]{3,16}$\" autofocus=\"autofocus\" required=\"required\" class=\"input pass\"/>\r\n      <input #password name=\"user[password]\" type=\"password\" placeholder=\"Choose a password\" required=\"required\" class=\"input pass\"/>\r\n      <input #confirm name=\"user[password2]\" type=\"password\" placeholder=\"Confirm password\" required=\"required\" class=\"input pass\"/>\r\n      <input #email name=\"user[email]\" type=\"email\" placeholder=\"Email address\" class=\"input pass\"/>\r\n      <input type=\"submit\" value=\"Sign me up!\" class=\"inputButton\"/>\r\n      <div class=\"text-center\">\r\n          already have an account? <a routerLink=\"/login\" id=\"login_id\">login</a>\r\n      </div>\r\n    </form>\r\n  </div>\r\n </div>\r\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/token.interceptor.ts":
/*!**************************************!*\
  !*** ./src/app/token.interceptor.ts ***!
  \**************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/*
    You may be asking, what is a Token Interceptor?

    Well let me tell ya!

    It is an HTTP Interceptor that attaches JWT tokens to requests to the backend API
    within an Authorization HTTP header.

    Basically, intercepts an HttpRequest or HttpResponse and handles them.

 */



// specifying this as able to be injected into other objects
var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor() {
        console.log('TokenInterceptor constructed');
    }
    // intercepts takes in two parameters: (1) the outgoing request to handle, HttpRequest
    // and (2) the next interceptor in the chain
    TokenInterceptor.prototype.intercept = function (request, next) {
        console.log('HTTP request intercepted!');
        // let token equal the jwt item from storage
        var token = window.localStorage.getItem('jwt');
        // if the user hits our endpoint and the token is true, attach the JWT
        if (request.url.indexOf(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL) >= 0 && token) {
            console.log('Attaching JWT to Authorization header...');
            request = request.clone({
                setHeaders: {
                    Authorization: token
                }
            });
            console.log('JWT attached!');
        }
        console.log('Sending HTTP request to HttpHandler');
        return next.handle(request);
    };
    TokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TokenInterceptor);
    return TokenInterceptor;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    API_URL: 'http://localhost:8080/Takoot-Back/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\maraz\Documents\Revature\Project-2-Takoot\Takoot-Front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map