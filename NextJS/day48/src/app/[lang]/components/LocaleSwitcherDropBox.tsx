'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { i18n } from '@/i18n.config'
import {Autocomplete, AutocompleteItem, Avatar} from "@nextui-org/react";

export default function LocaleSwitcherDropBox() {
  const pathName = usePathname()

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }
  console.log(i18n.locales)

  return (
      <Autocomplete
          defaultItems={i18n.locales}
          variant="bordered"
          label="Assigned to"
          placeholder="Select a user"
          labelPlacement="inside"
          className="max-w-xs"
      >
        {i18n.locales && i18n.locales.map((locale, index) => {
          return <AutocompleteItem key={index} textValue={locale}>
            <div className="flex gap-2 items-center">
              <div className="flex flex-col">
                <span className="text-small">{locale}</span>
                <span className="text-tiny text-default-400">{locale}</span>
              </div>
            </div>
          </AutocompleteItem>
        })}
      </Autocomplete>
  )
}
