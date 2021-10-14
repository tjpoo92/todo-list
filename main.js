/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sidebar\": () => (/* binding */ sidebar),\n/* harmony export */   \"addProjectButton\": () => (/* binding */ addProjectButton),\n/* harmony export */   \"content\": () => (/* binding */ content)\n/* harmony export */ });\n/* harmony import */ var _modules_project_form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/project-form.js */ \"./src/modules/project-form.js\");\n/* harmony import */ var _modules_task_form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/task-form.js */ \"./src/modules/task-form.js\");\n/* harmony import */ var _modules_task_func_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/task-func.js */ \"./src/modules/task-func.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal.js */ \"./src/modules/modal.js\");\n\r\n\r\n\r\n\r\n\r\nconst addProjectButton = document.querySelector(\".add-project\");\r\nconst content = document.querySelector(\".content\");\r\n\r\naddProjectButton.addEventListener(\"click\", () => {\r\n\t_modules_modal_js__WEBPACK_IMPORTED_MODULE_3__.modal.style.display = \"block\";\r\n\t(0,_modules_project_form_js__WEBPACK_IMPORTED_MODULE_0__.addProjectForm)();\r\n});\r\n\r\nconst addTaskButton = document.querySelector(\".add-task\");\r\n\r\naddTaskButton.addEventListener(\"click\", () => {\r\n\t_modules_modal_js__WEBPACK_IMPORTED_MODULE_3__.modal.style.display = \"block\";\r\n\t(0,_modules_task_form_js__WEBPACK_IMPORTED_MODULE_1__.addTaskForm)();\r\n});\r\n\r\nconst projects = document.querySelector(\".fa-tasks\");\r\nconst sidebar = document.querySelector(\".side-bar\");\r\nconst projectIcons = document.querySelectorAll(\".i-project\");\r\nconst sidebarContent = document.querySelectorAll(\".project\");\r\n\r\nprojects.addEventListener(\"click\", () => {\r\n\tcollapseSidebar();\r\n\tsidebar.classList.toggle(\"display\");\r\n});\r\n\r\nfunction collapseSidebar() {\r\n\tif (sidebar.classList.contains(\"display\")) {\r\n\t\tfor (let i = 0; i < sidebarContent.length; i++) {\r\n\t\t\tsidebarContent[i].classList.add(\"hidden\");\r\n\t\t}\r\n\t\tfor (let j = 0; j < projectIcons.length; j++) {\r\n\t\t\tprojectIcons[j].classList.add(\"center\");\r\n\t\t}\r\n\t} else {\r\n\t\tfor (let i = 0; i < sidebarContent.length; i++) {\r\n\t\t\tsidebarContent[i].classList.remove(\"hidden\");\r\n\t\t}\r\n\t\tfor (let j = 0; j < projectIcons.length; j++) {\r\n\t\t\tprojectIcons[j].classList.remove(\"center\");\r\n\t\t}\r\n\t}\r\n}\r\n\r\n\r\n\r\nconst selection = document.querySelectorAll(\"input[type='radio']\")\r\nfor (let i = 0; i < selection.length; i++) {\r\n\tselection[i].addEventListener(\"click\", (0,_modules_task_func_js__WEBPACK_IMPORTED_MODULE_2__.displayTask)(_modules_task_form_js__WEBPACK_IMPORTED_MODULE_1__.taskArray));\r\n\t\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closeModal\": () => (/* binding */ closeModal),\n/* harmony export */   \"modalContent\": () => (/* binding */ modalContent),\n/* harmony export */   \"modal\": () => (/* binding */ modal)\n/* harmony export */ });\nconst span = document.querySelector(\"span\");\r\nconst modal = document.querySelector(\".add-modal\");\r\nconst modalContent = document.querySelector(\".modal-content\");\r\n\r\nspan.addEventListener(\"click\", closeModal);\r\n\r\nfunction closeModal() {\r\n\tmodal.style.display = \"none\";\r\n\tclearForm();\r\n}\r\n\r\nfunction clearForm() {\r\n\twhile (modalContent.hasChildNodes() && modalContent.lastChild !== span) {\r\n\t\tmodalContent.removeChild(modalContent.lastChild);\r\n\t}\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/project-form.js":
/*!*************************************!*\
  !*** ./src/modules/project-form.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProjectForm\": () => (/* binding */ addProjectForm)\n/* harmony export */ });\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.js */ \"./src/modules/modal.js\");\n/* harmony import */ var _project_func_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-func.js */ \"./src/modules/project-func.js\");\n\r\n\r\n\r\nlet projectArray = [\"Default\"];\r\n\r\nfunction submitAddProjectForm() {\r\n\tconst formInputText = document.querySelector(\"#project-name\").value;\r\n\r\n\tconst addProjectFactory = (formInputText) => {\r\n\t\tconst tempValue = formInputText\r\n\t\treturn tempValue;\r\n\t};\r\n\r\n\tconst newProject = addProjectFactory(formInputText);\r\n\r\n\tprojectArray.push(newProject)\r\n\t\r\n\treturn console.log(projectArray);\r\n}\r\n\r\nconst addProjectForm = () => {\r\n\tconst form = document.createElement(\"form\");\r\n\tform.setAttribute(\"action\", \"#\");\r\n\tform.classList.add(\"project-form\");\r\n\r\n\tconst inputText = document.createElement(\"input\");\r\n\tinputText.setAttribute(\"type\", \"text\");\r\n\tinputText.setAttribute(\"name\", \"project-name\");\r\n\tinputText.setAttribute(\"id\", \"project-name\");\r\n\tinputText.setAttribute(\"placeholder\", \"Project Name\");\r\n\tinputText.setAttribute(\"autocomplete\", \"off\");\r\n\tinputText.setAttribute(\"required\", \"true\");\r\n\tform.appendChild(inputText);\r\n\r\n\tconst button = document.createElement(\"button\");\r\n\tbutton.setAttribute(\"type\", \"submit\");\r\n\tbutton.classList.add(\"center\");\r\n\tbutton.innerText = \"Submit\";\r\n\tbutton.classList.add(\"submit-add-project\");\r\n\tform.appendChild(button);\r\n\r\n\t_modal_js__WEBPACK_IMPORTED_MODULE_0__.modalContent.appendChild(form);\r\n\r\n\tform.addEventListener(\"submit\", (event) => {\r\n\t\tsubmitAddProjectForm();\r\n\t\tevent.preventDefault();\r\n\t\t(0,_modal_js__WEBPACK_IMPORTED_MODULE_0__.closeModal)();\r\n\t\t(0,_project_func_js__WEBPACK_IMPORTED_MODULE_1__.displayProject)(\r\n\t\t\tprojectArray[projectArray.length - 1]\r\n\t\t);\r\n\t});\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/modules/project-form.js?");

/***/ }),

/***/ "./src/modules/project-func.js":
/*!*************************************!*\
  !*** ./src/modules/project-func.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayProject\": () => (/* binding */ displayProject)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ \"./src/index.js\");\n/* harmony import */ var _task_func_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task-func.js */ \"./src/modules/task-func.js\");\n/* harmony import */ var _task_form_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-form.js */ \"./src/modules/task-form.js\");\n\r\n\r\n\r\n\r\nfunction displayProject(projectToDisplay) {\r\n\tconst projectLabel = document.createElement(\"label\");\r\n\t\r\n\r\n\tconst projectInput = document.createElement(\"input\");\r\n\tprojectInput.setAttribute(\"type\", \"radio\");\r\n\tprojectInput.setAttribute(\"name\", \"radio-button\");\r\n\tprojectInput.checked = true;\r\n\tprojectLabel.appendChild(projectInput);\r\n\t\r\n\t\r\n\r\n\tconst projectDiv = document.createElement(\"div\");\r\n\t\r\n\tprojectLabel.appendChild(projectDiv);\r\n\r\n\t//TODO Randomize icon that will be showing\r\n\t// Put info in array then randomize index\r\n\tconst projectInfo = function (classDef, text) {\r\n\t\tconst tempPara = document.createElement(\"p\");\r\n\t\ttempPara.classList.add(classDef);\r\n\t\ttempPara.innerText = text;\r\n\t\tprojectDiv.appendChild(tempPara);\r\n\t};\r\n\tconst pProjectText = new projectInfo(\r\n\t\t\"project\",\r\n\t\t`${projectToDisplay}`\r\n\t);\r\n\r\n\t_index_js__WEBPACK_IMPORTED_MODULE_0__.sidebar.insertBefore(projectLabel, _index_js__WEBPACK_IMPORTED_MODULE_0__.addProjectButton);\r\n\t(0,_task_func_js__WEBPACK_IMPORTED_MODULE_1__.clearContent)();\r\nreturn projectDiv.addEventListener(\"click\", (0,_task_func_js__WEBPACK_IMPORTED_MODULE_1__.displayTask)(_task_form_js__WEBPACK_IMPORTED_MODULE_2__.taskArray))\r\n}\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/modules/project-func.js?");

/***/ }),

/***/ "./src/modules/task-form.js":
/*!**********************************!*\
  !*** ./src/modules/task-form.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTaskForm\": () => (/* binding */ addTaskForm),\n/* harmony export */   \"taskArray\": () => (/* binding */ taskArray)\n/* harmony export */ });\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.js */ \"./src/modules/modal.js\");\n/* harmony import */ var _task_func_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task-func.js */ \"./src/modules/task-func.js\");\n\r\n\r\n\r\nlet taskArray = []\r\n\r\nconst addTaskForm = () => {\r\n\tconst form = document.createElement(\"form\");\r\n\tform.setAttribute(\"action\", \"#\");\r\n\tform.classList.add(\"task-form\");\r\n\r\n\tconst inputText = document.createElement(\"input\");\r\n\tinputText.setAttribute(\"type\", \"text\");\r\n\tinputText.setAttribute(\"name\", \"task-name\");\r\n\tinputText.setAttribute(\"id\", \"task-name\");\r\n\tinputText.setAttribute(\"placeholder\", \"Task Name\");\r\n\tinputText.setAttribute(\"autocomplete\", \"off\");\r\n\tinputText.required = true;\r\n\tform.appendChild(inputText);\r\n\r\n\tconst textarea = document.createElement(\"textarea\");\r\n\ttextarea.setAttribute(\"name\", \"task-description\");\r\n\ttextarea.setAttribute(\"id\", \"task-description\");\r\n\ttextarea.setAttribute(\"row\", \"4\");\r\n\ttextarea.setAttribute(\"placeholder\", \"Task Description\");\r\n\tform.appendChild(textarea);\r\n\r\n\tconst br = document.createElement(\"br\");\r\n\tform.appendChild(br);\r\n\r\n\tconst inputDate = document.createElement(\"input\");\r\n\tinputDate.setAttribute(\"type\", \"date\");\r\n\tinputDate.setAttribute(\"name\", \"due-date\");\r\n\tinputDate.setAttribute(\"id\", \"due-date\");\r\n\tinputDate.required = true;\r\n\tform.appendChild(inputDate);\r\n\r\n\tconst select = document.createElement(\"select\");\r\n\tselect.setAttribute(\"name\", \"priority\");\r\n\tselect.setAttribute(\"id\", \"priority\");\r\n\tform.appendChild(select);\r\n\r\n\tconst Selector = function (priority) {\r\n\t\tconst tempOption = document.createElement(\"option\");\r\n\t\ttempOption.setAttribute = () => (\"value\", priority);\r\n\t\ttempOption.innerText = priority;\r\n\t\tselect.appendChild(tempOption);\r\n\t};\r\n\tconst optionLow = new Selector(\"Low\");\r\n\tconst optionMed = new Selector(\"Medium\");\r\n\tconst optionHigh = new Selector(\"High\");\r\n\r\n\tconst button = document.createElement(\"button\");\r\n\tbutton.setAttribute(\"type\", \"submit\");\r\n\tbutton.classList.add(\"center\");\r\n\tbutton.innerText = \"Submit\";\r\n\tbutton.classList.add(\"submit-add-task\");\r\n\tform.appendChild(button);\r\n\r\n\t_modal_js__WEBPACK_IMPORTED_MODULE_0__.modalContent.appendChild(form);\r\n\r\n\tform.addEventListener(\"submit\", (event) => {\r\n\t\tsubmitAddTaskForm();\r\n\t\tevent.preventDefault();\r\n\t\t(0,_modal_js__WEBPACK_IMPORTED_MODULE_0__.closeModal)();\r\n\t\t(0,_task_func_js__WEBPACK_IMPORTED_MODULE_1__.clearContent)();\r\n\t\t(0,_task_func_js__WEBPACK_IMPORTED_MODULE_1__.displayTask)(taskArray)\r\n\t\t// displayTask(taskArray[taskArray.length == 0 ? 0 : taskArray.length - 1]);\r\n\t});\r\n};\r\n\r\n\r\n\r\nfunction submitAddTaskForm() {\r\n\tconst formInputText = document.querySelector(\"#task-name\").value;\r\n\tconst formTextArea = document.querySelector(\"#task-description\").value;\r\n\tconst formDueDate = document.querySelector(\"#due-date\").value;\r\n\tconst formPriority = document.querySelector(\"#priority\").value;\r\n\tconst projectSelected = document.querySelector(\"input[type='radio']:checked\").nextElementSibling.lastElementChild.innerText;\r\n\r\n\tconst addTaskFactory = (\r\n\t\tprojectSelected,\r\n\t\tformInputText,\r\n\t\tformTextArea,\r\n\t\tformDueDate,\r\n\t\tformPriority\r\n\t) => {\r\n\t\treturn { projectSelected, formInputText, formTextArea, formDueDate, formPriority };\r\n\t};\r\n\r\n\tconst newTask = addTaskFactory(\r\n\t\tprojectSelected,\r\n\t\tformInputText,\r\n\t\tformTextArea,\r\n\t\tformDueDate,\r\n\t\tformPriority\r\n\t);\r\n\ttaskArray.push(newTask)\r\n\t\r\n\treturn console.log(taskArray);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/modules/task-form.js?");

/***/ }),

/***/ "./src/modules/task-func.js":
/*!**********************************!*\
  !*** ./src/modules/task-func.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayTask\": () => (/* binding */ displayTask),\n/* harmony export */   \"clearContent\": () => (/* binding */ clearContent)\n/* harmony export */ });\n/* harmony import */ var _task_form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task-form.js */ \"./src/modules/task-form.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.js */ \"./src/index.js\");\n\r\n\r\n\r\n\r\n\r\nfunction clearContent() {\r\n\t\r\n\twhile (_index_js__WEBPACK_IMPORTED_MODULE_1__.content.hasChildNodes()) {\r\n\t\t_index_js__WEBPACK_IMPORTED_MODULE_1__.content.removeChild(_index_js__WEBPACK_IMPORTED_MODULE_1__.content.firstChild)\r\n\t}\r\n\treturn _index_js__WEBPACK_IMPORTED_MODULE_1__.content;\r\n}\r\n\r\n\r\nfunction displayTask(taskToDisplay) {\r\n\tconst currentSelected = document.querySelector(\"input[type='radio']:checked\").nextElementSibling.lastElementChild.innerText;\r\n\tconsole.log(\"DISPLAY TASK IS BEING RAN\")\r\n\t// const content = document.querySelector(\".content\");\r\n\t// while (content.hasChildNodes()) {\r\n\t// \tcontent.removeChild(content.firstChild)\r\n\t// }\r\n\ttaskToDisplay.forEach(element => {\r\n\t\tif(element.projectSelected == currentSelected){\r\n\r\n\r\n\tconst subTaskDiv = document.createElement(\"div\");\r\n\tsubTaskDiv.classList.add(\"sub-task\");\r\n\r\n\tconst checkBox = document.createElement(\"input\");\r\n\tcheckBox.setAttribute(\"type\", \"checkbox\");\r\n\tcheckBox.setAttribute(\"name\", \"sub-task\");\r\n\tsubTaskDiv.appendChild(checkBox);\r\n\r\n\tconst subTaskInfo = function (classDef, text) {\r\n\t\tconst tempPara = document.createElement(\"p\");\r\n\t\ttempPara.classList.add(classDef);\r\n\t\ttempPara.innerText = text;\r\n\t\tsubTaskDiv.appendChild(tempPara);\r\n\t};\r\n\tconst pTaskText = new subTaskInfo(\r\n\t\t\"sub-task-text\",\r\n\t\telement.formInputText\r\n\t);\r\n\tconst pTaskDueDate = new subTaskInfo(\r\n\t\t\"sub-task-due-date\",\r\n\t\telement.formDueDate\r\n\t);\r\n\r\n\tconst ellipsis = document.createElement(\"i\");\r\n\tellipsis.classList.add(\"fas\", \"fa-ellipsis-h\", \"options\");\r\n\tsubTaskDiv.appendChild(ellipsis);\r\n\r\n\tconst trashCan = document.createElement(\"i\");\r\n\ttrashCan.classList.add(\"fas\", \"fa-trash-alt\", \"trash\");\r\n\tsubTaskDiv.appendChild(trashCan);\r\n\r\n\t_index_js__WEBPACK_IMPORTED_MODULE_1__.content.appendChild(subTaskDiv);\r\n\r\n\tconst subTaskDesc = document.createElement(\"div\");\r\n\tsubTaskDesc.classList.add(\"sub-task-description\");\r\n\t_index_js__WEBPACK_IMPORTED_MODULE_1__.content.appendChild(subTaskDesc);\r\n\r\n\tconst descP = document.createElement(\"p\");\r\n\tdescP.innerText = element.formTextArea;\r\n\tsubTaskDesc.appendChild(descP);\r\n\r\n\t// TODO GET THIS SHIT WORKING, UNDERLINING\r\n\t// refactor into own function, add trash and setting functionality\r\n\t// const subTask = document.querySelectorAll(\".sub-task\");\r\n\t// const subTaskText = document.querySelectorAll(\".sub-task-text\");\r\n\t// for (let i = 0; i < subTask.length; i++) {\r\n\t// \tsubTask[i].addEventListener(\"click\", () => {\r\n\t// \t\tconsole.log(subTask[i])\r\n\t// if (subTask[i].checked == true) {\r\n\t// \t\tsubTaskText[i].style.textDecoration = \"line-through\";\r\n\t// \t} else {\r\n\t// \t\tsubTaskText[i].style.textDecoration = \"none\";\r\n\t// \t}\r\n\t// \t});\r\n}\r\n\r\n});\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/modules/task-func.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;