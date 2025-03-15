# Personal Website

A modern, responsive personal website built with Next.js, featuring an interactive CV, blog system, and contact form.

## Features

- **Interactive CV**: Collapsible sections with animations and PDF download option
- **Blog System**: Markdown-based blog with categories and search functionality
- **Contact Form**: Simple and elegant contact form
- **Dark Mode**: System-aware theme with manual toggle option
- **Responsive Design**: Mobile-first approach for all screen sizes

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

### Updating Your Information

1. **Personal Details**: Edit `src/app/page.tsx` to update your name and introduction
2. **CV Content**: Modify `src/app/cv/page.tsx` to update your professional information
3. **Blog Posts**: Add new blog posts in the `src/content/blog` directory using Markdown format
4. **Contact Information**: Update social media links in `src/app/contact/page.tsx`

### Styling

- Theme colors and styles can be modified in `src/app/globals.css`
- Component-specific styles are managed through Tailwind classes

## Deployment

### GitHub Pages Setup

1. Create a GitHub repository for your website
2. Update the repository settings to enable GitHub Pages
3. Configure your custom domain (optional)

```bash
# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [MDX](https://mdxjs.com/) - Blog content management

## Future Enhancements

- Automated GitHub projects integration
- LinkedIn profile sync
- Analytics integration
- RSS feed for blog posts

## License

MIT
