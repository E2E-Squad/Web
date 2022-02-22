import * as NextImage from "next/image";

const OriginalNextImage = NextImage.default;
console.log("override image")
Object.defineProperty(NextImage, "default", {
    configurable: true,
    value: (props: NextImage.ImageProps) => <OriginalNextImage {...props} unoptimized />,
});
