import React, { useState } from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { PackType } from "features/packs/packs.api.types"
import { formatDate } from "common/utils"
import { maxNameLength } from "common/constants"
import IconButton from "@mui/material/IconButton"
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined"
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined"
import { useActions, useAppSelector } from "common/hooks"
import { selectorUserId } from "features/packs/pack.selector"
import { packsThunks } from "features/packs/packs.slice"
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined"
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined"

const longNameCut = (userName: string): string => {
  if (userName.length > maxNameLength) {
    return `${userName.slice(0, maxNameLength - 3)}...`
  }
  return userName
}

type PacksTableType = {
  packs: PackType[]
}

const headerTitleNames = [{ Name: "name" }]

export const PacksTable = ({ packs }: PacksTableType) => {
  const userId = useAppSelector(selectorUserId)
  const { removePack, updatePack } = useActions(packsThunks)

  const deleteHandler = (packId: string) => {
    removePack(packId)
  }
  const updateHandler = (pack: PackType) => {
    updatePack({ ...pack, name: "UPDATE_PACK" })
  }

  return (
    <TableContainer component={Paper} sx={{ marginTop: "24px", marginBottom: "40px" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ backgroundColor: "#EFEFEF" }}>
          <TableRow>
            <TableCell sx={textHeaderTableStyle}>Name</TableCell>
            <TableCell sx={textHeaderTableStyle} align="right">
              cards
            </TableCell>
            <TableCell sx={textHeaderTableStyle} align="right">
              Last Updated
            </TableCell>
            <TableCell sx={textHeaderTableStyle} align="right">
              Created by
            </TableCell>
            <TableCell sx={textHeaderTableStyle} align="right"></TableCell>
          </TableRow>
        </TableHead>
        {/* <TableBody>
          {packs.map((pack) => (
            <TableRow key={pack._id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell sx={textTableStyle} component="th" scope="row">
                {longNameCut(pack.name)}
              </TableCell>
              <TableCell sx={textTableStyle} align="left">
                {pack.cardsCount}
              </TableCell>
              <TableCell sx={textTableStyle} align="left">
                {formatDate(pack.updated)}
              </TableCell>
              <TableCell sx={textTableStyle} align="left">
                {longNameCut(pack.user_name)}
              </TableCell>
              <TableCell sx={textTableStyle} align="right">
                <IconButton aria-label="read" onClick={() => {}}>
                  <SchoolOutlinedIcon />
                </IconButton>
                {userId === pack.user_id ? (
                  <>
                    <IconButton aria-label="update" onClick={() => updateHandler(pack)}>
                      <CreateOutlinedIcon />
                    </IconButton>
                    <IconButton aria-label="delete" onClick={() => deleteHandler(pack._id)}>
                      <DeleteOutlinedIcon />
                    </IconButton>
                  </>
                ) : (
                  ""
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody> */}
      </Table>
    </TableContainer>
  )
}

const textHeaderTableStyle = {
  fontFamily: "Montserrat, sans-serif",
  fontStyle: "normal",
  fonteHight: 500,
  fontSize: "14px",
  lineHeight: "17px",
  /* identical to box height */
  textAlign: "left",
  color: "#000000",
}

const textTableStyle = {
  fontFamily: "Montserrat, sans-serif",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "13px",
  lineHeight: "16px",
  color: "#000000",
}