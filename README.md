# A simple 11ty startersite using Tailwind CSS

A simple boilerplate built with Eleventy and TailwindCSS.

This is a personal project and I'm still developing and tailoring it to my exact needs. I use it as my personal boilerplate for new projects. Hopefully you'll find inspiration or a good use for it yourself.

I found a lot of inspiration from other open starter packs on 11ty.dev. Special thanks to [Skeleventy](https://github.com/josephdyer/skeleventy) and [Ta11ls](https://github.com/danfascia/tai11s). A lot of my structure is inspired by those starters.

## Features

-   Get started with a simple build process.
-   PurgeCSS to remove unused CSS.
-   Built with accessibility (A11Y) in mind - feel free to suggest optimizations.
-   Layouts are build with Search Engine Optimization (SEO) in mind.
-   Buildproces using rollup.js.
-   Blog / article section ready with categories.
-   Templated with Nunjucks (.njk).
-   Easily handle drafts and scheduled posts both in production and development mode

## Installation

Download to your preferred local folder and run 'npm install' from your terminal.

To start developing type:
'npm run dev'

Your new Ta11y site will build and run in your preferred browser.

To run in production type:
'npm run prod'

This displays everything totally purged and without any drafts and scheduled posts visible.

## Folder structure

Everything is contained inside the 'src' folder. Organized like this

-   styles (all css imported to \_main.css will be bundled and purged by default)
-   scripts (all js imported to \_main.js will be bundled in output by default)
-   views
-   \_data
-   \_includes
-   all the single content files as index.njk

Note: I'm planning to rearrange the 'views' folder to better separate the content from partials and templates.

## Why did I build Ta11y?

Well. I needed something specifically tailored for my own projects. I've open-sourced it for others to use for either their own projects or just as inspiration.

If you find it helpful in any way => I'm happy.
If you have questions => Don't be a stranger :)

## Roadmap and ideas

Well. Just stuff I'd love to discover and get a handle on with this starter project.

-   Better dates (implement some sort of date filter).
-   Content with publish dates in the future is only visible in development. But I want to give them a clear [Scheduled] notice.
-   Better visuals for the navigation on small screens. Right now this is barely handled.
-   Custom 404
