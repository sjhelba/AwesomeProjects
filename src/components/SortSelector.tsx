import * as React from "react"
import { InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import { SortOption } from "../utils/constantsAndTypes"
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'

interface SortSelectorProps {
  setSort: (sortType: SortOption) => void
  currentSort: SortOption
}
const selectOptions = [
  {
    sortOption: SortOption.CREATED_AT_DESC,
    labelText: 'Created Date',
    directionIcon: ArrowDownwardIcon,
  },
  {
    sortOption: SortOption.CREATED_AT_ASC,
    labelText: 'Created Date',
    directionIcon: ArrowUpwardIcon,
  },
  {
    sortOption: SortOption.RATING_DESC,
    labelText: 'Ratings',
    directionIcon: ArrowDownwardIcon,
  },
  {
    sortOption: SortOption.RATING_ASC,
    labelText: 'Ratings',
    directionIcon: ArrowUpwardIcon,
  },
]

export const SortSelector = ({ setSort, currentSort}: SortSelectorProps) => {
  const onChangeHandler = (event: SelectChangeEvent<SortOption>) => {
    const validatedSortOption = Object.values(SortOption).includes(event.target.value as SortOption) ? event.target.value as SortOption : SortOption.NONE
    setSort(validatedSortOption)
  }

  return (
    <div className="selector">
      <InputLabel id="sort-select-label">Sort by</InputLabel>
      <Select
        labelId="sort-select-label"
        label="Sort by"
        data-testid="sort-selector"
        value={currentSort}
        onChange={onChangeHandler}
        placeholder="Choose Sort Order"
      >
        {selectOptions.map(selectOption => (
          <MenuItem value={selectOption.sortOption} key={selectOption.sortOption}>
            {selectOption.labelText} <selectOption.directionIcon className="arrow-icon"  fontSize="small"/>
          </MenuItem>
        ))}

      </Select>
    </div>
  )
}