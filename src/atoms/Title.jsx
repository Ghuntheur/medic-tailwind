const { createElement } = require("react");

const Title = ({ as = 'h1', children }) => createElement(as, null, children)