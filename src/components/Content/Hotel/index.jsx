import React, { useRef, useEffect, useState } from "react";
import "../index.css";

// 导入数据
import hotel_data from "../../../data/hotel.geojson";
// 导入mapbox
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken = "pk.eyJ1Ijoid2FidyIsImEiOiJjbDkyd3RmaHYwYnJqM25uZnBlNXlqeG40In0.6XAlz4-OWkmmSffl0m80HA";

export default function Hotel() {
  const mapContainer = useRef(null);

  useEffect(() => {
    // // 定义一些函数
    // function getStars(num) {
    //   let output = "<span>";
    //   for (let i = 0; i < 5; i++) {
    //     if (num >= 1) {
    //       output += '<i class="fas fa-star"></i>';
    //       num--;
    //     } else if (num === 0.5) {
    //       output += '<i class="fas fa-star-half-alt"></i>';
    //       num = 0;
    //     } else {
    //       output += '<i class="far fa-star"></i>';
    //     }
    //   }
    //   output += "</span>";
    //   return output;
    // }
    // function rating_slider_change(values) {
    //   let min, max;
    //   min = parseFloat(values.split(", ")[0]);
    //   max = parseFloat(values.split(", ")[1]);
    //   map.setFilter("points", [">", ["get", "rating"], min], ["<=", ["get", "rating"], max]);
    // }
    // function price_slider_change(values) {
    //   let min, max;
    //   min = parseFloat(values.split(", ")[0]);
    //   max = parseFloat(values.split(", ")[1]);
    //   map.setFilter("points", [">", ["get", "price"], min], ["<=", ["get", "price"], max]);
    // }

    // function add_rankings() {
    //   let ranking_list = document.getElementById("rankings");
    //   let rank_list = "<h3>Rankings: </h3><div class='cards' style='overflow: auto; max-height: 320px;'>";
    //   for (let data of hotel_data["features"]) {
    //     rank_list +=
    //       '<div class="rankingCard" onclick="flyTo(' +
    //       data["geometry"]["coordinates"] +
    //       ')">' +
    //       data["properties"]["rank"].toString() +
    //       ".\t" +
    //       data["properties"]["name"] +
    //       "</div>";
    //   }
    //   rank_list += "</div>";
    //   ranking_list.innerHTML = rank_list;
    // }

    // function flyTo(x, y) {
    //   let coordinates = [x, y];
    //   map.flyTo({ center: coordinates });
    // }

    // 创建map
    // https://docs.mapbox.com/mapbox-gl-js/api/map/
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [144.965, -37.814], // starting position [lng, lat]
      zoom: 14.0,
    });

    // onload
    map.on("load", () => {
      map.loadImage("https://i.postimg.cc/cCQPhw7H/hotel-icon.png", (error, image) => {
        if (error) throw error;
        map.addImage("custom-marker", image);
        map.addSource("points", {
          type: "geojson",
          data: hotel_data,
        });
        map.addLayer({
          id: "points",
          type: "symbol",
          source: "points",
          layout: {
            "icon-image": "custom-marker",
            "text-field": ["get", "name"],
            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
            "text-offset": [0, 1.25],
            "text-anchor": "top",
          },
        });
      });
      // map.addLayer({
      //   id: "bus-routes-line",
      //   type: "line",
      //   source: "bus-routes",
      //   paint: {
      //     "line-color": "#15cc09",
      //     "line-width": 4,
      //   },
      // });
    });

    // 点击地图点的事件响应
    // map.on("click", "points", function (e) {
    //   let hotel_name = e.features[0].properties.name;
    //   let hotel_rank = e.features[0].properties.rank;
    //   let hotel_price = e.features[0].properties.price;
    //   let hotel_rating = e.features[0].properties.rating;
    //   let popup = new mapboxgl.Popup({ className: "popup", anchor: "bottom" });
    //   let outputString =
    //     '<div><h3 style="margin: 0 auto">' +
    //     hotel_name +
    //     "</h3><br><b>Ranking: </b>" +
    //     hotel_rank.toString() +
    //     "<br><b>Price: </b>$" +
    //     hotel_price +
    //     "<br><b>Rating: </b>" +
    //     getStars(hotel_rating) +
    //     "</div>";
    //   popup.setLngLat(e.lngLat).setHTML(outputString).addTo(map);
    // });

    return () => map.remove(); //umount时卸掉map
  }, []);

  return (
    <div className="container">
      {/* map */}
      {/* <div className="map-container">
        <div className="sidebar">
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div> */}
      <div ref={mapContainer} className="map-container" />
      {/* </div> */}

      {/* filter */}
      <div id="filters" className="filter-container">
        <div className="ratings">
          <h3>Ratings</h3>
          <input
            data-role="doubleslider"
            data-hint="true"
            data-hint-always="false"
            data-min="0"
            data-max="5"
            data-accuracy="0.5"
            data-cls-complete="bg-lightOrange"
            data-cls-marker="bg-darkBrown border-50 custom-marker"
            // onChange={() => rating_slider_change(this.value)
            onChange={() => {}}
          />
        </div>
        <div className="price">
          <h3>Price</h3>
          <input
            data-role="doubleslider"
            data-hint="true"
            data-hint-always="false"
            data-min="0"
            data-max="500"
            data-accuracy="10"
            data-cls-complete="bg-lightOrange"
            data-cls-marker="bg-darkBrown border-50 custom-marker"
            onChange={() => {}}
          />
        </div>
      </div>

      {/* ranking 待完成*/}
      <div id="rankings"></div>
    </div>
  );
}
