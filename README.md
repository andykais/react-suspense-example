# React Suspense & Lazy import example

This project uses React 16 Suspense and lazy imports (briefly explained
[here](https://reactjs.org/blog/2018/10/23/react-v-16-6.html)) to make a simple tv show search app.

The idea is to stop pushing data fetching up into containers, and recouple data fetching with the components
that actually use it.

The "greppable" techniques in this project are:

- `React.Suspense` - a HOC that handles a fallback component when data (or a lazy component) are loading
- `React.lazy` - wraps a function returning a component dynamically imported
- `unstable_createResource` - a caching mechanism that takes a function with an id as a parameter returning a
  promise. It also can block rendering on a component wrapped in `React.Suspense`
