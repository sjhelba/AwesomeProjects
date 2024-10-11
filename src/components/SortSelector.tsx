import * as React from "react"
import { InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import { SortOption } from "../utils/constantsAndTypes"

interface SortSelectorProps {
  setSort: (sortType: SortOption) => void
  currentSort: SortOption
}

export const SortSelector = ({ setSort, currentSort}: SortSelectorProps) => {
  const onChangeHandler = (event: SelectChangeEvent<SortOption>) => {
    const validatedSortOption = Object.values(SortOption).includes(event.target.value as SortOption) ? event.target.value as SortOption : SortOption.NONE
    setSort(validatedSortOption)
  }

  return (
    <div>
      <InputLabel id="sort-select-label">Sort by</InputLabel>
      <Select labelId="sort-select-label" data-testid="sort-selector" autoWidth value={currentSort} onChange={onChangeHandler} >
        <MenuItem value={SortOption.CREATED_AT} >Created Date</MenuItem>
        <MenuItem value={SortOption.RATING} >Rating</MenuItem>
      </Select>
    </div>
  )
}