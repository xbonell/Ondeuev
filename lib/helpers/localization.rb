module Localization

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

end

# Load requirements
require 'nanoc3'