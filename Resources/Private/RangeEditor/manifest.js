import manifest from "@neos-project/neos-ui-extensibility";

import Editor from "./index.jsx";

manifest("Carbon.RangeEditor:Editor", {}, (globalRegistry) => {
    const editorsRegistry = globalRegistry.get("inspector").get("editors");

    editorsRegistry.set("Carbon.RangeEditor/Editor", {
        component: Editor,
    });
});
