import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

//data
const rows = [
  {
    id: 1,
    name: "Mohamed",
    registerid: "45654",
    email: "mohamed000@gmail.com",
    age: "23",
    phone: "1236548",
    adress: "985",
    city: "egy",
    zipcode: "54188",
  },
  {
    id: 2,
    name: "Omar",
    registerid: "78654",
    email: "omar000@gmail.com",
    age: "22",
    phone: "9568234",
    adress: "741",
    city: "egy",
    zipcode: "9852",
  },
  {
    id: 3,
    name: "Ziad",
    registerid: "987456",
    email: "ziad000@gmail.com",
    age: "28",
    phone: "963214",
    adress: "544",
    city: "egy",
    zipcode: "3798",
  },
  {
    id: 4,
    name: "Abdallah",
    registerid: "74565",
    email: "abdallah@gmail.com",
    age: "23",
    phone: "369854",
    adress: "3651",
    city: "egy",
    zipcode: "741963",
  },
  {
    id: 5,
    name: "Ali",
    registerid: "45654",
    email: "ali00@gmail.com",
    age: "57",
    phone: "987471",
    adress: "321",
    city: "egy",
    zipcode: "478562",
  },
  {
    id: 6,
    name: "Ashraf",
    registerid: "69874",
    email: "ashraf00@gmail.com",
    age: "55",
    phone: "987413",
    adress: "258",
    city: "egy",
    zipcode: "954876321",
  },
  {
    id: 7,
    name: "Mazen",
    registerid: "45654",
    email: "mazen00@gmail.com",
    age: "17",
    phone: "98752789",
    adress: "654",
    city: "egy",
    zipcode: "9625163",
  },
  {
    id: 8,
    name: "Saad",
    registerid: "137200",
    email: "saad00@gmail.com",
    age: "23",
    phone: "13720052",
    adress: "720",
    city: "egy",
    zipcode: "200137",
  },
  {
    id: 9,
    name: "Talaat",
    registerid: "712003",
    email: "tal@gmail.com",
    age: "33",
    phone: "172003566",
    adress: "713",
    city: "egy",
    zipcode: "13482569",
  },
  {
    id: 10,
    name: "Mohamed",
    registerid: "45654",
    email: "mohamed000@gmail.com",
    age: "23",
    phone: "1236548",
    adress: "985",
    city: "egy",
    zipcode: "54188",
  },
];
const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 33,
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "registerid",
    headerName: "Register ID",
    width: 33,
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
    field: "age",
    headerName: "Age",
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
    field: "phone",
    headerName: "Phone",
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "adress",
    headerName: "Adress",
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "city",
    headerName: "City",
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "zipcode",
    headerName: "Zip Code",
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
];

export default function PageBalance() {
  const theme = useTheme();
  return (
    <div
      className="teamContent"
      style={{
        height: 600,
        width: "98%",
        margin: "0 auto",
      }}
    >
      <Box className="head" style={{ marginBottom: "30px" }}>
        <h1 style={{ color: theme.palette.primary.dark, fontWeight: "bold" }}>
          INVOICES
        </h1>
        <p
          style={{
            fontWeight: "bold",
            fontSize: "18px",
            color: theme.palette.mode === "dark" ? "#fff" : " #000",
          }}
        >
          List if Invoices Balance
        </p>
      </Box>

      <DataGrid checkboxSelection rows={rows} columns={columns} />
    </div>
  );
}
