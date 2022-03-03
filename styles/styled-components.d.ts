import "styled-components"

declare module "styled-components" {
    export interface DefaultTheme {
        pageBackground: string
        pageForeground: string
        primaryBackground: string
        primaryForeground: string
        attentionForeground: string
    }
}