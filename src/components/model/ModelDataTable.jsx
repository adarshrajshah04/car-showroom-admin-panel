import * as React from "react";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
// import SaveIcon from "@mui/icons-material/Save";
// import CancelIcon from "@mui/icons-material/Close";
import VisibilityIcon from "@mui/icons-material/Visibility";
import {
  DataGrid,
  GridActionsCellItem,
  Toolbar,
  ToolbarButton,
  ColumnsPanelTrigger,
  FilterPanelTrigger,
  ExportCsv,
} from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import BellContext from "../BellContext";

export default function ModelDataTable({ model, setUpdate, brand }) {
  console.log(brand);

  const data = useContext(BellContext);
  const { setBellarr } = data;

  // const navigate = useNavigate()

  const columns = [
    { field: "id", headerName: "Id" },
    { field: "title", headerName: "Name", width: "150" },
    {
      field: "image",
      headerName: "Image",
      type: "longText",
      width: 100,
      renderCell: ({ row: { thumbnail } }) => {
        // console.log(logo)

        return (
          <div className="w-12 h-12 flex items-center justify-center object-center ">
            <img
              src={thumbnail}
              width={50}
              height={50}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        );
      },
    },
    { field: "price", headerName: "Price", width: "150" },
    {
      field: "brandName",
      headerName: "Brand",
      width: 150,
      valueGetter: (value, row) => {
        const foundBrand = brand?.find(
          (item) => String(item.id) === String(row.categoryId),
        );

        return foundBrand?.name || "Unknown";
      },
    },

    {
      field: "description",
      headerName: "Description",
      width: 400,
      align: "left",
      headerAlign: "left",
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 130,
      cellClassName: "actions",
      renderCell: ({ row: { id, title, categoryId } }) => {
        return (
          <>
            <div>
              <Link to={`/model/${categoryId}-${id}`}>
                <GridActionsCellItem
                  icon={VisibilityIcon}
                  label="View"
                  sx={{
                    color: "#FFFFFF",
                    "&:hover": {
                      color: "#FFFFFF",
                      backgroundColor: "#0F3460",
                    },
                  }}
                />
              </Link>

              <Link to={`/model/update/${categoryId}-${id}`}>
                <GridActionsCellItem
                  icon={EditIcon}
                  label="Edit"
                  sx={{
                    color: "#FFFFFF",
                    "&:hover": {
                      color: "#FFFFFF",
                      backgroundColor: "#0F3460",
                    },
                  }}
                />
              </Link>

              <GridActionsCellItem
                label="Delete"
                sx={{
                  color: "#E94560",
                  "&:hover": {
                    color: "#FFFFFF",
                    backgroundColor: "#E94560",
                  },
                }}
                icon={DeleteIcon}
                onClick={() => {
                  let confirmation = window.confirm(
                    `Do you want to delete ${title} category?`,
                  );
                  if (confirmation) {
                    axios
                      .delete(
                        `https://6a79ba5f674f43f4db11a88d.mockapi.io/category/${categoryId}/product/${id}`,
                      )
                      .then(() => {
                        // console.log(response);
                        setUpdate((u) => u + 1);
                        // Bell me data added
                        setBellarr((prev) => [
                          ...prev,
                          {
                            id: Date.now(),
                            type: "Delete Model",
                            message: `${title} Was deleted`,
                          },
                        ]);
                      })
                      .catch((e) => {
                        console.error(e);
                      });
                  }
                }}
              />
            </div>
          </>
        );
      },
    },
  ];

  return (
    <Box
      sx={{
        height: 550,
        width: "100%",

        // =========================
        // MAIN DATAGRID
        // =========================
        "& .MuiDataGrid-root": {
          border: "1px solid #2A2A40",
          backgroundColor: "#16213E",
          color: "#FFFFFF",

          // IMPORTANT
          "--DataGrid-t-color": "#FFFFFF",
          "--DataGrid-pinnedBackground": "#16213E",
          "--DataGrid-containerBackground": "#16213E",
          "--DataGrid-headerBackground": "#1A1A2E",
        },

        // =========================
        // TOOLBAR
        // =========================

        "& .MuiDataGrid-toolbar": {
          backgroundColor: "#16213E !important",
          color: "#FFFFFF !important",
        },

        "& .MuiDataGrid-toolbar *": {
          color: "#FFFFFF !important",
        },

        "& .MuiDataGrid-toolbar button": {
          color: "#FFFFFF !important",
        },

        "& .MuiDataGrid-toolbar button svg": {
          color: "#FFFFFF !important",
        },

        "& .MuiDataGrid-toolbar .MuiIconButton-root": {
          color: "#FFFFFF !important",
        },

        "& .MuiDataGrid-toolbar .MuiIconButton-root svg": {
          color: "#FFFFFF !important",
        },

        "& .MuiDataGrid-toolbarContainer button:hover svg": {
          filter: "brightness(0) invert(1)",
        },
        // =========================
        // COLUMN HEADER
        // =========================
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: "#1A1A2E !important",
          color: "#FFFFFF !important",
          borderBottom: "1px solid #2A2A40",
        },

        "& .MuiDataGrid-columnHeader": {
          backgroundColor: "#1A1A2E !important",
          color: "#FFFFFF !important",
        },

        "& .MuiDataGrid-columnHeaderTitle": {
          color: "#FFFFFF !important",
          fontWeight: 600,
        },

        // Header icons
        "& .MuiDataGrid-columnHeader .MuiSvgIcon-root": {
          color: "#A7A7B3 !important",
        },

        "& .MuiDataGrid-columnHeader .MuiIconButton-root": {
          color: "#A7A7B3 !important",
        },

        "& .MuiDataGrid-columnHeader .MuiIconButton-root:hover": {
          color: "#FFFFFF !important",
          backgroundColor: "#0F3460 !important",
        },

        // =========================
        // ROWS
        // =========================
        "& .MuiDataGrid-row": {
          backgroundColor: "#16213E",
          color: "#FFFFFF",
          borderBottom: "1px solid #2A2A40",
        },

        "& .MuiDataGrid-row:hover": {
          backgroundColor: "#0F3460 !important",
        },

        // Selected row
        "& .MuiDataGrid-row.Mui-selected": {
          backgroundColor: "#0F3460 !important",
        },

        "& .MuiDataGrid-row.Mui-selected:hover": {
          backgroundColor: "#0F3460 !important",
        },

        // =========================
        // CELLS
        // =========================
        "& .MuiDataGrid-cell": {
          color: "#FFFFFF !important",
          borderBottom: "1px solid #2A2A40",
        },

        // =========================
        // ACTIONS
        // =========================
        "& .MuiDataGrid-actionsCell": {
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "8px",
          paddingLeft: "8px",
        },

        "& .MuiDataGrid-actionsCell .MuiIconButton-root": {
          color: "#FFFFFF !important",
        },

        "& .MuiDataGrid-actionsCell .MuiIconButton-root:hover": {
          backgroundColor: "#0F3460 !important",
        },

        // =========================
        // PAGINATION
        // =========================
        "& .MuiDataGrid-footerContainer": {
          backgroundColor: "#1A1A2E",
          borderTop: "1px solid #2A2A40",
        },

        "& .MuiTablePagination-root": {
          color: "#FFFFFF",
        },

        "& .MuiTablePagination-selectLabel": {
          color: "#A7A7B3",
        },

        "& .MuiTablePagination-displayedRows": {
          color: "#A7A7B3",
        },

        "& .MuiTablePagination-select": {
          color: "#FFFFFF",
        },

        "& .MuiTablePagination-actions .MuiIconButton-root": {
          color: "#FFFFFF",
        },

        "& .MuiTablePagination-actions .MuiIconButton-root:hover": {
          backgroundColor: "#0F3460",
        },

        // =========================
        // CHECKBOX
        // =========================
        "& .MuiCheckbox-root": {
          color: "#A7A7B3",
        },

        "& .MuiCheckbox-root.Mui-checked": {
          color: "#0F3460",
        },

        // =========================
        // SCROLLBAR
        // =========================
        "& .MuiDataGrid-virtualScroller::-webkit-scrollbar": {
          width: "8px",
          height: "8px",
        },

        "& .MuiDataGrid-virtualScroller::-webkit-scrollbar-track": {
          backgroundColor: "#0D0D0D",
        },

        "& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb": {
          backgroundColor: "#0F3460",
          borderRadius: "10px",
        },

        "& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "#1A1A2E",
        },
      }}
    >
      <DataGrid rows={model} columns={columns} showToolbar />
    </Box>
  );
}
