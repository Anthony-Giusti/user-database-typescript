"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
require("./index.css");
var react_router_dom_1 = require("react-router-dom");
var App_1 = __importDefault(require("./App"));
react_dom_1.default.render(<div>
    <react_router_dom_1.BrowserRouter>
      <App_1.default />
    </react_router_dom_1.BrowserRouter>
  </div>, document.getElementById('root'));
//# sourceMappingURL=index.jsx.map