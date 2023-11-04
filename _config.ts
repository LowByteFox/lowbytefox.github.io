import lume from "lume/mod.ts";
import postcss from "lume/plugins/postcss.ts";
import inline from "lume/plugins/inline.ts";
import metas from "lume/plugins/metas.ts";
import minify_html from "lume/plugins/minify_html.ts";

const site = lume();

site.use(postcss());
site.use(metas());
site.use(inline());
site.use(minify_html({
    extensions: [".html"],
    options: {
        keep_html_and_head_opening_tags: true,
        keep_spaces_between_attributes: true,

    }
}));

export default site;
