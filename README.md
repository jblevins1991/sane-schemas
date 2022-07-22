# Sane Schemas

These schemas are to make sanity live up to its name. They include ADA considerations where they help (ahem-alt text), helpful SEO fields for your posts, and some schemas that may be helpful.

## Content Schemas

Content schemas are for short-form and long-form content like pages.

- Author - The author of a post or a project.
- FAQ - Frequently asked questions contains the question, answer, and number of times asked.
- Post - A blog post that an author has written.
- Product - A master product type that contains the common information about your product (e.g. name, description, upc).
- Project - An open-source project template that contains urls to documentation, artifact hosting, and an article about building it.
- Product Variant - A variant product type that contains the variation images, price, sku, etc.
- Review - A product review.

## Global Schemas

Global schemas are types that are used in nearly any top level document.

- Category - Categories allow better filtering of posts and products.
- Language - Language unlocks internationalization of posts and products.
- Tag - Tag allows better filtering of posts and products.

## Media Schemas

Media schemas are multi-media types that take web accessibility in mind.

- Carousel - An array of the Image document type.
- Image - An a11y image type.
- Variant - A variant of the image, usually for different screen resolutions.

## Complete Schemas

Complete schemas are the fastest way for you to use our schema types. They are compound schemas built by the many schemas above.

- Blog Schema - The Author, Post, Category, Language, Tag, Carousel, Image, and Variant schemas bundled together to give you blogging capabilities with one line of code.

- Product Schema - The Product, Product Variant, Review, Category, Language, Tag, Carousel, Image, and Variant schemas bundled together to give you ecommerce product capabilities with one line of code.

## Paginating Schemas

To paginate a query to the post type, do something similar to below.

```
/**
 * Gets the current and next page of results. Requires a start, end, and offset variable.
 * 
 * Start - the index of the first item on the current page
 * End - the index of the last item on the current page
 * Offset - the number of items on each page
 */
const query = `
    *[type == "post" && category[].name == "cat-name"] | order(lastUpdated desc) [$start..$end] {
        ..., # all of the fields on the post

        # sub-query to get the next page of results
        "next": *[type == "post" && category[].name == ^.category.name] | order(lastUpdated desc) [$end..$nextEnd] {
            ...
        }
    }`;

```

## Getting Images

Images in this schema are extended to have a default `image` type and alternative text associated with them 
for stronger web accessibility.

```
*[type === "post"] {
    ...,
    "thumbnail": ^.thumbnail->{
        alt,
        "variants": ^.variants[]->{
            width,
            height,
            aspectRatio,
            "url": ^.image->asset
        }
    }
}
```

The code above goes into our a11y-image document type and returns all of the variants and the alt text 
for them. Each variant returns a width, height, aspect-ratio, and the url.