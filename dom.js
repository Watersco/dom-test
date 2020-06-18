window.dom = {
  find(selector, scope) {
    return (scope || document).querySelectorAll(selector);
  },

  style(node, name, value) {
    if (arguments.length === 3) {
      node.style[name] = value;
    } else if (arguments.length === 2) {
      return node.style[name];
    } else if (name instanceof Object) {
      const object = name;
      for (let key in name) {
        node.style[key] = name[key];
      }
    }
  },
  children(node) {
    return node.children;
  },
  each(nodeList, fn) {
    for (let i = 0; i < nodeList.length; i++) {
      fn.call(null, nodeList[i]);
    }
  },
};
