# All files in the 'lib' directory will be loaded
# before nanoc starts compiling.

require "nutils"
include Nanoc3::Helpers::Blogging
include Nanoc3::Helpers::Breadcrumbs
include Nanoc3::Helpers::Capturing
include Nanoc3::Helpers::Filtering
include Nanoc3::Helpers::HTMLEscape
include Nanoc3::Helpers::LinkTo
include Nanoc3::Helpers::Rendering
include Nanoc3::Helpers::Tagging
include Nanoc3::Helpers::Text
include Nanoc3::Helpers::XMLSitemap


# Multilanguage stuff

def language_code_of(item)
  # "/en/foo/" becomes "en"
  (item.identifier.match(/^\/([a-z]{2})\//) || [])[1]
end

def translations_of(item)
  @items.select do |i| 
    i[:canonical_identifier] == item[:canonical_identifier]
  end
end

LANGUAGE_CODE_TO_NAME_MAPPING = {
  'ca' => 'Català',
  'es' => 'Español'
}

def language_name_for_code(code)
  LANGUAGE_CODE_TO_NAME_MAPPING[code]
end

def language_name_of(item)
  language_name_for_code(
    language_code_of(item))
end
