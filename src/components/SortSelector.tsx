import * as React from "react"
import { MenuItem, Select } from "@mui/material"

export const SortSelector = () => {
  return (
    <Select label="Sort by" data-testid="sort-selector" autoWidth defaultValue="">
      <MenuItem value="created-sort">Created Date</MenuItem>
      <MenuItem value="rating-sort">Rating</MenuItem>
    </Select>
  )
}