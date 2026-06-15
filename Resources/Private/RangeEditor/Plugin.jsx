import manifest from "@neos-project/neos-ui-extensibility";
import React, { Suspense, lazy } from "react";

const LazyEditor = lazy(() => import("./RangeEditor"));

const component = (props) => (
    <Suspense fallback="">
        <LazyEditor {...props} />
    </Suspense>
);

manifest("Carbon.RangeEditor:Editor", {}, (globalRegistry) => {
    const editorsRegistry = globalRegistry.get("inspector").get("editors");

    editorsRegistry.set("Carbon.RangeEditor/Editor", {
        component,
    });
});
