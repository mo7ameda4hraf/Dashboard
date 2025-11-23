import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

const rows = [
  {
    id: 1,
    name: "Mohamed",
    email: "mohamed000@gmail.com",
    age: "23",
    phone: "1236548",
    acsess: "Admin",
  },
  {
    id: 2,
    name: "Ahmed",
    email: "ahmed000@gmail.com",
    age: "20",
    phone: "98646",
    acsess: "Admin",
  },
  {
    id: 3,
    name: "Ziad",
    email: "ziad000@gmail.com",
    age: "18",
    phone: "968746",
    acsess: "User",
  },
  {
    id: 4,
    name: "Ashraf",
    email: "ashraf000@gmail.com",
    age: "50",
    phone: "986746",
    acsess: "Maneger",
  },
  {
    id: 5,
    name: "Abdallah",
    email: "abdallah000@gmail.com",
    age: "23",
    phone: "98645",
    acsess: "User",
  },
  {
    id: 6,
    name: "Omar",
    email: "omar000@gmail.com",
    age: "12",
    phone: "968453",
    acsess: "User",
  },
  {
    id: 7,
    name: "Ali",
    email: "ali000@gmail.com",
    age: "30",
    phone: "968453",
    acsess: "Admin",
  },
  {
    id: 8,
    name: "Abdelfatah",
    email: "Abdelfatah@gmail.com",
    age: "85",
    phone: "852965",
    acsess: "Maneger",
  },
  {
    id: 9,
    name: "Tamem",
    email: "temo000@gmail.com",
    age: "4",
    phone: "968453",
    acsess: "User",
  },
];

export default function PageMangeTeam() {
  const theme = useTheme();

  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "age",
      headerName: "Age",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "acsess",
      headerName: "Acsess",
      headerAlign: "center",
      align: "center",
      flex: 1,
      renderCell: (params) => {
        return (
          <Box
            sx={{
              p: "5px",
              width: "90px",
              borderRadius: "3px",
              textAlign: "center",
              color: "white",
              display: "flex",
              justifyContent: "center",
              gap: "5px",
              margin: "8px auto",
              backgroundColor:
                params.row.acsess === "Admin"
                  ? theme.palette.primary.dark
                  : params.row.acsess === "Maneger"
                  ? theme.palette.secondary.dark
                  : "#3da58a",
            }}
          >
            {params.row.acsess === "Admin" && (
              <AdminPanelSettingsOutlinedIcon fontSize="small" />
            )}
            {params.row.acsess === "Maneger" && (
              <SecurityOutlinedIcon fontSize="small" />
            )}
            {params.row.acsess === "User" && (
              <LockOpenOutlinedIcon fontSize="small" />
            )}
            <Typography variant="body1">{params.row.acsess}</Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <div
      className="teamContent"
      style={{
        height: 600,
        width: "98%",
        margin: "0 auto",
      }}
    >
      <DataGrid style={{}} rows={rows} columns={columns} />
    </div>
  );
}
