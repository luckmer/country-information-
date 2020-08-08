import Countries from "./pages/Countries";
import Details from "./pages/Details";

export const routes = [
    { path: "/", Component: Countries, name: "countries" },
    { path: "/:id", Component: Details, name: "details" },
];
