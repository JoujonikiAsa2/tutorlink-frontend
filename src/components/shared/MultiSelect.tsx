"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

type Option = {
  value: string
  label: string
}

type MultiSelectProps = {
  label: string
  options: Option[]
  placeholder?: string
  emptyMessage?: string
  onChange?: (values: string[]) => void
  maxSelections?: number
  required?: boolean
  errorMessage?: string
}

const MultiSelect = ({
  label,
  options = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "orange", label: "Orange" },
    { value: "grape", label: "Grape" },
    { value: "strawberry", label: "Strawberry" },
    { value: "watermelon", label: "Watermelon" },
    { value: "pineapple", label: "Pineapple" },
  ],
  placeholder = "Select options...",
  emptyMessage = "No options found.",
  onChange,
  maxSelections,
  required = false,
  errorMessage = "This field is required",
}: MultiSelectProps) => {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<string[]>([])
  const [touched, setTouched] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const validate = () => {
    if (required && selected.length === 0) {
      setError(errorMessage)
      return false
    }
    setError(null)
    return true
  }

  const handleSelect = (value: string) => {
    const newSelected = selected.includes(value)
      ? selected.filter((item) => item !== value)
      : maxSelections && selected.length >= maxSelections
        ? selected
        : [...selected, value]

    setSelected(newSelected)
    setTouched(true)

    // Validate after selection changes
    setTimeout(() => {
      if (required && newSelected.length === 0) {
        setError(errorMessage)
      } else {
        setError(null)
      }
    }, 0)

    onChange?.(newSelected)
  }

  const handleRemove = (value: string) => {
    const newSelected = selected.filter((item) => item !== value)
    setSelected(newSelected)

    // Validate after removal
    setTimeout(() => {
      if (required && newSelected.length === 0) {
        setError(errorMessage)
      } else {
        setError(null)
      }
    }, 0)

    onChange?.(newSelected)
  }

  const handleClear = () => {
    setSelected([])

    // Show error if required
    if (required) {
      setError(errorMessage)
    }

    onChange?.([])
  }

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen)

    // When closing the popover, mark as touched and validate
    if (!isOpen && !touched) {
      setTouched(true)
      validate()
    }
  }

  return (
    <div className="w-full">
      <p className="font-medium mr-1 text-sm pb-1">
        {label}
        {required && <span className="text-red-500">*</span>}
      </p>
      <Popover open={open} onOpenChange={handleOpenChange}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={cn("w-full justify-between", error && "border-red-500 ring-1 ring-red-500")}
            onClick={() => setTouched(true)}
          >
            {selected.length > 0 ? (
              `${selected.length} selected`
            ) : (
              <span className="text-[#B7B7B7] font-normal">{placeholder}</span>
            )}
            <div className="ml-2 flex shrink-0 items-center gap-1">
              {selected.length > 0 && (
                <Button
                  variant="ghost"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleClear()
                  }}
                  className="h-auto p-0 text-xs font-normal"
                >
                  Clear
                </Button>
              )}
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0" align="start">
          <Command>
            <CommandInput placeholder="Search options..." required/>
            <CommandList>
              <CommandEmpty>{emptyMessage}</CommandEmpty>
              <CommandGroup className="max-h-64 overflow-auto">
                {options.map((option) => {
                  const isSelected = selected.includes(option.value)
                  return (
                    <CommandItem key={option.value} value={option.value} onSelect={() => handleSelect(option.value)}>
                      <div
                        className={cn(
                          "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                          isSelected ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible",
                        )}
                      >
                        <svg
                          className="h-3 w-3"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12l5 5 9-9" />
                        </svg>
                      </div>
                      <span>{option.label}</span>
                    </CommandItem>
                  )
                })}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      {error && touched && <p className="mt-1 text-sm text-red-500">{error}</p>}

      {selected.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {selected.map((value) => {
            const option = options.find((opt) => opt.value === value)
            return (
              <Badge key={value} variant="secondary" className="px-2 py-1">
                {option?.label}
                <Button
                  variant="ghost"
                  size="sm"
                  className="ml-1 h-auto p-0 text-muted-foreground hover:text-foreground"
                  onClick={() => handleRemove(value)}
                >
                  <X className="h-3 w-3" />
                  <span className="sr-only">Remove {option?.label}</span>
                </Button>
              </Badge>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default MultiSelect

