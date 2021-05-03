// @flow

import React, { useState, memo } from "react"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"
import ExpandIcon from "@material-ui/icons/ExpandMore"
import IconButton from "@material-ui/core/IconButton"
import Collapse from "@material-ui/core/Collapse"
import { grey } from "@material-ui/core/colors"
import classnames from "classnames"
import useEventCallback from "use-event-callback"
import SidebarBox from "react-material-workspace-layout/SidebarBox"

const useStyles = makeStyles((theme) => ({
  overRide: {
    // Set text colors using theme
    "& div": {
      color: theme.palette.text.secondary,
      "& div": {
        color: "inherit",
        // Target the "grabber" handles, give them theme background color so they cover the border line
        "& div div div div div": {
          backgroundColor: theme.palette.background.default,
        },
        // Icon color using theme
        "& div.iconContainer": {
          color: "inherit!important",
          "& svg": {
            color: "inherit!important",
          },
        },
      },
      "& p": {
        color: "inherit",
      },
    },
  },
  container: { margin: 8 },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    paddingLeft: 16,
    paddingRight: 16,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    flexGrow: 1,
    paddingLeft: 8,
    // color: grey[800],
    color: "inherit",
    "& span": {
      // color: grey[600],
      color: "inherit",
      fontSize: 12,
    },
  },
  expandButton: {
    padding: 0,
    width: 30,
    height: 30,
    "& .icon": {
      marginTop: -6,
      width: 20,
      height: 20,
      transition: "500ms transform",
      "&.expanded": {
        transform: "rotate(180deg)",
      },
    },
  },
  expandedContent: {
    maxHeight: 300,
    overflowY: "auto",
    "&.noScroll": {
      overflowY: "visible",
      overflow: "visible",
    },
  },
}))

export const SidebarBoxContainer = ({
  icon,
  title,
  subTitle,
  children,
  noScroll = false,
  expandedByDefault = false,
}) => {
  const classes = useStyles()
  const content = (
    <div
      className={classnames(classes.expandedContent, noScroll && "noScroll")}
    >
      {children}
    </div>
  )

  const [expanded, changeExpanded] = useState(expandedByDefault)
  const toggleExpanded = useEventCallback(() => changeExpanded(!expanded))

  return (
    <div className={classes.overRide} id="styler">
      <SidebarBox icon={icon} title={title}>
        {children}
      </SidebarBox>
    </div>
  )
}

export default memo(
  SidebarBoxContainer,
  (prev, next) => prev.title === next.title && prev.children === next.children
)
