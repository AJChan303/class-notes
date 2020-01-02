JavaScript

var and let

var - is global unless it is inside a function, then it is function scoped

let - makes a variable block scoped

PRimary use to manipulate the dom

JS is interpretted whereas C# is compiled
in <head>
<script lang = "JavaScript">
function
</script>
	JQuery UI an important jquery plugin

keyword THIS... Means this object
script tag can aslo go inside the body but it usually goes at the bottom 
Dynamicaly typed. Any JS variable can hold any type
easier to learn increases errors
Derivitive of C
Made to grant interactivity to websites
no compiler. executed from source everytime.
; - in JS has a little bit of a different meaning. not a statement terminator.
end of line = statements is done
; is required when you want 2 statements on one line.
undefined kinda like null
keyword
	typeof - tells you type
types
	scalar
		number - only type of nummber includes ints doubles floats...
		string -
		boolean
	reference
		object - just means it holds more than one peice of data or 
			array - calls it an object. position in storage works like c#. 
				no restriction all items need to be the same type
				var a[] - can do a.push(what ur adding)
				.pop() takes out the last one in the array
			{}  similar to dictionaries in c#  has a key value  that matches to another object
				ex. a ["OH"] = "Ohio"
				ex.var ohio = a["OH"]
					undefined
					ohio
					"Ohio"
				ex. var key = "OH"
					undefined
					a[key]
					"Ohio"
				ex. a.KY
					"Kentucky"
				ex. a.KY = "The Blue Grass State" //to set value of key	

				ex.companies[1].city
					"Seattle"
					companies[1]["city"]
					"Seattle"	
		var x = 1
		undefined
		var y = 1
		undefined
		x==y
		true

		 var x = 1
		undefined
		var y = "1"
		undefined
		x == y
		true

		"1" + 1
			"11"
			+ is concat if there is a string involved
			When JS finds 2 things that are not of the same type. if they are not the same JS tries to make them the same by converting one to the type of the other.  A number can always be turned into a string that's why it works.

		=== - JS introduce another equality check. checks the original types of the 2 items being checked. if the types are different they will never be the same.
		x === y 
		false 
		==interpolation==
		`Idxx is ${idxx}` interpolation

		java foreach is a for statement uses of instead of in
			in brings back index
		ex.
		for(var fred of [1, 2, 3]) { console.log(` item is ${fred}`)}
		ex.
		for(var fred in ['a', 'b', 'c']) { console.log("item is " + fred)}
		 item is 0
		 item is 1
		 item is 2
	==creating functions==
	ex . 
	function add1(nbr){
	return nbr +1;
	}
	 attribute 
	  on indicates an event
	  onclick = to execute a function
	  	onclick = "add1()"
	  OnLoad="loaded()"
	 websites don't work like programs constantly running most of the time they are waiting for the user to input something
	 mouse events
	 	onlick ondoubleclick
	 	onmouseover
	 	onmouseout
	 Keyboard
	 	Onkeydown
	 	onkeyup
	 	onkeypress
	 Drag/Drop events
	 	ondrag
	 	ondrop
	 	ondragenter
	 	ondragleave
	 	ondragstart
	 	ondragend
	 Form events
	 	onsubmit
	 	onreset
	 	onchange
	 	oninput
	 	oninvalid
	 Andmore
	 	oncopy 
	 	onpaste
	 	oncut
	 	ononline
	 	onoffline
	 	onwheel






ex. simple JS script to add 1 to input
<!DOCTYPE html>
<html lang="en">
<head>
    <script lang = "JavaScript">
        function add1(){
            console.log("run the add1 function");
            var inputCtrl = document.getElementById("nbr");
            var nbr = inputCtrl.value;
            console.log("nbr is ", nbr);
           
            var outputCtrl = document.getElementById("ans");
            outputCtrl.value = Number(nbr) + 1;
        }
    </script>

    <title>JavaScript</title>
</head>
<body>
    <label>Number:</label>
    <input type = "text" value = "0" id = "nbr">
    <label>Answer:</label>
    <input type = "text" name = "ans" id ="ans">
    <button onclick = "add1();">Add</button>
</body>
</html>



For of 

querySelector()
ex
document.querySelector("div.upcoming-events-section div.row:first-child")
Function can be used instaed of the getElementBy functions because you can specify class tags as well as element tags and child selectors



JAVASCRIPt uses CamelCase for Everything

var f = function (t){work here}
this is called an anonymous function



Bubbling
	Events will bubble up to alllllllll parents of the event andthis can be stopped by using the event.stopPropagation();

	You will only need to stop the event bubbling if you are using multiple on click events


appendChild();
alement.appendChild('newElement'); 
element.appendChilde{newElement, Old element);
	placing something inside the element
}

JQuery

3rd party library
written in JS 
It is a single function "JQuery" and i most often accessed with an alias of "$"

is primarily used to "query" the DON to fin elements and then perform an action against them

includes a libraryy of helper funciton such as "$.ajax()"

$().ready(yourStartupFunction)

$("table")

$("someID")

$(".someclassname")
$(".sitenaveA")

var t = $("table").css("border,"solid red 2px").filter(".products").css("background","lightgray")

var t would hold the tables that are filtered with the class name products

can add normal js to the jquery
	$('.gridt1').html(
	function(index,oldhtml){return oldhtml.replace(/&lt;/g,'<'.replace(/&gt;g/g,'>')
	)})



	.each()
displaying a message for each table
	$("table").each(funciton(){alert("table has" + this.rows.length+ "rows")})



Add elements around exsisting context
	.wrap
	.unwrap()
	.wrapAll()
	.wrapInner()
add elements inside of existing elements 
	.append()
	.appendTo()
		.html()
		.prepend()
		.prependTo()
		.text()
add new content ousdie an existing element
	.after()
	.before()
	.insertAfter()
	.insertBefore
Remove elements
	.detach()
	.empty()
	.remove()
	.unwrap()
CopyElements
	.clone()

Effects and animation
	Basic
		.hide()
		.shsow()
		.toggle()
	Fading
		.fadeIn()
		.fadeOut()
		.fadeTo()
		.fadeToggle()
	Sliding
		.slideUp()
		.slideDown()
		.slideToggle()

Misc
	$.each()
	$.now()
	$.parseXML
	$.trim
	$.type()
	$.makeArray()
	$.map()
	$.merge()
	$.isArray()
	$.inArray()


in c:repos/java
	create a calculator folder/project
	configure like the example on page 20
	hardcode typed variables 
	perform basic math functions  + - / * % 

	Create a factorial loop


Typescript
	const flag a value as a constant
	tsc -v checks if u have ts installed and version
	npm install -g typescript // installs TS globally on your machine
	superset of javascript created by microsoft
	Provides stronger type checking in development mode for 
		properties
		method parameters
		method return values
	Is transpiled (compiled) into Js
	plugin available for many programer editers

	declaring a variable 
		let a:number=5

	Typescript must be transpiled into Js so that browsers can understand it.
	transpiling does not syntax check or logically check code
	It will R-squig some errors

	TS is easily installed by NPM or node package manager
	NPM is provided with nodejs
	nmber of supporting npm packages make building applications with ts much more productive

	executing tsc will turn any ts file into a js file
		tsc hi.ts =>hi.js
		tsc *.ts =>*.js
		tsc -w 	//take your git bash session and watc hthat folder and transpile the ts files
			it takes up the process of the git bash
		tsconfig.json (in project root)
			compilerOptions
				outDir:"js"
			include:["ts/**.*"]
Function
	function Add(p1:number, p2 :number): number {return p1+p2;}
		:number // after the parameters is the return type of the function

 class
 	Defines objects that bind the properties and the funcitons that operate on those properties
 	May only have a single constructor
 		class Square {
 			side: number;
 			constructor(side:number =1) {
 				this.side= side;}

 				area():number{
 				 return this.side*this.side;}
 			}
 		}

 	Can set Defaults inside the constructors

	 Getters/setters
	 	instead of exposing perperties directly, using getter and setting functions provides more controll
	 		class Customer {
	 			private _name:string;
	 			get name() {
	 				return this._name;
	 			}
	 			set name (aName: string) {
	 				this._name = aName;
	 			}
	 			}
	 		}

	 Import export
	 	export class Boat {...}

	 	//import boat.ts
	 	import {Boat} from './Boat'

	Naming Conventions for Angular 
		If you have a class for boats it might look like
			boat.class.ts
	 considered components
		boat.component.ts
		boat-list.component.ts

Modules 
	blocks of code executed within a defined scope rather the global scope
	Must have exported soe of the code objects 



ADDING MODULES TO TS
	npm i @types/node  /* allows the use of modules */
	npm i --save [modulename]

	add the to Ts file " var variable = require(["modulename"])"

Creating a Typescript project - make a new folder
	uses subfolders js,ts
	initialize root folder as tsc --init
	modify tsconfig.json to change outDir and "...}, 'includes' = ['ts/**/*]"
	Create TS file
	Add your modules 
	Run TSC -w 
	Make sure you save your work
	run your program

TS makes it so you can write js AS A Strongly Typed Language

	void function return
	lets vs var 
	 constant variables
	 classes access modifiers getters/setters
	 Generic collections
Types added
	types are declared by adding:
	functions can now can define a return value : after the ()
		number
			all numbers are floating position
				int
				decimal
				engineer
		string
			surrounded by single or double
			`` backtick char can surround strings spanning multiple lines
			can use interpolation with ${a} within a string must use back ticks for interpolation ``

		boolean 
		array
			let friends:Array<Friend> = [s1,s2,s3,s4,s5,s6,s7];
		declared 2 ways
			let nums :number[] = [1, 2, 3];
			let names: <Array>string = {}
		object
			collection of key value pairs
		enum
		Any
			declares any type as valid
		void
		null
			absence of a value
		undefined
			value has never been assigned



HW Enhance the stuffy dispenser
	-Create a few stuffies 
	-store in an array
	-Prompt user for ID to get
	-get stuffy from array and print

FriendsList slide 49
	








====Node====
	no window there is a global tag instead
	running on you local machine not on you browser
	programming with node means creating processes on your machine

	you can execute commands directly on your machine directly from within node

	modules - how you load one file into another

	./   -- looking for a file in the same directory
		syntax in JS for relative file paths

	npm download and manage packages

	npm install underscore

	npm init // saves the package you installed 

	allows the maintenance of dependancies in node projects

var whatever = require('modulename');
	this is like a using statement making a call to a library to access its functions








======Angular===========================================
	npm i -g @angular/cli
	JS can be used but typescript is recommended
	Component based framework
	components are completely self contained units that should perform a single function and render a portion of the page
		tree like structure with a single component being the root and all other components based on the root
	Angular JS works as a single webpage that changes based on the component1! neat

	An angular app is a module which is a collection of other modules componenets pipes services and other angular objects

	applications consist of primarily of a hierarchy of components that are grouped into modules
		All angular object or components consist of 
			imports
			a decorator
			a class
	This is a framework need to follow conventions with naming and file layout



	{{}} inside is a variable we want to print to the screen-  1 way binding


	When app runs, meta dat designates one or more components to execute
	other components are executed when they are:
		loaded based on route in SPA or single page applications based on the selector or url within the angular application

		referenced within an existing, loaded component

	SPA or SINGLE PAGE APPLICATION 
		angulare makes it easy to create spa's
			typically only a single html page with all the html tags common to every page
			html fragments or views that get injected into the html page based on the browser router
		SPA tend to minimize network traffic to the server with much of the work done in js on the client

	Architechture of a SPA app
		most pages follow a set architecture with certain elements changed based on the components called
		we call this area changed the content area
		the views when selected are dynamically loaded
		ex.. clicking customer list would change content area to A list of customers Etc 


Example
	Components for app component
		app.Component ts file
		app.component html file
		app.component css file
		app.component spec file

	components are made of 
		 imports of other classes
		 	@component ({...}) decoratoor
		 		selector
		 		template or html
		 		styles or css 
		 	a class
		 Each component has a single parent component
		 child component include slector (psuedo-html-tag) in parent html


	uses import (using is c#)
		import {Component } from '@angular/core';
		@Component({
			template: 
			<button (click)='setname()'> SetTheName</button>
			<p> The {{name}} worked!</p>

		})
		export class MenuComponent {
			name: string ='';
			setName(): void {
			this.name = 'This Angular MenuComponent';
			}
		}

		@ attribute anotation

		ex import 
		import {UserListComponent} from './user-list/user-list.component'



===Using Command Line interface =====
	uses windows.cmd.exe, git bashs shell, mac terminal
		to create project
			and generate components
		define folder structure
		install modules 
		provide a webserver
		provide a base webapp

		GENERATE components

	The CLI will promp for some frequently used options :routing & css

	Formate to execute commands
		ng [commmand] [options] // where command is required and options vary by command
			ex >ng new my-first-angular-project // creating a new ng project
			angular.io 
	NODE must be installed in order to use angular
		npm i -g @angular/cli 
	HELP 
		ng help new
		ng [command] --help
			for more concise help
		ng new <options...>[name]
			Creates a new directory
			The name parameter should is required and should be lowercase and without space or special characters SPINAL CASE is suggested
		The options are
			directory (--directory, -dir): the directory to create the project in. Defaults to the creating a new directory named the same as the project under the current directory
		NG NEW will initialize a folder as a git repos
			the Remote will still need to be activated 
		BETTER PRACTICE to create the ng new in the Folder you want thhe new project to be sitting

		Routing 
			(--routing) Causes a routing module to be generated within the project

	==Creating mew objects ==
		>ng (g)enerate [blueprint] [name]
			Blueprints
				(cl)ass // pretty like will ususally only generate the file and a header maybe
				(c)omponent 
				(g)uard
				(m)odules
				(p)ipe // Creates files with stock code making references to other files
				(s)ervice // ''

		ex creating user list
			>ng g c user-list
				it will create user-list.component.ts / css / html / spec
		>ng generate component [option] [name]

			Most angular projects have many components and all must be defined to a module( see Module)

			Creates a new subfolder with component name

			Generating a component not only creates, but also imports it and makes it known the associated application  module

		Generating a module
			>ng generate module [name] [option]
				a module is a grouping of componenets, services, pipes and other modules

		Generate services
			>ng generate service [option] [name]
			Creates a service and adds it to the module

		Build and run project (serve)
			ng serve [option]
				Does a build and starts the project
				-o option opens the browser or tab and monitors the source files refreshing the browser after an save
				Takes over the command window and will refresh in realtime


CReating a project example
	>ng new hello-world --routing 
		<Successfully initialized git 
	>cd hello-world
	>ng serve -o
		Change app.component 'Title' property to 'Hello,World'

<app-root></app-root>  The selector in the app @component


app.component.ts and app.component.html Are bound together both being a peice of the app component So One way binding works between the 2 

Virtually every file in ng contains a class that has been exported
 To se one class in another class the class muct be imported whcih references
 	the file containing the class (user-list.component.ts)
 	The class name itself (UserListComponent)
 	File path is relative to path of the current file
 File path is relative to path of current files
 	import {UserListComponent} from '.user-lsit/user-list.component';


==Decorators
	Provide meta data for the data thats proceeding
	All decorators begin with @ singleClasses are different types because of the decorators they use (eg it is a component)
	Many decorators take a JSON object as a parammeter
	ex @Component({
		...: "..."
	})
	Parameters vary by decorators 
	they do not end with ;

	Classes and ts file
		All objects in angular are classesclasses must be exported using the export keyword

		export class AbcComponent implements
			OnInit {
				counter; // property
				print() {} // method
				constructor(){} // constructors
				ngOnInit(){} // life cycle method

			}

			The differences between C# and TS
				All object are public by Defaults
				only one constructor is allowed




		======Modules=====
			module is an object in angular that groups comeponents, services and other object together
			All UI object must belong to a moduleAll application have root module
			all modules are marked with @NgModule decorator:
				declaration: component class names
				imports: module class names
				providers: service class names
				bootstrap: component class name started at run time

		===Components===
		Components are the promary objects that render data on the page
		Tyical component will containing	
			imports 
			the @Component decorator
			aclass 
		The html and css can be provided by:
		pointing to a single file containing html or an array of files containing css
		The html or css embedded in the file 
		Objects become components when they have the @Component decorator
			options:
				slector:
				templateurl
				styleurls
		===Selectors===
		An identifier for the component
		used by embedding the selector as a psuido html tag in another components html
		always has an opening an closing tag
		selected name should always include a -
		<div>
			<app-comp></app-comp>
		</div>


		====Data binding
			In ng the data is bound to interface objects in either a oneway or twoway method
			1 way read only
				let name:string ="Max"
				<p>{{name}}</p>

			2 way update
				<input[(ngModel)]="name" type =text>
				
			In both cases the "name" is the property of the component

ANGULAR PROGRAMMING syntax
	IF

		<p *ngIf ='display == true'> This property is displayed only if the display property is true</p>
	For
		<tr *ngFor="let user of users">
			<td>Name</td><td>user.fname</td>
			<td>City</td><td>user.city</td>
		</tr>
	switch
		<div [ngSwitch]='abcValue'>
			<p *ngSwitchCase='a'>Display a</p>
			<p *ngSwitchCase='b'>Display b</p>
			<p *ngSwitchCase='c'>Display c</p>
	ngClass (CSS Class)
	<div [ngClass] ="classvalues">... </div>

===expression Context
<p [hidden]="!canView">...</p>

<button [disabled]="isDisabled">...</button>

<img [src] ="imageUrl">

Events 
	Definens function to be executed when events on html tag fire 
	can pass data to the function
	<button (click)='log()'>...</button>

Life of Web program
	1 Initialization
	2 activity action
	3 Destroy







HW--- 1 way 2 way Fields   
new angular app superhero friends list

Superheroes:
<div>
asfasdfasdfa
asfasdfasdfaasdf
adsfasdf</div>

Add superhero
 click add and it will ad it to the display list

 Star wars style text
//
 ng Services==========================================
	ng is going to require services that math up with the we api services from the backend
	ex
	user.service.ts
		login
		getall
		add
		update
		delete
		get 
	Need to create a service class in ts

	services are onbjects that can be shared accross components
		They must be impoted and exposed in the providers
		injected into components through the component constructor

	common uses:
		Applications option 
		user login
		ajax methods 

	@Injectable()
		services use this decorator 
		means the service itself can use other services that will be injected into them

	Creating a service
		ng generate service [name]

		creates a sevie in the current directory 
		Adds the service to the associated module

	Example creating

	import {Injectable} from '@angular/core';

	@Injectable()
	export class SystemService{
		loggedInUser: User=null;

	}
	example using
	constructor(private SysSvc: SystemService){}


	Rules to follow==

	When a service is used to acces data from a server
		one service per service controller
		class or model maps the data sent and recieved from the controller

	HttpClientModule
		service class within HttpClientModule providing observable ajax calls to servers

		import 'HttpClientModule' from '@angular/common/http';

		Must add HttpClientModule to appmodule
		requrires importof observable from 'rxjs'
		Injected into component via constructor

		Provides get and post methods
			get for reading
			post for updating

	observable====
	constructs to handle asynchronus data
	provided by importing from rxjs

	"I am assuming that it is gonna come back like this"

	provides a subscribe method to handle data when returned

	this.http.get(url).subscribe(res=>{console.log(res)},
		err=>{console.error(err)});



Services.. 
	Be in the directory you want to make it
	ng g s [name]

	Add import to app.module.ts

	add the module to Provides

	Create Model Class



	add the imports to services for 
		HTTPClient from @angular/common/http
		Observable from rxjs

		Add imports to all components necessary


=======Routing=============

Routing is the process where thr url is used as data for displaying the appropriate component

Components are injected into html containing the special pseudo html tags <router-outlet></router-outlet> 

requrires a module to define the routs and the components associated with each route

Order of routes is significant. More specific  routs must be placed before more general ones;

ng will look top down and pick whatever route first-child//

const routes :Routes =[
{path:'' reDirectTo='/home', pathMatch:'full'}
]

path: '**'// is a catch all mustb e last path defined
 instead of Href for anchor tags we use routerLink ="/etc"

Pipes ----Sorting 
| is the pipe syntax

<ul>
	<li *ngFor="let item of items| sort:'colname">
<ul>
to sort by col name


to display as currency

<p>{{bankBalance |currency}}</p>





