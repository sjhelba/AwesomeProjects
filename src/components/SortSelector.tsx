import * as React from "react"
import { InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import { SortOption } from "../utils/constantsAndTypes"
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'

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
        <MenuItem value={SortOption.CREATED_AT_DESC} >Created Date <ArrowUpwardIcon/></MenuItem>
        <MenuItem value={SortOption.CREATED_AT_ASC} >Created Date <ArrowDownwardIcon/></MenuItem>
        <MenuItem value={SortOption.RATING_DESC} >Rating <ArrowUpwardIcon/></MenuItem>
        <MenuItem value={SortOption.RATING_ASC} >Rating <ArrowDownwardIcon/></MenuItem>

      </Select>
    </div>
  )
}