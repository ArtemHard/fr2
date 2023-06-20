import React, { useEffect } from "react"
import Pagination, { PaginationProps } from "@mui/material/Pagination"
import Stack from "@mui/material/Stack"
import { useActions, useAppDispatch, useAppSelector } from "common/hooks"
import { packsActions, packsThunks } from "features/packs/packs.slice"
import { selectorIsLoading } from "app/app.selectors"
import { selectorCardPacksTotalCount, selectorPage, selectorPageCount } from "features/packs/pack.selector"

// interface PaginationType extends PaginationProps {
//   onChangePage: (page: number) => void
// }

export const PaginationRounded = () => {
  const isLoading = useAppSelector(selectorIsLoading)
  const pageCount = useAppSelector(selectorPageCount)
  const page = useAppSelector(selectorPage)
  const cardPacksTotalCount = useAppSelector(selectorCardPacksTotalCount)

  const { fetchPacks } = useActions(packsThunks)
  const { changeFilterParams } = useActions(packsActions)
  const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
    console.log(event)
    console.log(page)
    changeFilterParams({ page: page })
    fetchPacks()
  }

  useEffect(() => {}, [])

  useEffect(() => {}, [])
  return (
    <Stack spacing={2}>
      <Pagination count={pageCount} page={page} shape="rounded" onChange={handleChange} disabled={isLoading} />
      {/* <Pagination count={10} variant="outlined" shape="rounded" /> */}
    </Stack>
  )
}
