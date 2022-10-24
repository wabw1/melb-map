const rating_slider_change = (values) => {
  var min, max;
  min = parseFloat(values.split(", ")[0]);
  max = parseFloat(values.split(", ")[1]);
  // map.setFilter("points", [">", ["get", "rating"], min], ["<=", ["get", "rating"], max]);
};

const price_slider_change = (values) => {
  var min, max;
  min = parseFloat(values.split(", ")[0]);
  max = parseFloat(values.split(", ")[1]);
  // map.setFilter("points", [">", ["get", "price"], min], ["<=", ["get", "price"], max]);
};

export { rating_slider_change, price_slider_change };
