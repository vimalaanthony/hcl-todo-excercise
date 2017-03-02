"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('../login/login.component');
var todos_component_1 = require('../todos/todos.component');
var appRoutes = [
    { path: '', component: login_component_1.LoginComponent },
    { path: 'todos', component: todos_component_1.TodosComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.route.js.map