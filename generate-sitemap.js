import { writeFileSync } from 'fs';
import { SitemapStream, streamToPromise } from 'sitemap';
import prettier from 'prettier';
import prettierPluginXml from 'prettier-plugin-xml'; // Explicitly import XML plugin

const BASE_URL = 'https://harrytransbeton.com';

const pages = [
  { url: '/', lastmod: new Date().toISOString() },
  { url: '/about', lastmod: new Date().toISOString() },
  { url: '/contact', lastmod: new Date().toISOString() },
  { url: '/gallery', lastmod: new Date().toISOString() },
  { url: '/services', lastmod: new Date().toISOString() },
];

(async () => {
  try {
    const sitemapStream = new SitemapStream({ hostname: BASE_URL });

    pages.forEach((page) => {
      sitemapStream.write({
        url: page.url,
        changefreq: 'daily',
        priority: 0.8,
        lastmod: page.lastmod,
      });
    });

    sitemapStream.end();

    // Convert stream to string
    const sitemapData = await streamToPromise(sitemapStream).then((data) => data.toString());

    // Ensure XML declaration is at the top
    const formattedSitemap = await prettier.format(
      `<?xml version="1.0" encoding="UTF-8"?>\n${sitemapData}`,
      {
        parser: 'xml',
        plugins: [prettierPluginXml],
      }
    );

    // Write formatted sitemap to file
    writeFileSync('public/sitemap.xml', formattedSitemap);

    console.log('✅ Formatted sitemap with lastmod generated successfully!');
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
  }
})();
