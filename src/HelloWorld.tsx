import { z } from "zod";
import { zColor } from "@remotion/zod-types";

export const myCompSchema = z.object({
    titleText: z.string(),
    titleColor: zColor(),
    logoColor1: zColor(),
    logoColor2: zColor(),
});

export const HelloWorld: React.FC<z.infer<typeof myCompSchema>> = () => {
    return (
        <div style={{
            position: 'relative',
            backgroundColor: "#222222",
            width: '100%',
            height: '100%',
            display: 'flex',
        }}>
            <p style={{
                color: '#ffffff',
                fontSize: 200,
                lineHeight: 0.2,
                margin: 0,
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                textAlign: "center",
                alignSelf: "center",
            }}>Some text here</p>
        </div>
    );
};
