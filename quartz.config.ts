import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "电影艺术笔记",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "film.amanerx01.de",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
    // 字体配置部分
    typography: {
      header: "Inter",           // 更现代的无衬线字体
      body: "Noto Serif SC",
      code: "JetBrains Mono",   // 更好的代码字体
    },

    // 颜色配置部分
    colors: {
      lightMode: {
        light: "#ffffff",           // 纯白背景
        lightgray: "#f7f7f8",      // 非常浅的灰色
        gray: "#d1d5db",           // 中等灰色
        darkgray: "#6b7280",       // 深一些的灰色
        dark: "#1f2937",           // 深色文字
        secondary: "#2563eb",       // Claude风格的蓝色
        tertiary: "#7c3aed",        // 紫色强调色
        highlight: "rgba(37, 99, 235, 0.1)",     // 淡蓝色高亮
        textHighlight: "#fef3c7",   // 温暖的黄色文本高亮
      },
      darkMode: {
        light: "#0f0f0f",          // 深黑背景
        lightgray: "#1a1a1a",      // 深灰背景
        gray: "#374151",           // 中等灰色
        darkgray: "#9ca3af",       // 浅灰色文字
        dark: "#f9fafb",           // 几乎白色的文字
        secondary: "#60a5fa",       // 较亮的蓝色
        tertiary: "#a78bfa",        // 较亮的紫色
        highlight: "rgba(96, 165, 250, 0.15)",   // 淡蓝色高亮
        textHighlight: "#fbbf24",   // 金黄色文本高亮
      },
    },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
