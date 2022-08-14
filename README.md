# Sane Schemas

These schemas are to make sanity live up to its name. They include ADA considerations where they help (ahem-alt text), helpful SEO fields for your posts, and some schemas that may be helpful.

## Content Schemas

Content schemas are for short-form and long-form content like pages.

- Author - The author of a post or a project.
- Documentation - A version and language controlled page type for documentation.
- FAQ - Frequently asked questions contains the question, answer, and number of times asked.
- Navigation: A version and language controlled page type for site navigation.
- NavigationItem: A navigation item that also can have child navigation items for super navs.
- Post - A blog post that an author has written.
- Project - An open-source project template that contains urls to documentation, artifact hosting, and an article about building it.

## Fields

Fields that may be useful when building your content out.

- title: A string field built for page title. It has validation for seo best-practices.
- slug: A simple slug field.
- description: A string field built for page description. It has validation for seo best-practices.
- language: A reference field to the Language schema.
- canonical_url: A url field for canonical url metadata for a page.

## Global Schemas

Global schemas are types that are used in nearly any top level document.

- Category - Categories allow better filtering of posts and products.
- Language - Language unlocks internationalization of posts and products.
- Tag - Tag allows better filtering of posts and products.
- Version - Version allows you to keep many versions of the same document.

## Media Schemas

Media schemas are multi-media types that take web accessibility in mind.

- Carousel - An array of the Image document type.
- Image - An a11y image type.
- Variant - A variant of the image, usually for different screen resolutions.

## Complete Schemas

Complete schemas are the fastest way for you to use our schema types. They are compound schemas built by the many schemas above.

- Blog Schema - The Author, Post, Category, Language, Tag, Carousel, Image, and Variant schemas bundled together to give you blogging capabilities with one line of code.

- Documentation Schema - The Author, Documentation, FAQ, Navigation, NavigationItem, Post, Category, Language, Tag, and Version schemas bundled together to give you documentation capabilities with one line of code.

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