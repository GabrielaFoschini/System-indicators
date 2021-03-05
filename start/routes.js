'use strict'

// const { get } = require('@adonisjs/framework/src/Route/Manager');

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Route.on('/').render('welcome')
Route.on('/').render('batata')

// Get all
Route.get('/User', 'UserController.list');
Route.get('/Indicators', 'IndicatorController.list');
Route.get('/Role', 'RoleController.list');
Route.get('/IndicatorMember', 'IndicatorMemberController.list');

// Get One
Route.get('/User/:id', 'UserController.show');
Route.get('/Indicators/:id', 'IndicatorController.show');
Route.get('/Role/:id', 'RoleController.show');
Route.get('/IndicatorMember/:id', 'IndicatorMemberController.show');

// Post all
Route.post('/User', 'UserController.adding');
Route.post('/Indicators', 'IndicatorController.adding');
Route.post('/Role', 'RoleController.adding');
Route.post('/IndicatorMember', 'IndicatorMemberController.adding');

// Put One
Route.put('/User/:id', 'UserController.update');
Route.put('/Indicators/:id', 'IndicatorController.update');
Route.put('/Role/:id', 'RoleController.update');
Route.put('/IndicatorMember/:id', 'IndicatorMemberController.update');

// Delete One
Route.delete('/User/:id', 'UserController.remove');
Route.delete('/indicators/:id', 'IndicatorController.remove');
Route.delete('/Role/:id', 'RoleController.remove');
Route.delete('/IndicatorMember/:id', 'IndicatorMemberController.remove');