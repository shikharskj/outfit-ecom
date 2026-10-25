"use client";

import type { Selection } from "react-aria-components";
import { ChevronDown } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Dropdown } from "@/components/base/dropdown/dropdown";
import type { Facet } from "@/utils/productFilters";

type SizeDropdownProps = {
  facet: Facet; // the "size" facet from buildFacets
  selected: Set<string>;
  onChange: (sizes: Set<string>) => void;
};

// Size in the top bar: an Untitled UI dropdown with checkbox items, grouped
// into adult and kids' sizes when a page has both. Stays open while choosing.
export default function SizeDropdown({ facet, selected, onChange }: SizeDropdownProps) {
  const sections = [...new Set(facet.options.map((option) => option.section ?? ""))];
  // Sizes that would give no results can't be picked, unless already chosen.
  const disabledKeys = facet.options
    .filter((option) => option.count === 0 && !selected.has(option.value))
    .map((option) => option.value);

  const onSelectionChange = (keys: Selection) => {
    // "all" only happens with select-all, which this menu doesn't offer.
    if (keys !== "all") onChange(new Set([...keys].map(String)));
  };

  return (
    <Dropdown.Root>
      <Button color="secondary" size="sm" iconTrailing={ChevronDown}>
        Size
        {selected.size > 0 && (
          <span className="ml-1 grid h-5 min-w-5 place-items-center rounded-full bg-gray-950 px-1 text-xs font-semibold text-white">
            {selected.size}
          </span>
        )}
      </Button>
      <Dropdown.Popover placement="bottom left" className="max-h-80 w-56">
        <Dropdown.Menu
          aria-label="Size"
          selectionMode="multiple"
          selectedKeys={selected}
          disabledKeys={disabledKeys}
          onSelectionChange={onSelectionChange}
        >
          {sections.map((section) => (
            <Dropdown.Section key={section || "sizes"}>
              {sections.length > 1 && (
                <Dropdown.SectionHeader className="px-4 pt-2 pb-1 text-xs font-semibold text-tertiary">
                  {section}
                </Dropdown.SectionHeader>
              )}
              {facet.options
                .filter((option) => (option.section ?? "") === section)
                .map((option) => (
                  <Dropdown.Item
                    key={option.value}
                    id={option.value}
                    label={option.label}
                    textValue={option.label}
                    addon={String(option.count)}
                    selectionIndicator="checkbox"
                  />
                ))}
            </Dropdown.Section>
          ))}
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown.Root>
  );
}
