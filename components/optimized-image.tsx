"use client"

import Image, { type ImageProps } from "next/image"
import { useState, useEffect } from "react"

type OptimizedImageProps = ImageProps & {
  lowQualitySrc?: string
}

export function OptimizedImage({ src, alt, lowQualitySrc, ...props }: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    // Only set up intersection observer if not using priority
    if (props.priority) {
      setIsIntersecting(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true)
            observer.disconnect()
          }
        })
      },
      { rootMargin: "200px" }, // Start loading when image is 200px from viewport
    )

    const currentRef = document.getElementById(`image-${alt?.replace(/\s+/g, "-")}`)
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [alt, props.priority])

  return (
    <div
      id={`image-${alt?.replace(/\s+/g, "-")}`}
      className={`relative ${props.className || ""}`}
      style={{ ...props.style }}
    >
      {(isIntersecting || props.priority) && (
        <Image
          src={src || "/placeholder.svg"}
          alt={alt || ""}
          {...props}
          onLoad={() => setIsLoaded(true)}
          className={`${props.className || ""} ${
            isLoaded ? "opacity-100" : "opacity-0"
          } transition-opacity duration-500`}
        />
      )}
    </div>
  )
}
