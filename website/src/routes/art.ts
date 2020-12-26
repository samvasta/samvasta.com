/* eslint-disable import/prefer-default-export */

const Home = '/art';
const AlgorithmsHome = `${Home}/procgen`;

const Algorithms = {
  Landscapes: `${AlgorithmsHome}/landscapes`,
  Triangles: `${AlgorithmsHome}/triangles`,
  Geometric: `${AlgorithmsHome}/geometric`,
  Bezier: `${AlgorithmsHome}/bezier`,
  Hatched: `${AlgorithmsHome}/hatched`,
  AllColors: `${AlgorithmsHome}/all-colors`,
  Tesselation: `${AlgorithmsHome}/tesselation`,
  Delaunay: `${AlgorithmsHome}/delaunay`,
  Watercolors: `${AlgorithmsHome}/watercolors`,
};

const Techniques = {
  Randomness: `${AlgorithmsHome}techniques/random`,
  Color: `${AlgorithmsHome}techniques/color`,
  MidpointDisplacement: `${AlgorithmsHome}techniques/midpoint-displacement`,
};

export const GoTo = {
  Home,
  AlgorithmsHome,
  Algorithms,
  Techniques,
};
