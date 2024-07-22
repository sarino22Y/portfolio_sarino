import Image from 'next/image'
import React from 'react'

type LogoImageProps = {
    Image: string;
    title: string;
    width: number;
    height: number;
}

export const LogoImage = (props : LogoImageProps) => {
  return (
    <Image src={props.Image} alt={props.title} width={props.width} height={props.height}/>
  );
}
