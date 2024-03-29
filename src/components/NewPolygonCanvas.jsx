import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import $ from "jquery";
import FSS from "utility/geometryangle.js";
import { useTheme } from "styled-components";

/**
 * Get window size and rerender on size changes
 * https://stackoverflow.com/questions/19014250/rerender-view-on-browser-resize-with-react#19014495
 * @return {number[]} Width and height of browser window as a pair.
 */
function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

function NewPolygonCanvas() {
  const divRef = useRef(null);
  const [windowWidth, windowHeight] = useWindowSize();
  const { geometry: geometryTheme } = useTheme();
  useEffect(() => {
    // remove existing canvas elements so they can be garbage collected
    for (const child of divRef.current.children) {
      child.remove();
    }

    const geometry = $(divRef.current).Geometryangle({
      // handle transparent colors
      mesh: {
        width: 1.2,
        height: 1.2,

        // How far should the mesh vary into z-space.
        depth: 15,

        // Number of columns for the mesh.
        rows: Math.round(windowHeight / 70),

        // Number of rows
        columns: Math.round(windowWidth / 70),

        columns_auto: false,

        // Number of rows for the mesh.

        rows_auto: true,
        zoom: 1,
        xRange: 0.8,
        yRange: 0.4,
        zRange: 3.0,
        ambient: geometryTheme.ambient,
        diffuse: geometryTheme.diffuse,
        background: geometryTheme.background,
        speed: 0.0002,
        fluctuationSpeed: 0.2,
        fluctuationIntensity: 0,
        onRender: function () {},
        floorPosition: false,
        draw: true,
      },

      lights: {
        // How many light sources belong to this light.
        count: 1,

        xyScalar: 1,

        // Position of light source.
        zOffset: 100,

        ambient: "rgba(97,0,94, 1)",
        diffuse: "rgba(97,18,94, 1)",
        speed: 0.001,
        gravity: 100,

        // Dampening of light's movements.
        dampening: 0.95,

        minLimit: 10,
        maxLimit: null,
        minDistance: 20,
        maxDistance: 400,
        autopilot: false,
        draw: false, //show circle
        bounds: FSS.Vector3.create(),
        step: FSS.Vector3.create(
          Math.randomInRange(0.2, 1.0),
          Math.randomInRange(0.2, 1.0),
          Math.randomInRange(0.2, 1.0)
        ),
      },

      // specify the thickness, color, stroke, etc.
      line: {
        fill: "rgba(0, 0, 0, 0)",
        thickness: 0,
        fluctuationIntensity: 0,
        fluctuationSpeed: 0.5,
        draw: false,
      },

      // Set the point attributes for the vertex.
      vertex: {
        // Radius of vertice circle.
        radius: 0,

        fill: "rgba(0, 0, 0, 0)",

        // Fluctuates opacity of vertex.
        fluctuationSpeed: 0.5,

        fluctuationIntensity: 0,
        strokeWidth: 0,
        strokeColor: "rgba(0, 0, 0, 0)",

        // Instead of setting alpha channel to zero
        // Set draw to false to avoid computing.
        draw: false,
      },
    });
    // call the geometry cleanup function when this component dies
    return () => geometry.destroy();
  }, [windowWidth, windowHeight]);

  return (
    <div
      ref={divRef}
      style={{
        position: "absolute",
        width: windowWidth,
        height: windowHeight,
        overflow: "hidden",
      }}
    />
  );
}

// Testing environment doesn't like this component. Turn it off when testing.
const disableIfTesting = (canvas) =>
  process.env.NODE_ENV === "test" ? () => null : canvas;

export default disableIfTesting(NewPolygonCanvas);
