import manifest from "@neos-project/neos-ui-extensibility";

import Editor from "./Editor";

manifest("Carbon.RangeEditor:Editor", {}, (globalRegistry) => {
    const editorsRegistry = globalRegistry.get("inspector").get("editors");

    editorsRegistry.set("Carbon.RangeEditor/Editor", {
        component: Editor,
    });
});
