const isHexColor = color =>
  color && /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(color) ? color : false;

export { isHexColor };
