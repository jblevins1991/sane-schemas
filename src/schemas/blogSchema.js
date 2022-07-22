import { authorSchema } from "../content/author";
import { postSchema } from "../content/post";
import { categorySchema } from "../global/category";
import { languageSchema } from "../global/language";
import { carouselSchema } from "../media/carousel";
import { imageSchema } from "../media/image";
import { variantSchema } from "../media/variant";

export const blogSchema = {
    authorSchema,
    postSchema,
    categorySchema,
    languageSchema,
    tagSchema,
    carouselSchema,
    imageSchema,
    variantSchema,
};
