/// <reference types="react-scripts" />

declare module '*.png'
declare module '*.svg'
declare module '*.jpeg'
declare module '*.jpg'
declare module '*.webp'

// For Module.scss
declare module '*.scss' {
  const content: Record<string, string>
  export default content
}
