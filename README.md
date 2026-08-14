# Impulse Theme

A modern, high-performance Shopify theme designed for conversion and growth. Impulse is a conversion-focused theme with everything you need to showcase products, build trust, and scale your brand.

## 🎯 Features

- ✨ **Clean, Modern Design** - Carefully crafted UI for maximum conversions
- 📱 **Fully Responsive** - Works seamlessly on all devices
- ⚡ **High Performance** - Optimized for speed and SEO
- 🎨 **Customizable Color Schemes** - Easy theme customization
- 📦 **Pre-built Sections** - Hero, Featured Collection, Product Cards, Footer
- 🌍 **Multi-language Support** - English and Chinese (Simplified) included
- ♿ **Accessibility** - WCAG compliant
- 🔧 **Developer Friendly** - Clean, well-structured Liquid code

## 📁 Project Structure

```
├── layout/
│   └── theme.liquid          # Main layout file
├── templates/
│   ├── index.json            # Homepage template
│   ├── product.json          # Product page template
│   ├── collection.json       # Collection page template
│   └── page.json             # Static page template
├── sections/
│   ├── header.liquid         # Header section
│   ├── footer.liquid         # Footer section
│   ├── hero.liquid           # Hero banner section
│   └── featured-collection.liquid  # Featured products section
├── snippets/
│   ├── product-card.liquid   # Product card component
│   └── meta-tags.liquid      # SEO meta tags
├── assets/
│   ├── base.css              # Base styles
│   ├── theme.css             # Theme-specific styles
│   └── global.js             # Global JavaScript
├── config/
│   ├── settings_schema.json  # Theme settings
│   └── settings_data.json    # Default settings
├── locales/
│   ├── en.json               # English translations
│   └── zh-CN.json            # Chinese translations
├── package.json              # Theme metadata
└── README.md                 # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- Shopify CLI
- A Shopify store

### Installation

1. **Clone or download the theme**
   ```bash
   cd path/to/theme
   ```

2. **Link to Shopify store**
   ```bash
   shopify theme dev
   ```

3. **Upload as custom theme**
   - Create a `.zip` file of the entire theme folder
   - Go to Shopify Admin → Sales Channels → Online Store → Themes
   - Click "Upload theme" and select the `.zip` file

## 🎨 Customization

### Theme Settings
Edit `config/settings_schema.json` to add new customizable options:
- Colors
- Fonts
- Layout width
- Spacing

### Adding New Sections
1. Create a new `.liquid` file in the `sections/` folder
2. Include a JSON configuration at the top
3. Add to templates or homepage

### Styling
- Global styles: `assets/base.css`
- Theme-specific: `assets/theme.css`
- Section-specific: Use `{% stylesheet %}` tag in section files

## 🌐 Multi-language Support

The theme includes support for multiple languages:
- **English**: `locales/en.json`
- **Simplified Chinese**: `locales/zh-CN.json`

To add more languages:
1. Create a new JSON file in `locales/`
2. Follow the same key structure as existing files
3. Reference translations using `{{ 'key.path' | t }}`

## 📱 Responsive Design

The theme is fully responsive with breakpoints at:
- 768px (mobile)
- 1024px (tablet)
- 1200px+ (desktop)

## 🔍 SEO Features

- ✅ Semantic HTML markup
- ✅ Open Graph meta tags
- ✅ Twitter Card support
- ✅ Structured data ready
- ✅ Fast loading performance

## 🛠️ Development

### File Naming Conventions
- Sections: `section-name.liquid`
- Snippets: `snippet-name.liquid`
- Liquid filters: lowercase with hyphens
- CSS classes: kebab-case
- JavaScript variables: camelCase

### Liquid Best Practices
- Use liquid comments for sections
- Leverage Shopify filters
- Minimize JavaScript where possible
- Use CSS for animations when feasible

## 📦 Building & Deployment

### Creating a ZIP file for upload:
```bash
# On Linux/Mac
zip -r theme-name.zip . -x "*.git*" "node_modules/*" ".vscode/*"

# Or use your IDE's archive feature
```

### Deploy with Shopify CLI:
```bash
shopify theme push
```

## 🤝 Contributing

To contribute:
1. Create a feature branch
2. Make your changes
3. Test thoroughly on a development store
4. Submit a pull request

## 📄 License

This theme is released under the MIT License. See LICENSE file for details.

## 🆘 Support

For issues, questions, or suggestions:
1. Check existing GitHub issues
2. Create a new issue with detailed information
3. Include screenshots and theme settings used

## 📚 Resources

- [Shopify Theme Development](https://shopify.dev/themes)
- [Liquid Reference](https://shopify.dev/api/liquid)
- [Shopify CLI](https://shopify.dev/themes/tools/cli)
- [Dawn Theme (Reference)](https://github.com/Shopify/dawn)

---

**Version**: 1.0.0  
**Last Updated**: 2024  
**Maintained by**: Your Store Team