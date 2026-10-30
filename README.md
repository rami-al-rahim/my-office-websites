# rami-dev.com (Jekyll)

## Add a product
Create `_products/my-product.md`:

    ---
    title: My Product
    tagline: One sentence on what it does.
    status: Live          # shown as a label (optional)
    order: 3              # lower numbers appear first
    link: https://example.com   # optional button
    cta: Try it           # optional button text
    stack: [Go, Postgres] # optional
    ---
    Full description in Markdown.

The product appears on the home page and /products/, and gets its own page at /products/my-product/. Delete the file to remove it.

## Add a blog post
Create `_posts/YYYY-MM-DD-my-title.md` with `title:` front matter. It appears at /blog/my-title/.

## Newsletter and contact form
Set `newsletter_action` and `contact_form_action` in `_config.yml`.

## Run locally
    bundle install
    bundle exec jekyll serve

## Deploy on Render
Push to GitHub. In Render choose New > Blueprint (uses `render.yaml`), or New > Static Site with build command `bundle install && bundle exec jekyll build` and publish directory `_site`. Add `rami-dev.com` under Custom Domains.
