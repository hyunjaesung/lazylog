"use client";

import Image, { ImageProps } from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";

const components = {
  Image: ({ src, alt, width, height }: ImageProps) => (
    <div className="flex justify-center">
      <Image src={src} alt={alt} width={width} height={height} />
    </div>
  ),
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
}
