# A simple 11ty startersite using Tailwind CSS and AlpineJS

A simple boilerplate built with Eleventy and TailwindCSS.

This is a personal project and I'm still developing and tailoring it to my exact needs. I use it as my personal boilerplate for new projects. Hopefully you'll find inspiration or a good use for it yourself.

I found a lot of inspiration from other open starter packs on 11ty.dev. Special thanks to [Skeleventy](https://github.com/josephdyer/skeleventy) and [Ta11ls](https://github.com/danfascia/tai11s). A lot of my structure is inspired by those
starters.

I try have it setup with a nice and simple starter design. But my main focus is to implement more technical parts like easy draft, scheduled post and navigation functionality.

## Features

- Get started with a simple build process.
- Easily handle drafts and scheduled posts both in production and development mode.
- Built with accessibility (A11Y) in mind - feel free to suggest optimizations.
- Layouts are build with Search Engine Optimization (SEO) in mind.
- Blog / article section (will be ready with categories).
- Templated with Nunjucks (.njk).
- Free to use Nunjucks (.njk), Markdown (.md) or Liquid (.liquid) for all
- Handle dates easily (use date-fns filters)
- Category structure based on tags
- Syntax highlighting

## Installation

Download to your preferred local folder and run `npm install` from your terminal.

To **start developing** type:

`npm run dev`

Your new Ta11y site will build and run in your preferred browser.

To **run in production** type:

`npm run prod`

This displays everything totally purged and without any drafts and scheduled posts visible.

## Folder structure

Everything is contained inside the 'src' folder. Organized like this

- views
  -- pages
  -- posts
- \_includes

## Why did I build Ta11y?

Well. I needed something specifically tailored for my own projects. I've open-sourced it for others to use for either their own projects or just as inspiration.

If you find it helpful in any way => I'm happy. If you have questions => Don't be a stranger :) If you find a bug => Please open an issue.

## Roadmap and ideas

Well. Just stuff I'd love to discover and get a handle on with this starter project.

- Handling image and SVG-optimization
- Better template-data in the <head> of the page. Right now it is lacking a lot.
- Custom 404 (ready for Netlify).
- Write about how the site is setup.
- Add better webmanifest-data.
