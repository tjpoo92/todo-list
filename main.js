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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sidebar\": () => (/* binding */ sidebar),\n/* harmony export */   \"addProjectButton\": () => (/* binding */ addProjectButton)\n/* harmony export */ });\n/* harmony import */ var _modules_project_form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/project-form.js */ \"./src/modules/project-form.js\");\n/* harmony import */ var _modules_task_form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/task-form.js */ \"./src/modules/task-form.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal.js */ \"./src/modules/modal.js\");\n\r\n\r\n\r\n\r\n\r\nconst addProjectButton = document.querySelector(\".add-project\")\r\n\r\naddProjectButton.addEventListener(\"click\", () => { \r\n\t_modules_modal_js__WEBPACK_IMPORTED_MODULE_2__.modal.style.display = \"block\";\r\n\t(0,_modules_project_form_js__WEBPACK_IMPORTED_MODULE_0__.addProjectForm)();\r\n});\r\n\r\nconst addTaskButton = document.querySelector(\".add-task\")\r\n\r\naddTaskButton.addEventListener(\"click\", () => {\r\n\t_modules_modal_js__WEBPACK_IMPORTED_MODULE_2__.modal.style.display = \"block\";\r\n\t(0,_modules_task_form_js__WEBPACK_IMPORTED_MODULE_1__.addTaskForm)();\r\n});\r\n\r\nconst projects = document.querySelector(\".fa-tasks\");\r\nconst sidebar = document.querySelector(\".side-bar\");\r\nconst projectIcons = document.querySelectorAll(\".i-project\");\r\nconst sidebarContent = document.querySelectorAll(\".project\");\r\n\r\nprojects.addEventListener(\"click\", () => {\r\n\tcollapseSidebar();\r\n\tsidebar.classList.toggle(\"display\");\r\n});\r\n\r\n\r\nfunction collapseSidebar() {\r\n\tif (sidebar.classList.contains(\"display\")) {\r\n\t\tfor (let i = 0; i < sidebarContent.length; i++) {\r\n\t\t\tsidebarContent[i].classList.add(\"hidden\");\r\n\t\t}\r\n\t\tfor (let j = 0; j < projectIcons.length; j++) {\r\n\t\t\tprojectIcons[j].classList.add(\"center\");\r\n\t\t}\r\n\t} else {\r\n\t\tfor (let i = 0; i < sidebarContent.length; i++) {\r\n\t\t\tsidebarContent[i].classList.remove(\"hidden\");\r\n\t\t}\r\n\t\tfor (let j = 0; j < projectIcons.length; j++) {\r\n\t\t\tprojectIcons[j].classList.remove(\"center\");\r\n\t\t}\r\n\t}\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closeModal\": () => (/* binding */ closeModal),\n/* harmony export */   \"modalContent\": () => (/* binding */ modalContent),\n/* harmony export */   \"modal\": () => (/* binding */ modal)\n/* harmony export */ });\nconst span = document.querySelector(\"span\");\r\nconst modal = document.querySelector(\".add-modal\");\r\nconst modalContent = document.querySelector(\".modal-content\") \r\n\r\nspan.addEventListener(\"click\", closeModal);\r\n\r\nfunction closeModal(){\r\n\tmodal.style.display = \"none\";\r\n\tclearForm();\r\n};\r\n\r\nfunction clearForm() {\r\n\twhile (modalContent.hasChildNodes() && modalContent.lastChild !== span){\r\n\t\tmodalContent.removeChild(modalContent.lastChild)\r\n}}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/project-form.js":
/*!*************************************!*\
  !*** ./src/modules/project-form.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProjectForm\": () => (/* binding */ addProjectForm)\n/* harmony export */ });\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.js */ \"./src/modules/modal.js\");\n/* harmony import */ var _project_func_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-func.js */ \"./src/modules/project-func.js\");\n\r\n\r\n\r\nlet projectArray = [{formInputText: \"Default\"}]\r\n\r\nfunction submitAddProjectForm() {\r\n\tconst formInputText = document.querySelector(\"#project-name\").value;\r\n\t\r\n\tconst addProjectFactory = (formInputText) => {\r\n\t\treturn {formInputText}\r\n\t}\r\n\r\n\tconst newProject = addProjectFactory(formInputText)\r\n\r\n\treturn projectArray.push(newProject)\r\n}\r\n\r\nconst addProjectForm = (() => {\r\n        \r\n    const form = document.createElement(\"form\");\r\n        form.setAttribute(\"action\", \"#\")\r\n        form.classList.add(\"project-form\")\r\n            \r\n    const inputText = document.createElement(\"input\")\r\n        inputText.setAttribute(\"type\",\"text\")\r\n        inputText.setAttribute(\"name\",\"project-name\")\r\n        inputText.setAttribute(\"id\",\"project-name\")\r\n        inputText.setAttribute(\"placeholder\",\"Project Name\")\r\n        inputText.setAttribute(\"autocomplete\",\"off\")\r\n        inputText.setAttribute(\"required\", \"true\")\r\n        form.appendChild(inputText)\r\n                \r\n    const button = document.createElement(\"button\")\r\n        button.setAttribute(\"type\",\"submit\")\r\n        button.classList.add(\"center\")\r\n        button.innerText=\"Submit\"\r\n        button.classList.add(\"submit-add-project\")\r\n        form.appendChild(button)\r\n                    \r\n    _modal_js__WEBPACK_IMPORTED_MODULE_0__.modalContent.appendChild(form);\r\n        \r\n    form.addEventListener(\"submit\", (event)=> {\r\n        submitAddProjectForm()\r\n        event.preventDefault()\r\n        ;(0,_modal_js__WEBPACK_IMPORTED_MODULE_0__.closeModal)()\r\n        ;(0,_project_func_js__WEBPACK_IMPORTED_MODULE_1__.displayProject)(projectArray[projectArray.length == 0 ? 0 : projectArray.length - 1])\r\n    })\r\n});\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/modules/project-form.js?");

/***/ }),

/***/ "./src/modules/project-func.js":
/*!*************************************!*\
  !*** ./src/modules/project-func.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayProject\": () => (/* binding */ displayProject)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ \"./src/index.js\");\n\r\n\r\nfunction displayProject(projectToDisplay) {\r\n\r\n\tconst projectLabel = document.createElement(\"label\")\r\n\r\n\r\n\tconst projectInput = document.createElement(\"input\")\r\n\t\tprojectInput.setAttribute(\"type\",\"radio\")\r\n\t\tprojectInput.setAttribute(\"name\",\"radio-button\")\r\n\t\tprojectInput.checked= true;\r\n\t\tprojectLabel.appendChild(projectInput)\r\n\r\n\tconst projectDiv = document.createElement(\"div\")\r\n\t\tprojectLabel.appendChild(projectDiv)\r\n\r\n\r\n\t//TODO Randomize icon that will be showing\r\n\t// Put info in array then randomize index\r\n\tconst projectInfo = function (classDef, text){\r\n\t\tconst tempPara = document.createElement(\"p\")\r\n\t\ttempPara.classList.add(classDef)\r\n\t\ttempPara.innerText = text\r\n\t\tprojectDiv.appendChild(tempPara)\r\n\t\t\r\n\t};\r\n\tconst pProjectText = new projectInfo(\"project\",projectToDisplay.formInputText);\r\n\r\n\t_index_js__WEBPACK_IMPORTED_MODULE_0__.sidebar.insertBefore(projectLabel, _index_js__WEBPACK_IMPORTED_MODULE_0__.addProjectButton)\r\n\t\r\n\t}\r\n\r\n\t\n\n//# sourceURL=webpack://todo-list/./src/modules/project-func.js?");

/***/ }),

/***/ "./src/modules/task-form.js":
/*!**********************************!*\
  !*** ./src/modules/task-form.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTaskForm\": () => (/* binding */ addTaskForm)\n/* harmony export */ });\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.js */ \"./src/modules/modal.js\");\n/* harmony import */ var _task_func_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task-func.js */ \"./src/modules/task-func.js\");\n\r\n\r\n\r\nlet taskArray = [];\r\n\r\nconst addTaskForm = (() => {\r\n\r\n    const form = document.createElement(\"form\");\r\n        form.setAttribute(\"action\", \"#\")\r\n        form.classList.add(\"task-form\")\r\n    \r\n    const inputText = document.createElement(\"input\")\r\n        inputText.setAttribute(\"type\",\"text\")\r\n        inputText.setAttribute(\"name\",\"task-name\")\r\n        inputText.setAttribute(\"id\",\"task-name\")\r\n        inputText.setAttribute(\"placeholder\",\"Task Name\")\r\n        inputText.setAttribute(\"autocomplete\",\"off\")\r\n        inputText.required = true;\r\n        form.appendChild(inputText)\r\n    \r\n    const textarea = document.createElement(\"textarea\")\r\n        textarea.setAttribute(\"name\",\"task-description\")\r\n        textarea.setAttribute(\"id\",\"task-description\")\r\n        textarea.setAttribute(\"row\",\"4\")\r\n        textarea.setAttribute(\"placeholder\",\"Task Description\")\r\n        form.appendChild(textarea)\r\n    \r\n    const br = document.createElement(\"br\")\r\n        form.appendChild(br)\r\n    \r\n    const inputDate = document.createElement(\"input\")\r\n        inputDate.setAttribute(\"type\",\"date\")\r\n        inputDate.setAttribute(\"name\",\"due-date\")\r\n        inputDate.setAttribute(\"id\",\"due-date\")\r\n        inputDate.required = true;\r\n        form.appendChild(inputDate)\r\n    \r\n    const select = document.createElement(\"select\")\r\n        select.setAttribute(\"name\", \"priority\")\r\n        select.setAttribute(\"id\",\"priority\")\r\n        form.appendChild(select)\r\n    \r\n    const Selector = function (priority){\r\n        const tempOption = document.createElement(\"option\")\r\n        tempOption.setAttribute = () => (\"value\", priority)\r\n        tempOption.innerText= priority\r\n        select.appendChild(tempOption)\r\n        \r\n    };\r\n    const optionLow = new Selector(\"Low\");\r\n    const optionMed = new Selector(\"Medium\");\r\n    const optionHigh = new Selector(\"High\");\r\n    \r\n    const button = document.createElement(\"button\")\r\n        button.setAttribute(\"type\",\"submit\")\r\n        button.classList.add(\"center\")\r\n        button.innerText=\"Submit\"\r\n        button.classList.add(\"submit-add-task\")\r\n        form.appendChild(button)\r\n    \r\n    _modal_js__WEBPACK_IMPORTED_MODULE_0__.modalContent.appendChild(form);\r\n    \r\n    form.addEventListener(\"submit\", (event)=> {\r\n        submitAddTaskForm()\r\n        event.preventDefault()\r\n        ;(0,_modal_js__WEBPACK_IMPORTED_MODULE_0__.closeModal)()\r\n        ;(0,_task_func_js__WEBPACK_IMPORTED_MODULE_1__.displayTask)(taskArray[taskArray.length == 0 ? 0 : taskArray.length - 1])\r\n    })\r\n    });\r\n\r\n    function submitAddTaskForm() {\r\n\t\r\n        const formInputText = document.querySelector(\"#task-name\").value;\r\n        const formTextArea = document.querySelector(\"#task-description\").value;\r\n        const formDueDate = document.querySelector(\"#due-date\").value;\r\n        const formPriority = document.querySelector(\"#priority\").value;\r\n        \r\n        const addTaskFactory = (formInputText, formTextArea, formDueDate, formPriority) => {\r\n            return {formInputText, formTextArea, formDueDate, formPriority}\r\n        }\r\n        \r\n        const newTask = addTaskFactory(formInputText, formTextArea, formDueDate,formPriority)\r\n        \r\n        return taskArray.push(newTask)\r\n        }\r\n        \r\n\n\n//# sourceURL=webpack://todo-list/./src/modules/task-form.js?");

/***/ }),

/***/ "./src/modules/task-func.js":
/*!**********************************!*\
  !*** ./src/modules/task-func.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayTask\": () => (/* binding */ displayTask)\n/* harmony export */ });\n/* harmony import */ var _task_form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task-form.js */ \"./src/modules/task-form.js\");\n\r\n\r\n\r\nfunction displayTask(taskToDisplay) {\r\n\r\n\tconst content = document.querySelector(\".content\")\r\n\tconst subTaskDiv = document.createElement(\"div\")\r\n\tsubTaskDiv.classList.add(\"sub-task\")\r\n\r\n\tconst checkBox = document.createElement(\"input\")\r\n\tcheckBox.setAttribute(\"type\",\"checkbox\")\r\n\tcheckBox.setAttribute(\"name\",\"sub-task\")\r\n\t// remove if not needed, shouldn't be using ID on generic created node\r\n\t// checkBox.setAttribute(\"id\",\"sub-task\")\r\n\tsubTaskDiv.appendChild(checkBox)\r\n\r\n\tconst subTaskInfo = function (classDef, text){\r\n\t\tconst tempPara = document.createElement(\"p\")\r\n\t\ttempPara.classList.add(classDef)\r\n\t\ttempPara.innerText= text\r\n\t\tsubTaskDiv.appendChild(tempPara)\r\n\t\t\r\n\t};\r\n\tconst pTaskText = new subTaskInfo(\"sub-task-text\",taskToDisplay.formInputText);\r\n\tconst pTaskDueDate = new subTaskInfo(\"sub-task-due-date\",taskToDisplay.formDueDate);\r\n\r\n\tconst ellipsis = document.createElement(\"i\")\r\n\tellipsis.classList.add(\"fas\",\"fa-ellipsis-h\",\"options\")\r\n\tsubTaskDiv.appendChild(ellipsis)\r\n\r\n\tconst trashCan = document.createElement(\"i\")\r\n\ttrashCan.classList.add(\"fas\",\"fa-trash-alt\",\"trash\")\r\n\tsubTaskDiv.appendChild(trashCan)\r\n\r\n\tcontent.appendChild(subTaskDiv)\r\n\r\n\tconst subTaskDesc = document.createElement(\"div\")\r\n\tsubTaskDesc.classList.add(\"sub-task-description\")\r\n\tcontent.appendChild(subTaskDesc)\r\n\r\n\tconst descP = document.createElement(\"p\")\r\n\tdescP.innerText = taskToDisplay.formTextArea\r\n\tsubTaskDesc.appendChild(descP)\r\n\r\n\t// TODO GET THIS SHIT WORKING, UNDERLINING\r\n\t// refactor into own function, add trash and setting functionality\r\n\t// const subTask = document.querySelectorAll(\".sub-task\");\r\n\t// const subTaskText = document.querySelectorAll(\".sub-task-text\");\r\n\t// for (let i = 0; i < subTask.length; i++) {\r\n\t// \tsubTask[i].addEventListener(\"click\", () => {\r\n\t// \t\tconsole.log(subTask[i])\r\n\t// if (subTask[i].checked == true) {\r\n\t// \t\tsubTaskText[i].style.textDecoration = \"line-through\";\r\n\t// \t} else {\r\n\t// \t\tsubTaskText[i].style.textDecoration = \"none\";\r\n\t// \t}\r\n\t// \t});\r\n\t\t\r\n\t}\r\n\t\n\n//# sourceURL=webpack://todo-list/./src/modules/task-func.js?");

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