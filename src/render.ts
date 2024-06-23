import {
    BrowserLog,
    renderFrames,
    selectComposition,
} from "@remotion/renderer"
import { bundle } from "@remotion/bundler"

const render = "HelloWorld"

async function main() {

    const bundleLocation = await bundle({
        entryPoint: "./src/index.ts",
    })

    const composition = await selectComposition({
        serveUrl: bundleLocation,
        id: render,
    })


    await renderFrames({
        composition,
        serveUrl: bundleLocation,
        inputProps: {
            size: 'big', // <- does not take effect
            titleText: "Welcome to Remotion",
            titleColor: "#000000",
            logoColor1: "#91EAE4",
            logoColor2: "#86A8E7",
        },
        scale: 1,
        logLevel: "verbose",
        imageFormat: "jpeg",
        jpegQuality: 100,
        onStart,
        onFrameUpdate,
        onBrowserLog,
        outputDir: "out/frames",
        frameRange: 10,
    })
}

main().catch(console.error).then(console.log)

//

function onStart() {
    console.log("Starting rendering...")
}

function onFrameUpdate(
    framesRendered: number,
    frame: number,
    timeToRenderInMilliseconds: number,
) {
    console.log(`${framesRendered} frames rendered.`)
    console.log(`Frame ${frame} was just rendered.`)
    console.log(`It took ${timeToRenderInMilliseconds}ms to render that frame.`)
}

function onBrowserLog(info: BrowserLog) {
    console.log(`${info.type}: ${info.text}`)
    console.log(
        info.stackTrace
            .map((stack) => {
                return `  ${stack.url}:${stack.lineNumber}:${stack.columnNumber}`
            })
            .join("\n"),
    )
}
