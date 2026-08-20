import * as React from "react";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import BellContext from "../BellContext";


export default function ModelDataTable({ model, setUpdate }) {
  const data = useContext(BellContext);
  const { setBellarr } = data;

  // const navigate = useNavigate()

  const columns = [
    { field: "id", headerName: "Id" },
    { field: "title", headerName: "Name" },
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
      width: 100,
      cellClassName: "actions",
      renderCell: ({ row: { id, title } }) => {
        return (
          <>
            <div>
              <Link to={`/model/${id}`}>
                <GridActionsCellItem icon={VisibilityIcon} />
              </Link>

              <Link to={`/model/update/${id}`}>
                <GridActionsCellItem icon={EditIcon} />
              </Link>

              <GridActionsCellItem
                icon={DeleteIcon}
                onClick={() => {
                  let confirmation = window.confirm(
                    `Do you want to delete ${title} category?`,
                  );
                  if (confirmation) {
                    axios
                      .delete(
                        `https://6a79ba5f674f43f4db11a88d.mockapi.io/category/2/product/${id}`,
                      )
                      .then(() => {
                        // console.log(response);
                        setUpdate((u) => u + 1);
                        // Bell me data added
                        setBellarr((prev) => [
                          ...prev,
                          {
                           type:'Delete',
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
        height: 500,
        width: "100%",
        "& .actions": {
          color: "text.secondary",
        },
        "& .textPrimary": {
          color: "text.primary",
        },
      }}
    >
      <DataGrid rows={model} columns={columns} showToolbar />
    </Box>
  );
}
