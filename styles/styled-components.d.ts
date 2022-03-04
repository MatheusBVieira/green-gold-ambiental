import "styled-components"

declare module "styled-components" {
    export interface DefaultTheme {
        pageBackground: string
        pageForeground: string
        primaryBackground: string
        primaryForeground: string
        headerBackground: string
        headerForeground: string
        footerBackground: string
        footerForeground: string
        attentionForeground: string
    }
}